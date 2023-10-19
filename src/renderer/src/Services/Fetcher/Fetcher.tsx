import AccountDetails from '@renderer/Models/AccountDetails.model'
import { USER_DATA } from '../globals'
import { getUserInfos } from '../User/User'

export const fetchAccountDetails = async () => {
  const userInfos = await getUserInfos()

  if (!userInfos) return

  //Sanitizing value, we don't care about half the data SBZ sends.
  let accountDetails: AccountDetails = {
    avatar: userInfos.avatarUrl,
    userName: userInfos.userName,
    displayName: userInfos.displayName,
    emailAddress: userInfos.emailAddress
  }

  console.log('accountDetails:', accountDetails)

  localStorage.setItem(USER_DATA, JSON.stringify(accountDetails))
  return
}

export const fetchSaveDetails = async () => {
  //should be fetched once first logged in check returns true and also on the challenges refreshbutton.

  //getSaveData from User
  //getUserChallenges from Challenges
  //getWalletGold, getWalletCash, getWalletCred from Wallet

  //Store into LocalStorage
  return
}
