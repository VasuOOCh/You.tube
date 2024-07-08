
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
    display: flex;
    padding: 20px 50px;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    gap: 10px;
`

const Title = styled.h1`
font-size: 24px;
`

const SubTitle = styled.h2`
font-size : 20px;
font-weight: 300;
`


const Input = styled.input`
padding: 10px;
border: 1px solid ${({ theme }) => theme.soft};
background: transparent;
border-radius: 3px;
width: 100%;
`
const Button = styled.button`
    border-radius: 3px;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
border: none;
padding : 10px 20px;
cursor: pointer;
font-weight: 600;
`
const More = styled.div`
font-size: 12px;
margin-top: 10px;
color: ${({theme}) => theme.textSoft};
display:flex;
`

const Links = styled.div`
    margin-left: 50px;    
    display: flex;
    gap: 5px;
    
`
const Link = styled.span`
    /* color: #2a86c4; */
    text-decoration: none;
`

export default function Signin() {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <SubTitle>to continue to Youtube</SubTitle>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button>Sign in</Button>

                <Title>or</Title>
                <Input type="text" placeholder="Username" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button>Sign up</Button>


            </Wrapper>
            <More>
                English (USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}