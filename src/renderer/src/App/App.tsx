import { useState, useEffect, useMemo, ReactElement } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import SignIn from './Components/SignIn/SignIn'
import { isLoggedIn } from '../Services/Auth/Auth'
import Challenges from './Components/Challenges/Challenges'
import { useMediaQuery } from '@mui/material'

function App(): ReactElement {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  )

  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (): void => {
    checkLoginStatus()
  }

  const checkLoginStatus = async (): Promise<void> => {
    const loggedIn = await isLoggedIn()
    setLoggedIn(loggedIn)
  }

  useEffect(() => {
    checkLoginStatus()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loggedIn ? <Challenges onLogout={handleLogin} /> : <SignIn onLogin={handleLogin} />}
    </ThemeProvider>
  )
}

export default App
