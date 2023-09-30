import { VirtuosoGrid } from 'react-virtuoso'
import styled from '@emotion/styled'
import ChallengeCardPlaceholder from './challengeCardPlaceholder.components'
import ChallengeCard from './challengeCard.components'

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

export default function ChallengeModal({ challenges }: any) {
  return (
    <VirtuosoGrid
      totalCount={challenges.length}
      overscan={10}
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
      itemContent={(index) => <ChallengeCard challenge={challenges[index]} openModal={false} />}
      scrollSeekConfiguration={{
        enter: (velocity) => Math.abs(velocity) > 200,
        exit: (velocity) => Math.abs(velocity) < 30
      }}
    />
  )
}
