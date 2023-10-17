import { BottomNavigation, BottomNavigationAction, /* Paper */ } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './Root.css'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { $$ } from '@renderer/App/Components/Language/StringReplacer'
import { getChosenLanguage } from '@renderer/Services/Language/Language'
import { generateLocalizatons } from '@renderer/Services/Language/GenerateLocalizations'
import { Button } from '@mui/material'
import { isLoggedIn } from '@renderer/Services/Auth/Auth'
import SignIn from '@renderer/App/Components/SignIn/SignIn'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export interface RootProps {
  navigationRoutes: Array<{ label?: string; icon?: JSX.Element; route: string }>
}

const language = getChosenLanguage();

//


/**
 *@InsulatorGMan
 * Root Elements that will be rendered despite current router state.
 */
export default function Root(props: RootProps): JSX.Element {
  const location = (useLocation()).pathname; 
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    checkLoginAndGetUsername()
  }, [])

  const handleLogin = (): void => {
    checkLoginAndGetUsername()
  }

  const checkLoginAndGetUsername = async (): Promise<void> => {
    try {
      const loggedIn = await isLoggedIn()

      setLoggedIn(loggedIn)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }


  return (
    <>
    {location === "/" ?
      <div className='rootInfo'>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <img src="\src\Image\icon.png"/>
          </Grid>
          <Grid item xs={12}>
            <Typography><b>Payday 3 Challenge Viewer</b></Typography>
          </Grid>
          <Grid item xs={12}>
            {loggedIn ? 
            <div>Welcome, user</div>  
            :
            ""
          }
          </Grid>
        </Grid>
      </div>
      :
      null}

      <BottomNavigation showLabels id="BottomNavigation">
        {props.navigationRoutes.map((route, key) => {
          return (
            <BottomNavigationAction
              label={route.label}
              icon={route.icon}
              onClick={(): void => {
                window.location.href = route.route
              }}
              key={key}
            />
          )
        })}
      </BottomNavigation>
      <Outlet />
    </>
  )
}
