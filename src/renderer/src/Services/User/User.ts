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