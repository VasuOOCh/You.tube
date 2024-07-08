import styled from "styled-components"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 56px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 20px;
    justify-content: flex-end;
    position: relative;
`

const Search = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    justify-content: space-between;
    gap: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
`
const Input = styled.input`
    flex: 1;
    border: none;
    background-color: transparent;

    &:active{
        border: none;
        outline: none;
    }

    &:focus {
        border: none;
        outline: none;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: transparent;
    padding: 5px 15px;
    border: 1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 1px ;
    cursor: pointer;

`


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"/>
                    <SearchIcon />
                </Search>
                <Button>
                    <AccountCircleIcon />
                    SIGN IN
                </Button>
            </Wrapper>
        </Container>
    )
}