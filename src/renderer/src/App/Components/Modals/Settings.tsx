import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material'
import { DEFAULT_LANGUAGE, getChosenLanguage } from '../../../Services/Language/Language'
import { exportPayCheck3Data } from '@renderer/Services/Paycheck3/Paycheck3'
import { useState } from 'react'
import { generateLocalizatons } from '@renderer/Services/Language/GenerateLocalizations'

export default function SettingsModal({ setLanguageSetting }: any) {
  const [language, setLanguage] = useState(getChosenLanguage)

  const handleLanguageSelect = (event: SelectChangeEvent) => {
    const languageSelected = event.target.value as string
    setLanguage(languageSelected)
    setLanguageSetting(languageSelected)
  }

  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          width: '50%'
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            label="Language"
            onChange={handleLanguageSelect}
          >
            <MenuItem value={DEFAULT_LANGUAGE}>English</MenuItem>
            <MenuItem value={'de_DE'}>German</MenuItem>
            <MenuItem value={'es_419'}>Latin American Spanish</MenuItem>
            <MenuItem value={'es_ES'}>Spanish</MenuItem>
            <MenuItem value={'fr_FR'}>French</MenuItem>
            <MenuItem value={'it_IT'}>Italian</MenuItem>
            <MenuItem value={'ja_JP'}>Japanese</MenuItem>
            <MenuItem value={'ko_KR'}>Korean</MenuItem>
            <MenuItem value={'pl_PL'}>Polish</MenuItem>
            <MenuItem value={'pt_BR'}>Portuguese</MenuItem>
            <MenuItem value={'ru_RU'}>Russian</MenuItem>
            <MenuItem value={'tr_TR'}>Turkish</MenuItem>
            <MenuItem value={'zh_Hans'}>Simplified Chinese</MenuItem>
            <MenuItem value={'zh_Hant'}>Traditional Chinese</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="subtitle2" component="h2">
          Exports data required for PayCheck 3.
        </Typography>
        <Typography variant="subtitle2" component="h2">
          Do not use if you don't know what it's for.
        </Typography>
        <Button color="error" onClick={exportPayCheck3Data}>
          Export data (PayCheck3)
        </Button>

        <Button color="error" onClick={generateLocalizatons}>
          Generate Localizations
        </Button>
      </Box>
    </Container>
  )
}
