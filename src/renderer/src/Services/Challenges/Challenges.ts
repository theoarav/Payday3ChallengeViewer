import { AuthModel } from '@renderer/Model/auth.model';
import { AUTH_INFOS, NEBULA_ADDR, PINNED_CHALLENGES } from '../auth.service';



export const savePinnedChallenges = (pinnedChallenges): void => {
  localStorage.setItem(PINNED_CHALLENGES, JSON.stringify(pinnedChallenges));
};

export const getPinnedChallenges = (): [] => {
  const pinnedChallenges = localStorage.getItem(PINNED_CHALLENGES);
  if (pinnedChallenges) return JSON.parse(pinnedChallenges);
  return [];
};

export const deletePinnedChallenges = (): void => {
  localStorage.removeItem(PINNED_CHALLENGES);
};

export const getUserChallenges = async (): Promise<any> => {

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