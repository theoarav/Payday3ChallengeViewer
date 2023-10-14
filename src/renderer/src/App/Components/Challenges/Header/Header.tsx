import RefreshIcon from '@mui/icons-material/Refresh'
import SettingsIcon from '@mui/icons-material/Settings'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useEffect, useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, IconButton } from '@mui/material'
import SearchBar from './SearchBar'
import SettingsModal from '../../Modals/Settings'
import CountDown from './CountdownTimer'
import { getUserInfos } from '../../../../Services/User/User'
import { getWalletGold, getWalletCash, getWalletCred } from '../../../../Services/Wallet/Wallet'
import Tooltip from '@mui/material/Tooltip';
import './Profile.css'
import LevelFromIP from './LevelFromIP'
import { numbersWithSeparator } from '../../Utils/Utils';

export type sanitizedUserInfo = {
  userId: string,
  displayName: string,
  avatar: string,
  email: string,
}

export type walletInfo = {
  cash: number,
  gold: number,
  cred: number,
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
  totalIP,
  ipAcquired
}: {
  fetchData
  setSearchTerm
  signOut
  setLanguage
  openModal
  setFiltersOpen
  onShowOnlyPinnedChange
  handleSortOption
  totalIP,
  ipAcquired
}) {
  const [showCountdownRefresh, setShowCountdownRefresh] = useState(true)
  const [showOnlyPinned, setShowOnlyPinned] = useState(false)
  const [userInfos, setUserInfos] = useState<sanitizedUserInfo>()
  const [walletData, setWalletData] = useState<walletInfo>()
  const [secondsTillNextCReset] = useState<number>(getSeconds())

  useEffect(() => {
    fetchUserInfo()
    fetchWalletData()
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

  const fetchWalletData = async () => {
    try {
      const walletCash:any = await getWalletCash()
      const walletGold:any = await getWalletGold()
      const walletCred:any = await getWalletCred()

      let walletData:walletInfo = {cash: walletCash.balance, gold: walletGold.balance, cred: walletCred.balance}
      setWalletData(walletData)
    } catch (error) {
      console.error('Error fetching wallet data: ', error)
    }
  }


  //Hétfő hajnali 2-kor reset
  function getSeconds() {
    var nowDate = new Date();
    let cStackResetFirstTime = new Date('2023-10-16 02:00');

    while(nowDate>cStackResetFirstTime)
    {
      cStackResetFirstTime.setDate(cStackResetFirstTime.getDate() + 7)
    }

    var diff:number = (cStackResetFirstTime.getTime() - nowDate.getTime())/1000;
    return diff;
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
            {showCountdownRefresh && userInfos && <CountDown startSeconds={(userInfos && ["5feeacfaac5d4758a21b50ffdff13a08"].includes(userInfos.userId)) ? 3 : 300} onComplete={timerIsUp} />}
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
        <div style={{display: "contents"}}>
        <IconButton aria-label="pin" onClick={openSettingsModal} style={{cursor: "pointer"}}>
          <Tooltip placement="top" title="Options">
            <SettingsIcon />
          </Tooltip>
        </IconButton>
        <LevelFromIP ip={ipAcquired} totalIP={totalIP}/>
        {userInfos && <Tooltip
          placement="top"
          title={
            <div>
              <span style={{fontSize:"16px"}}>Current Wallet:</span>
              <br/>
                <span className='tooltipText'>- Cash: </span>
                <span className='tooltipText cash outlined'>${numbersWithSeparator(walletData ? walletData.cash : 0)}</span>
              <br/>
                <span className='tooltipText'>- C-Stacks: </span>
                <span className='tooltipText gold outlined'>{numbersWithSeparator(walletData ? walletData.gold : 0)}</span>
              <br/>
                <span className='tooltipText'>- Payday Credits: </span>
                <span className='tooltipText cred outlined'>{numbersWithSeparator(walletData ? walletData.cred : 0)} </span>
              <br/>
              <br/>
              <span className='tooltipText'>Next C-Stack vendor reset in: </span>
              <span className='tooltipText'><CountDown startSeconds={secondsTillNextCReset} format="DAY"/></span>
              
            </div>
          }
        >
          <LocalAtmIcon style={{marginLeft: "5px"}}/> 
        </Tooltip>}
        <label>&#160;|</label>
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
