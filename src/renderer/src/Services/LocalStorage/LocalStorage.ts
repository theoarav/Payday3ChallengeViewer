import AuthData from '@renderer/Models/AuthData.model'
import { AUTH_INFOS } from '../globals'
import LoginResponse from '@renderer/Models/LoginResponse.model'

export const setLocalStorageData = (authData: LoginResponse): void => {
  const currentDate = Date.now() / 1000

  const authInfos: AuthData = {
    accessToken: authData.access_token,
    accessTokenExp: currentDate + authData.expires_in,
    refreshToken: authData.refresh_token,
    refreshTokenExp: currentDate + authData.refresh_expires_in
  }

  localStorage.setItem(AUTH_INFOS, JSON.stringify(authInfos))
}
