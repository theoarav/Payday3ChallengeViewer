import { Outlet } from 'react-router-dom'
import './About.css'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { $$ } from '@renderer/App/Components/Language/StringReplacer'
import { getChosenLanguage } from '@renderer/Services/Language/Language'
import { generateLocalizatons } from '@renderer/Services/Language/GenerateLocalizations'
import {
  Button,
} from '@mui/material'

const language = getChosenLanguage();

export default function About(): JSX.Element {
  return (
    <>
      <div className='homeInfo'>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <div>Version: v1.2.0</div>
          </Grid>
          <Grid item xs={12}>
            <div>Application made by: <a href="https://github.com/theoarav">Elmoren</a>, <a href="https://github.com/InsulatorGMan">InsulatorGMan</a> and <a href="https://github.com/DudiVok">DudiVok</a></div> 
          </Grid>
          {language!=="en" && <Grid item xs={12}>
            <Typography>{$$("about.localizationMadeBy")}</Typography>
          </Grid>}
          <Grid item xs={12}>
            <Button color="error" onClick={generateLocalizatons}>
              Generate Localizations
            </Button>
          </Grid>
        </Grid>
      </div>
      <Outlet />
    </>
  )
}
