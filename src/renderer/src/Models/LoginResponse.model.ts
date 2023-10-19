export default interface LoginResponse {
  access_token: string
  auth_trust_id: string
  bans: never[]
  display_name: string
  expires_in: number
  is_comply: boolean
  jflgs: number
  namespace: string
  namespace_roles: {
    roleId: string
    namespace: string
  }[]
  permissions: never[]
  platform_id: string
  platform_user_id: string
  refresh_expires_in: number
  refresh_token: string
  roles: string[]
  scope: string
  token_type: string
  user_id: string
  xuid: string
}
