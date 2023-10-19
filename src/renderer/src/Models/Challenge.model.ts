export default interface Challenge {
  recordId: string
  namespace: string
  userId: string
  challenge: {
    challengeId: string
    namespace: string
    name: string
    description: string
    prerequisite: {
      stats: { statCode: string; value?: number }[]
      items: never[]
      completedChallengeIds: { challengeId: string; isCompleted?: boolean }[]
    }
    objective: {
      stats: { statCode: string; value: number }[]
    }
    reward: {
      rewardId: string
      stats: { statCode: string; value: number }[]
      items: never[]
    }
    tags: string[]
    orderNo: number
    createdAt: string
    updatedAt: string
    isActive: boolean
  }
  progress: {
    prerequisite: {
      stats: never[]
      items: never[]
      completedChallengeIds: { challengeId: string; isCompleted: boolean }[]
    }
    objective: {
      stats: { statCode: string; currentValue: number; targetValue: number }[]
    }
  }
  updatedAt: string
  status: string
  isActive: boolean
}
