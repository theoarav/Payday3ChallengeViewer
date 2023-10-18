import { useMemo } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useMediaQuery } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { RootProps } from './Routes/Root/Root'
import Home from './Routes/Home/Home'
import Challenges from './Components/Challenges/Challenges'
import About from './Routes/About/About'
import { /* BarChart, */ TrackChanges, Info, Home as HomeIcon} from '@mui/icons-material'
import Error from './Routes/Error/Error'
import { $$ } from './Components/Language/StringReplacer'

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
        label: 'Home',
        icon: <HomeIcon />,
        route: '/'
      },
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
          path: '/',
          element: <Home />
        },
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
