import styled from '@emotion/styled'
import { ReactElement, useState } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'
import ChallengeCard from './challengeCard.components'
import ChallengeCardPlaceholder from './challengeCardPlaceholder.components'

const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 33%;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function ChallengeModal({
  challenges,
  togglePinnedChallenge,
  pinnedChallenges
}: {
  challenges
  togglePinnedChallenge
  pinnedChallenges
}): ReactElement {
  const [tmpPinnedChallenges, setTmpPinnedChallenges] = useState(pinnedChallenges)

  const handleTogglePinnedChallenge = (challengeId): void => {
    setTmpPinnedChallenges((prevPinned) => {
      if (prevPinned.includes(challengeId)) {
        return prevPinned.filter((id) => id !== challengeId)
      } else {
        return [...prevPinned, challengeId]
      }
    })
    togglePinnedChallenge(challengeId)
  }

  return (
    <VirtuosoGrid
      totalCount={challenges.length}
      overscan={10}
      components={{
        Item: ItemContainer,
        // @ts-ignore, shush prettier
        List: ListContainer,
        ScrollSeekPlaceholder: () => (
          <ItemContainer>
            <ChallengeCardPlaceholder />
          </ItemContainer>
        )
      }}
      itemContent={(index): ReactElement => (
        <ChallengeCard
          challenge={challenges[index]}
          openModal={false}
          togglePinnedChallenge={handleTogglePinnedChallenge}
          isPinned={tmpPinnedChallenges.includes(challenges[index]?.challenge?.challengeId || '')}
          key={null}
          type={''}
          props={undefined}
          language={undefined}
        />
      )}
      scrollSeekConfiguration={{
        enter: (velocity) => Math.abs(velocity) > 200,
        exit: (velocity) => Math.abs(velocity) < 30
      }}
    />
  )
}
