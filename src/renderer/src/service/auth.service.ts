import { AuthModel } from '../model/auth.model'
import { checkForMissingTranslations } from '../components/stringReplacer.components'

const AUTH_INFOS = 'PD3CV-AuthInfos'
const NEBULA_ADDR = 'https://nebula.starbreeze.com'
const FETCH_HEADERS = {
  Authorization: 'Basic MGIzYmZkZjVhMjVmNDUyZmJkMzNhMzYxMzNhMmRlYWI6'
}
const CLIENT_ID = 'd682bcf949cb4744b3cd4295bbdd9fef'

const setLocalStorageData = (authData: any) => {
  const currentDate = Date.now() / 1000

  const authInfos: AuthModel = {
    accessToken: authData.access_token,
    accessTokenExp: currentDate + authData.expires_in,
    refreshToken: authData.refresh_token,
    refreshTokenExp: currentDate + authData.refresh_expires_in
  }

  localStorage.setItem(AUTH_INFOS, JSON.stringify(authInfos))
}

export const logout = () => {
  localStorage.removeItem(AUTH_INFOS)
}

export const login = async (loginData: FormData) => {
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

const refreshToken = async (refreshToken: string) => {
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

export const isLoggedIn = async () => {
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

export const getUserChallenges = async () => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthModel

  const allChallengesData: any = []
  let next = true
  let nextUrl = '/challenge/v1/public/namespaces/pd3/users/me/records?limit=100&offset=0'

  while (next) {
    const apiCall = await fetch(NEBULA_ADDR + nextUrl, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authInfos.accessToken
      }
    })
    const challengeData = await apiCall.json()
    if (!!challengeData.paging.next) {
      nextUrl = challengeData.paging.next
    } else next = false
    allChallengesData.push(...challengeData.data)
  }

  //Check for missing translations (only checks for the game variant, since right now the api list should be filled with everything until new ones arrive)
  //console.log("Replacing status: ",checkForMissingTranslations());

  return allChallengesData
}
