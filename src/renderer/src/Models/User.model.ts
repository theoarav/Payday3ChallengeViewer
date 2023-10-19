export default interface User {
  authType: string
  bans: never[]
  country: string
  createdAt: string
  dateOfBirth: string
  displayName: string
  deletionStatus: boolean
  emailVerified: boolean
  enabled: boolean
  lastDateOfBirthChangedTime: string
  lastEnabledChangedTime: string
  emailAddress: string
  namespace: string
  namespaceRoles: {
    roleId: string
    namespace: string
  }[]
  oldEmailAddress: string
  permissions: never[]
  phoneVerified: boolean
  roles: string[]
  userId: string
  userName: string
  avatarUrl: string
}
