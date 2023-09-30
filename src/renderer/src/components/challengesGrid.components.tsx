import { Box } from '@mui/material'
import { VirtuosoGrid } from 'react-virtuoso'
import ChallengeCard from './challengeCard.components'
import styled from '@emotion/styled'
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
export const ChallengesGrid = ({
  challenges,
  handleChallengeModal,
  togglePinnedChallenge,
  pinnedChallenges
}) => {
  return (
    <Box height={'100%'}>
      <VirtuosoGrid
        totalCount={challenges.length}
        overscan={200}
        components={{
          Item: ItemContainer,
          // @ts-ignore
          List: ListContainer,
          ScrollSeekPlaceholder: () => (
            <ItemContainer>
              <ChallengeCardPlaceholder />
            </ItemContainer>
          )
        }}
        itemContent={(index) => (
          <ChallengeCard
            challenge={challenges[index]}
            openModal={handleChallengeModal}
            togglePinnedChallenge={togglePinnedChallenge}
            isPinned={pinnedChallenges.includes(challenges[index]?.challenge?.challengeId || '')}
          />
        )}
        scrollSeekConfiguration={{
          enter: (velocity) => Math.abs(velocity) > 200,
          exit: (velocity) => Math.abs(velocity) < 30
        }}
      />
    </Box>
  )
}
