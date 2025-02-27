import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import { darkTheme, lightTheme } from './utils/Theme'
import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from './pages/Home'
import Video from './pages/Video'
import Signin from './pages/Signin'


const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`

const Wrapper = styled.div`
  padding: 22px 40px;
`

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter >

          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home/>} />
                  <Route path='signin' element={<Signin/>} />
                  <Route path='video' >
                    <Route path=':id' element={<Video/>} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
