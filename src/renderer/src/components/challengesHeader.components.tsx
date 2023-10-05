import RefreshIcon from '@mui/icons-material/Refresh'
import SettingsIcon from '@mui/icons-material/Settings'
import { Box, Button, Checkbox, FormControlLabel, IconButton } from '@mui/material'
import { useState } from 'react'
import SearchBar from './searchBar.components'
import SettingsModal from './settingsModal.components'

export default function ChallengesHeader({
  fetchData,
  setSearchTerm,
  signOut,
  onShowOnlyPinnedChange,
  setLanguage,
  openModal
}) {
  const [showOnlyPinned, setShowOnlyPinned] = useState(false)

  const handleChange = (event) => {
    setShowOnlyPinned(event.target.checked)
    onShowOnlyPinnedChange(event.target.checked)
  }

  const openSettingsModal = () => {
    openModal(<SettingsModal signOut={signOut} setLanguageSetting={setLanguage} />)
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 3fr 0.5fr',
        alignItems: 'center',
        pt: 2,
        px: 2,
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'flex-start'
        }}
      >
        <Button color="primary" onClick={fetchData} startIcon={<RefreshIcon fontSize="inherit" />}>
          Refresh data
        </Button>
        <FormControlLabel
          label={'Show only pinned challenges'}
          control={<Checkbox checked={showOnlyPinned} onChange={handleChange} color="success" />}
        />
      </Box>
      <SearchBar onChange={setSearchTerm} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <IconButton aria-label="pin" onClick={openSettingsModal}>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
