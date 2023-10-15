import { useState, useEffect, useMemo, ReactElement } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import SignIn from './Components/SignIn/SignIn'
import { isLoggedIn } from '../Services/Auth/Auth'
import Challenges from './Components/Challenges/Challenges'
import { useMediaQuery } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { RootProps } from './Routes/Root/Root'
import { BarChart, TrackChanges } from '@mui/icons-material'
import Error from './Routes/Error/Error'

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

  const routes: RootProps = {
    navigationRoutes: [
      {
        label: 'Challenges',
        icon: <TrackChanges />,
        route: '/challenges'
      }
      // {
      //   label: 'Stats',
      //   icon: <BarChart />,
      //   route: '/stats'
      // }
    ]
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root navigationRoutes={routes.navigationRoutes} />,
      errorElement: <Error />,
      children: [
        {
          path: '/challenges',
          element: <Challenges onLogout={handleLogin} />
        }
      ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loggedIn ? <RouterProvider router={router} /> : <SignIn onLogin={handleLogin} />}
    </ThemeProvider>
  )
}

export default App
