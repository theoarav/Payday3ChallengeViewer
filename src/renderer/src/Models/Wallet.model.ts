export interface WalletInfo {
  id: string
  namespace: string
  userId: string
  currencyCode: string
  currencySymbol: string
  balance: number
  balanceOrigin: string
  timeLimitedBalances: never[]
  createdAt: string
  updatedAt: string
  totalPermanentBalance: number
  totalTimeLimitedBalance: number
  status: string
}

export default interface Wallet {
  namespace: string
  userId: string
  currencyCode: string
  currencySymbol: string
  balance: number
  walletInfos: WalletInfo[]
  walletStatus: string
  status: string
  id: string
}
