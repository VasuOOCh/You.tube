import styled from "styled-components"
import LogoImg from '../images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VideoLibrary from "@mui/icons-material/VideoLibrary";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1.2;
    background-color :${({theme}) => theme.bg};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    overflow-y: scroll;
    position: sticky;
    top: 0;

    &::-webkit-scrollbar{
        width: 7px;
    }
    &::-webkit-scrollbar-track {
    background: transparent;
    }

    &::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
    }
`

const Wrapper = styled.div`
    padding: 18px 26px;
    
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
`
const Img = styled.img`
    height: 28px;

`

const Item = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 7.5px 0px;
    cursor: pointer;

`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
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

export default function Menu({setDarkMode,darkMode}) {
    return (
        <Container>
            <Wrapper>
                <Link to={'/'} style={{textDecoration: "none",color: "inherit"}}>
                <Logo>
                    <Img src={LogoImg} />
                    YouTube
                </Logo></Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscriptions
                </Item>
                <Hr />
                <Item>
                    <VideoLibrary />
                    Library
                </Item>
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to Like videos, comment and subscribe
                    <Button>
                        <AccountCircleIcon />
                        SIGN IN
                    </Button>
                </Login>
                <Hr />
                <Item>
                    <LibraryMusicIcon />
                    Music
                </Item>
                <Item >
                    <SportsBasketballIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieIcon />
                    Movies
                </Item>
                <Item>
                    <NewspaperIcon />
                    News
                </Item>
                <Item>
                    <LiveTvIcon />
                    Live
                </Item>
                <Hr />
                <Item>
                    <SettingsIcon />
                    Setting
                </Item>
                <Item>
                    <FlagIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineIcon />
                    Help
                </Item>
                <Item onClick={() => {setDarkMode(!darkMode)}}>
                    <SettingsBrightnessIcon />
                    {darkMode ? "LightMode" : "DarkMode"}
                </Item>

            </Wrapper>
        </Container>
    )
}