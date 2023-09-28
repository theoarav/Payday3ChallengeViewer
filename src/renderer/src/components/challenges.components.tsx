import React, { useState, useEffect } from 'react'
import { getUserChallenges, logout } from '../service/auth.service'
import { VirtuosoGrid } from 'react-virtuoso'
import ChallengeCard from './challengeCard.components'
import styled from '@emotion/styled'
import ChallengeCardPlaceholder from './challengeCardPlaceholder.components'
import { Box, Container } from '@mui/material'
import SearchBar from './searchBar.components'
import StatusSelect from './statusSelect.components'
import RefreshIcon from '@mui/icons-material/Refresh'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import ChallengeModal from './challengeModal.components'
import FilterSelect from './filterSelect.components'
import customTagFilters from '@renderer/data/customTagFilters'

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

export default function Challenges({ onLogout }: any) {
  const [challenges, setChallenges] = useState<Array<any>>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState({
    COMPLETED: true,
    INPROGRESS: true,
    INIT: true
  })
  const [activeFilters, setActiveFilters] = useState({})
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [modalChallenges, setModalChallenges] = useState<Array<any>>([])

  const handleStatusChange = (newStatusFilter: any) => {
    setStatusFilter({
      COMPLETED: newStatusFilter[0],
      INPROGRESS: newStatusFilter[1],
      INIT: newStatusFilter[2]
    })
  }

  const fetchData = async () => {
    const data = await getUserChallenges()
    if (data) {
      const filteredChallenges = data.filter(
        (challenge: any) =>
          !challenge.challenge?.tags?.includes('Achievement') &&
          challenge.challenge?.tags.length > 0
      )

      const sortedChallenges = filteredChallenges.sort(
        (a: any, b: any) => a.challenge.orderNo - b.challenge.orderNo
      )
      setChallenges(sortedChallenges)
      console.log(sortedChallenges)
    }
  }

  const filteredChallenges = challenges.filter((challenge) => {
    const name = challenge.challenge.name.toLowerCase()
    const description = challenge.challenge.description.toLowerCase()
    const term = searchTerm.toLowerCase()

    const hasTags = challenge.challenge.tags && challenge.challenge.tags.length > 0

    const satisfiesActiveFilters = Object.entries(activeFilters).every(([, filterTags]) => {
      if (hasTags) {
        return (filterTags as string[]).every((tag) => challenge.challenge.tags.includes(tag))
      }
      return true
    })

    return (
      (name.includes(term) || description.includes(term)) &&
      // @ts-ignore
      statusFilter[challenge.status] &&
      satisfiesActiveFilters
    )
  })

  const signOut = () => {
    logout()
    onLogout()
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(filteredChallenges)
    console.log(activeFilters)
  }, [filteredChallenges])

  const handleChallengeModal = (challengesToComplete: any) => {
    const resultArray = challengesToComplete.map((obj: any) => obj.challengeId)
    const filteredChallenges = challenges.filter((challenge) =>
      resultArray.includes(challenge.challenge.challengeId)
    )
    setModalChallenges(filteredChallenges)
    handleOpen()
  }

  const onTagFilterChange = (selectedTags, optionName) => {
    setActiveFilters((prev) => {
      if (selectedTags.includes('All')) {
        const updated = { ...prev }
        delete updated[optionName]
        return updated
      }
      return { ...prev, [optionName]: selectedTags }
    })
  }

  if (!challenges) return 'Chargement...'

  return (
    <Container
      style={{
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}
      maxWidth={false}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 2,
          mx: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <IconButton aria-label="delete" size="large" onClick={fetchData}>
            <RefreshIcon fontSize="inherit" />
          </IconButton>
          <SearchBar onChange={setSearchTerm} />
          <Button onClick={signOut}>Sign out</Button>
        </Box>
        <Box
          style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', marginTop: 16 }}
        >
          <StatusSelect onStatusChange={handleStatusChange} />
          {Object.entries(customTagFilters).map(([key, values]) => (
            <FilterSelect
              key={key}
              optionName={key}
              filterOptions={values.map((value) => ({ name: value.name, tags: value.tags }))}
              filterChange={onTagFilterChange}
            />
          ))}
        </Box>
      </Box>
      <Box height={'100%'}>
        <VirtuosoGrid
          totalCount={filteredChallenges.length}
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
            <ChallengeCard challenge={filteredChallenges[index]} openModal={handleChallengeModal} />
          )}
          scrollSeekConfiguration={{
            enter: (velocity) => Math.abs(velocity) > 200,
            exit: (velocity) => Math.abs(velocity) < 30
          }}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <ChallengeModal challenges={modalChallenges} />
        </Box>
      </Modal>
    </Container>
  )
}
