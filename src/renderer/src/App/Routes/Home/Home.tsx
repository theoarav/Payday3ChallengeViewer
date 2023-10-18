import { Outlet } from 'react-router-dom'
import './Home.css'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { $$ } from '@renderer/App/Components/Language/StringReplacer'
import { getChosenLanguage } from '@renderer/Services/Language/Language'
import { isLoggedIn } from '@renderer/Services/Auth/Auth'
import SignIn from '@renderer/App/Components/SignIn/SignIn'
import { useEffect, useState } from 'react'
import { USER_DATA } from '@renderer/Services/globals'
import { fetchAccountDetails } from '@renderer/Services/Fetcher/Fetcher'
import { Button } from '@mui/material'
import { AccountDetails } from '@renderer/Services/Fetcher/Fetcher'

const language = getChosenLanguage();

/**
 * Homescreen. This will show on the first launch of the app.
 */
export default function Home(): JSX.Element {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [userData, setUserData] = useState<AccountDetails>({})

  useEffect(() => {
    checkLoginAndGetUsername()
  }, [])

  const handleLogin = (): void => {
    checkLoginAndGetUsername()
  }

  const checkLoginAndGetUsername = async (): Promise<void> => {
    try {
      const loggedIn = await isLoggedIn();
      setLoggedIn(loggedIn)

      if(loggedIn) await fetchAccountDetails();

      let userData = localStorage.getItem(USER_DATA);
      console.log("userData:",JSON.parse(userData!))

      if(userData !== null) setUserData(JSON.parse(userData))
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }


  
  return (
    <>
      {showLogin ? <SignIn onLogin={() => {
        handleLogin;
        setShowLogin(false);
      }}/>
      :
      <div className='homeInfo'>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <img className='splash-img' src="\src\Image\icon.png"/>
          </Grid>
          <Grid item xs={12}>
            <Typography className='appName'><b>Payday 3 Challenge Viewer</b></Typography>
          </Grid>
          <Grid item xs={12}>
            {loggedIn ? 

            //Localization {$$("main.welcomeText", language)}
            <div>Welcome, {userData!.displayName}!</div>  
            :
            <div>
              To use the app, you need to log in with your Starbreeze Nebula Account.
              <Button onClick={() => setShowLogin(true)}>Log in</Button>
            </div>
          }
          </Grid>
        </Grid>
      </div>
      }
      <Outlet />
    </>
  )
}
