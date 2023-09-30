import { Button, Box, FormControlLabel, Checkbox } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import SearchBar from './searchBar.components'
import { useState } from 'react'

export const ChallengesHeader = ({ fetchData, setSearchTerm, signOut, onShowOnlyPinnedChange }) => {
  const [showOnlyPinned, setShowOnlyPinned] = useState(false)

  const handleChange = (event) => {
    setShowOnlyPinned(event.target.checked)
    onShowOnlyPinnedChange(event.target.checked)
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
        <Button onClick={signOut}>Sign out</Button>
      </Box>
    </Box>
  )
}
