import AuthData from '@renderer/Models/AuthData.model'
import { AUTH_INFOS, NEBULA_ADDR, PINNED_CHALLENGES } from '../globals'
import ApiRequest from '@renderer/Models/ApiRequest.model'
import Challenge from '@renderer/Models/Challenge.model'

export const savePinnedChallenges = (pinnedChallenges: string[]) => {
  localStorage.setItem(PINNED_CHALLENGES, JSON.stringify(pinnedChallenges))
}

export const getPinnedChallenges = () => {
  const pinnedChallenges = localStorage.getItem(PINNED_CHALLENGES)
  if (pinnedChallenges) return JSON.parse(pinnedChallenges) as string[]
  return []
}

export const deletePinnedChallenges = () => {
  localStorage.removeItem(PINNED_CHALLENGES)
}

export const getUserChallenges = async () => {
  const authInfosStr = localStorage.getItem(AUTH_INFOS)
  if (!authInfosStr) return false
  const authInfos = JSON.parse(authInfosStr) as AuthData

  const allChallengesData: Array<Challenge> = []
  let next = true
  let nextUrl = '/challenge/v1/public/namespaces/pd3/users/me/records?limit=100&offset=0'

  while (next) {
    const apiCall = await fetch(NEBULA_ADDR + nextUrl, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authInfos.accessToken
      }
    })
    const challengeData = (await apiCall.json()) as ApiRequest<Challenge>
    if (challengeData.paging.next) {
      nextUrl = challengeData.paging.next
    } else next = false
    allChallengesData.push(...challengeData.data)
  }
  return allChallengesData
}
