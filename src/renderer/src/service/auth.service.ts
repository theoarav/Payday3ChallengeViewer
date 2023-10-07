import { AuthModel } from '../model/auth.model'

export const DEFAULT_LANGUAGE = 'en'
export const LANGUAGE = 'PD3CV-Language'

const AUTH_INFOS = 'PD3CV-AuthInfos'
const PINNED_CHALLENGES = 'PD3CV-PinnedChallenges'

const NEBULA_ADDR = 'https://nebula.starbreeze.com'
const FETCH_HEADERS = {
  Authorization: 'Basic MGIzYmZkZjVhMjVmNDUyZmJkMzNhMzYxMzNhMmRlYWI6'
}
const CLIENT_ID = 'd682bcf949cb4744b3cd4295bbdd9fef'

interface AuthData {
  access_token: string
  expires_in: number
  refresh_token: string
  refresh_expires_in: number
}

const setLocalStorageData = (authData: AuthData): void => {
  const currentDate = Date.now() / 1000

  const authInfos: AuthModel = {
    accessToken: authData.access_token,
    accessTokenExp: currentDate + authData.expires_in,
    refreshToken: authData.refresh_token,
    refreshTokenExp: currentDate + authData.refresh_expires_in
  }

  localStorage.setItem(AUTH_INFOS, JSON.stringify(authInfos))
}

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

export const getUserChallenges = async (): Promise<unknown[] | boolean> => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthModel

  const allChallengesData: Array<unknown> = []
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
    if (challengeData.paging.next) {
      nextUrl = challengeData.paging.next
    } else next = false
    allChallengesData.push(...challengeData.data)
  }

  return allChallengesData
}

export const getUserInfos = async (): Promise<{ userId: string } | false> => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthModel

  const apiCall = await fetch(NEBULA_ADDR + '/iam/v3/public/users/me', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + authInfos.accessToken
    }
  })
  if (apiCall.status !== 200) return false

  const userInfos = await apiCall.json()

  return userInfos
}

export const getStatItems = async (): Promise<false | { data: string }> => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthModel

  const userInfos = await getUserInfos()
  if (!userInfos) return false

  const apiCall = await fetch(
    NEBULA_ADDR +
      '/social/v1/public/namespaces/pd3/users/' +
      userInfos.userId +
      '/statitems?limit=100000&offset=0',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authInfos.accessToken
      }
    }
  )
  if (apiCall.status !== 200) return false

  const statItems = await apiCall.json()

  return statItems
}

export const exportPayCheck3Data = async (): Promise<boolean> => {
  const statItems = await getStatItems()
  if (!statItems) return false

  // const anonimisedData: any = []

  // for (const stat of statItems.data) {
  //   anonimisedData.push({
  //     ...stat,
  //     updatedAt: '2023-09-20T10:00:00.000Z',
  //     createdAt: '2023-09-20T10:00:00.000Z',
  //     userId: 'USERID',
  //     value: 0.0
  //   })
  // }
  const downloadFile = (content, fileName, contentType): void => {
    const a = document.createElement('a')
    const file = new Blob([content], { type: contentType })
    a.href = URL.createObjectURL(file)
    a.download = fileName
    a.click()
  }
  downloadFile(JSON.stringify(statItems.data), 'statItems.json', 'text/plain')
  return true
}

export const savePinnedChallenges = (pinnedChallenges): void => {
  localStorage.setItem(PINNED_CHALLENGES, JSON.stringify(pinnedChallenges))
}

export const getPinnedChallenges = (): [] => {
  const pinnedChallenges = localStorage.getItem(PINNED_CHALLENGES)
  if (pinnedChallenges) return JSON.parse(pinnedChallenges)
  return []
}

export const deletePinnedChallenges = (): void => {
  localStorage.removeItem(PINNED_CHALLENGES)
}

export const getChosenLanguage = (): string => {
  return localStorage.getItem(LANGUAGE) || DEFAULT_LANGUAGE
}

export const saveChosenLanguage = (language): void => {
  localStorage.setItem(LANGUAGE, language)
}

export const deleteChosenLanguage = (): void => {
  localStorage.removeItem(LANGUAGE)
}
