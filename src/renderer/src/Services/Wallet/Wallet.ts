import AuthData from '@renderer/Models/AuthData.model'
import { AUTH_INFOS, NEBULA_ADDR } from '../globals'
import { getUserInfos } from '../User/User'
import Wallet from '@renderer/Models/Wallet.model'

//C-Stacks
export const getWalletGold = async () => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthData

  const userInfos = await getUserInfos()
  if (!userInfos) return false

  const apiCall = await fetch(
    NEBULA_ADDR + '/platform/public/namespaces/pd3/users/' + userInfos.userId + '/wallets/GOLD',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authInfos.accessToken
      }
    }
  )
  if (apiCall.status !== 200) return false

  const walletGold = (await apiCall.json()) as Wallet

  return walletGold
}

//in-game dollars
export const getWalletCash = async () => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthData

  const userInfos = await getUserInfos()
  if (!userInfos) return false

  const apiCall = await fetch(
    NEBULA_ADDR + '/platform/public/namespaces/pd3/users/' + userInfos.userId + '/wallets/CASH',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authInfos.accessToken
      }
    }
  )
  if (apiCall.status !== 200) return false

  const walletCash = (await apiCall.json()) as Wallet

  return walletCash
}

//Premium Currency
export const getWalletCred = async () => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthData

  const userInfos = await getUserInfos()
  if (!userInfos) return false

  const apiCall = await fetch(
    NEBULA_ADDR + '/platform/public/namespaces/pd3/users/' + userInfos.userId + '/wallets/CRED',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authInfos.accessToken
      }
    }
  )
  if (apiCall.status !== 200) return false

  const walletCred = (await apiCall.json()) as Wallet

  return walletCred
}
