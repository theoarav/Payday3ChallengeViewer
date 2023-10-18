import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { VirtuosoGrid } from 'react-virtuoso'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import ChallengeCardPlaceholder from '../ChallengeCard/ChallengeCardPlaceholder'
import ChallengeModal from '../ChallengeCard/ChallengeModel'
import { $$Challenge, sanitizedChallengeData } from '../Language/StringReplacer'

const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 16%;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 2700px) {
    width: 20%;
  }
  
  @media (max-width: 2200px) {
    width: 25%;
  }

  @media (max-width: 1700px) {
    width: 33%;
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function ChallengesGrid({
  challenges,
  openModal,
  togglePinnedChallenge,
  pinnedChallenges,
  getChallengesById,
  language
}) {
  const handleChallengeModal = (challengeIds) => {
    const challengeIdSet = new Set(challengeIds.map((ch) => ch.challengeId))
    const selectedChallenges = getChallengesById(Array.from(challengeIdSet))

    //Replace the api values with the translated ones.
    selectedChallenges.forEach((ch) => {
      let translatedData: sanitizedChallengeData = $$Challenge(ch.challenge.challengeId)
      if (translatedData) {
        if (translatedData.title && translatedData.title !== 'undefined')
          ch.challenge.name = translatedData.title.toUpperCase()
        if (translatedData.desc && translatedData.desc !== 'undefined')
          ch.challenge.description = translatedData.desc
      }
    })

    openModal(
      <ChallengeModal
        challenges={selectedChallenges}
        togglePinnedChallenge={togglePinnedChallenge}
        pinnedChallenges={pinnedChallenges}
      />
    )
  }

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
            key={null}
            type={''}
            props={undefined}
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
