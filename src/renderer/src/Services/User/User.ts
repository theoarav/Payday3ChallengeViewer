import { AuthModel } from "@renderer/Model/auth.model"
import { AUTH_INFOS, NEBULA_ADDR } from "../auth.service"

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

  export const getSaveData = async (): Promise<false | { data: any }> => {
    const authInfosStr = localStorage.getItem(AUTH_INFOS)
    if (!authInfosStr) return false
    const authInfos = JSON.parse(authInfosStr) as AuthModel
  
    const userInfos = await getUserInfos()
    if (!userInfos) return false
  
    const apiCall = await fetch(
      NEBULA_ADDR +
        '/cloudsave/v1/namespaces/pd3/users/' +
        userInfos.userId +
        '/records/progressionsavegame',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + authInfos.accessToken
        }
      }
    )
    if (apiCall.status !== 200) return false
  
    const saveData = await apiCall.json()
  
    return saveData
  }