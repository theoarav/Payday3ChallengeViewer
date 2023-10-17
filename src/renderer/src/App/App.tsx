import { useState, useEffect, useMemo, ReactElement } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Challenges from './Components/Challenges/Challenges'
import { useMediaQuery } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { RootProps } from './Routes/Root/Root'
import About from './Routes/About/About'
import { /* BarChart, */ TrackChanges, Info} from '@mui/icons-material'
import Error from './Routes/Error/Error'

export default function App() {
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

  const routes: RootProps = {
    navigationRoutes: [
      {
        label: 'Challenges',
        icon: <TrackChanges />,
        route: '/challenges'
      },
      {
        label: 'About',
        icon: <Info />,
        route: '/about'
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
          element: <Challenges />
        },
        {
          path: '/about',
          element: <About />
        },
      ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
