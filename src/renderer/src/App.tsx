import { useState, useEffect, useMemo, ReactElement } from 'react'
import './assets/App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import SignIn from './components/signin.components'
import { isLoggedIn } from './service/auth.service'
import Challenges from './components/challenges.components'
import { useMediaQuery } from '@mui/material'
import React from 'react'

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
