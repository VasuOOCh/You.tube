import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: ${(props) => props.type != "sm" && "360px"};
    margin-bottom:  ${(props) => props.type == "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type == "sm" && "flex"};
    gap: 10px;
`
const Image = styled.img`
    height: ${(props) => props.type == "sm" ? "100px" : "202px"};
    width: 100%;
    object-fit: cover;
    background-color: #999;
    flex: ${(props) => props.type == "sm" && "1"}
`

const Details= styled.div`
    display: flex;
    margin-top: ${(props) => props.type != "sm" && "16px"};
    gap: 12px;
    flex: ${(props) => props.type == "sm" && "1"}
`

const ChannelImage = styled.img`
    border-radius: 50%;
    height: 36px;
    width: 36px;
    background-color: #999;
    object-fit: cover;
    display: ${(props) => props.type == "sm" && "none"};
`
const Texts = styled.div`
    
`

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0px;
`
const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`

export default function Card({type}) {
    return (
       <Link to={`/video/test`} style={{textDecoration: 'none'}}>
        <Container type={type}>
            <Image type={type}  src="https://static-cse.canva.com/blob/1577482/1600w-wK95f3XNRaM.jpg"/>
            <Details  type={type}>
                <ChannelImage  type={type} src='data:image/jpeg;base64,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'/>
                <Texts >
                    <Title>Test Video</Title>
                    <ChannelName>Lama Dev</ChannelName>
                    <Info>
                        660,98 views • 1 day ago
                    </Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    )
}