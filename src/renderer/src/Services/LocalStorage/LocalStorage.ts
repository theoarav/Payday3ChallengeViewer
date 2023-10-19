import AuthData from '@renderer/Models/AuthData.model'
import { AUTH_INFOS } from '../globals'

interface AuthData {
  access_token: string
  expires_in: number
  refresh_token: string
  refresh_expires_in: number
}

export const setLocalStorageData = (authData: AuthData): void => {
  const currentDate = Date.now() / 1000

  const authInfos: AuthData = {
    accessToken: authData.access_token,
    accessTokenExp: currentDate + authData.expires_in,
    refreshToken: authData.refresh_token,
    refreshTokenExp: currentDate + authData.refresh_expires_in
  }

  localStorage.setItem(AUTH_INFOS, JSON.stringify(authInfos))
}
