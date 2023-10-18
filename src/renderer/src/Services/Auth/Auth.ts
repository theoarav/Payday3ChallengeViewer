import { AuthModel } from '@renderer/Model/auth.model'
import {
  PINNED_CHALLENGES,
  AUTH_INFOS,
  CLIENT_ID,
  NEBULA_ADDR,
  FETCH_HEADERS,
} from '../globals'
import { setLocalStorageData } from '../LocalStorage/LocalStorage'

export const logout = (): void => {
  localStorage.removeItem(PINNED_CHALLENGES)
  localStorage.removeItem(AUTH_INFOS)
}

export const login = async (loginData: FormData): Promise<boolean> => {
  loginData.append('grant_type', 'password')
  loginData.append('client_id', CLIENT_ID)
  loginData.append('extend_exp', 'true')

  const urlEncondedData = new URLSearchParams()
  for (const pair of loginData) {
    urlEncondedData.append(pair[0], pair[1] as string)
  }
  const apiCall = await fetch(NEBULA_ADDR + '/iam/v3/oauth/token', {
    method: 'POST',
    headers: {
      ...FETCH_HEADERS,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: urlEncondedData
  })
  if (apiCall.status !== 200) return false

  const authData = await apiCall.json()

  setLocalStorageData(authData)

  return true
}

const refreshToken = async (refreshToken: string): Promise<boolean> => {
  const urlEncondedData = new URLSearchParams()
  urlEncondedData.append('grant_type', 'refresh_token')
  urlEncondedData.append('client_id', CLIENT_ID)
  urlEncondedData.append('refresh_token', refreshToken)

  const apiCall = await fetch(NEBULA_ADDR + '/iam/v3/oauth/token', {
    method: 'POST',
    headers: {
      ...FETCH_HEADERS,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: urlEncondedData
  })
  if (apiCall.status !== 200) return false

  const authData = await apiCall.json()

  setLocalStorageData(authData)
  return true
}

export const isLoggedIn = async (): Promise<boolean> => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthModel
  if (authInfos.accessTokenExp > Date.now() / 1000) {
    return true
  } else if (authInfos.refreshTokenExp > Date.now() / 1000) {
    return refreshToken(authInfos.refreshToken)
  }
  return false
}
