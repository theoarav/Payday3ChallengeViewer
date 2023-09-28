import { useState, useEffect } from 'react'
import './assets/App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import SignIn from './components/signin.components'
import { isLoggedIn } from './service/auth.service'
import Challenges from './components/challenges.components'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    checkLoginStatus()
  }

  const checkLoginStatus = async () => {
    const loggedIn = await isLoggedIn()
    setLoggedIn(loggedIn)
  }

  useEffect(() => {
    checkLoginStatus()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {loggedIn ? <Challenges onLogout={handleLogin} /> : <SignIn onLogin={handleLogin} />}
    </ThemeProvider>
  )
}

export default App
