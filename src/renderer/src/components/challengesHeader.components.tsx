import RefreshIcon from '@mui/icons-material/Refresh'
import SettingsIcon from '@mui/icons-material/Settings'
import { ReactElement, useEffect, useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, IconButton } from '@mui/material'
import SearchBar from './searchBar.components'
import SettingsModal from './settingsModal.components'
import CountDown from './countdownTimer.components'
import { getUserInfos } from '@renderer/service/auth.service'
import Tooltip from '@mui/material/Tooltip';
import '../assets/profile.css'

export type sanitizedUserInfo = {
  userId: string,
  displayName: string,
  avatar: string,
  email: string,
}

export default function ChallengesHeader({
  fetchData,
  setSearchTerm,
  signOut,
  setLanguage,
  openModal,
  setFiltersOpen,
  onShowOnlyPinnedChange,
  handleSortOption,
}: {
  fetchData
  setSearchTerm
  signOut
  setLanguage
  openModal
  setFiltersOpen
  onShowOnlyPinnedChange
  handleSortOption
}) {
  const [showCountdownRefresh, setShowCountdownRefresh] = useState(true)
  const [showOnlyPinned, setShowOnlyPinned] = useState(false)
  const [userInfos, setUserInfos] = useState<sanitizedUserInfo>()

  useEffect(() => {
    fetchUserInfo()
  }, [])


  const handleChange = (event) => {
    setShowOnlyPinned(event.target.checked)
    onShowOnlyPinnedChange(event.target.checked)
  }

  const openSettingsModal = (): void => {
    openModal(<SettingsModal signOut={signOut} setLanguageSetting={setLanguage} />)
  }

  function timerIsUp(): void {
    setShowCountdownRefresh(false)
  }

  function refreshButtonFunc(): void {
    setShowCountdownRefresh(true)
    fetchData()
  }

  const fetchUserInfo = async () => {
    try {
      const fetchedUserInfo:any = await getUserInfos()
      let sanitizedUserInfo:sanitizedUserInfo = {userId: fetchedUserInfo.userId, displayName: fetchedUserInfo.displayName, avatar: fetchedUserInfo.avatarUrl, email: fetchedUserInfo.emailAddress}
      setUserInfos(sanitizedUserInfo)
    } catch (error) {
      console.error('Error fetching user data: ', error)
    }
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
        <Button
          color="primary"
          onClick={refreshButtonFunc}
          startIcon={<RefreshIcon fontSize="inherit" />}
          disabled={showCountdownRefresh}
          sx={{ marginRight: 2 }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            Refresh data
            {showCountdownRefresh && userInfos && <CountDown startSeconds={(userInfos && ["5feeacfaac5d4758a21b50ffdff13a08", "5feeacfaac5d4758a21b50ffdff13a09"].includes(userInfos.userId)) ? 3 : 300} onComplete={timerIsUp} />}
          </Box>
        </Button>
        <FormControlLabel
          label={'Show only pinned challenges'}
          control={<Checkbox checked={showOnlyPinned} onChange={handleChange} color="success" />}
        />
      </Box>
      <SearchBar onChange={setSearchTerm} open={false} setOpen={setFiltersOpen} handleSortOption={handleSortOption}/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: "center",
        }}
      >      
        <IconButton aria-label="pin" onClick={openSettingsModal} style={{cursor: "pointer"}}>
          <Tooltip placement="top" title="Options">
            <SettingsIcon />
          </Tooltip>
        </IconButton>
        <div style={{display: "contents"}}>
        {userInfos && <h4 className="profileName" style={{marginLeft: "5px"}}>{userInfos.displayName}</h4>}
        {userInfos && <img
            src={userInfos.avatar}
            style={{maxWidth: "50px", margin: "0 5px 0 5px", border: "3px solid rgba(0, 255, 0, 0.4)", borderRadius: "45px"}}
        />}
        </div>
      </Box>
    </Box>
  )
}
