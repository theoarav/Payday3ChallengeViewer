import { Backdrop, CircularProgress, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  getPinnedChallenges,
  getUserChallenges,
  logout,
  saveChosenLanguage,
  savePinnedChallenges
} from '../service/auth.service'
import { ChallengesFilters } from './challengesFilters.components'
import ChallengesGrid from './challengesGrid.components'
import ChallengesHeader from './challengesHeader.components'
import { ModalWrapper } from './modalWrapper.components'
import { $$, sanitizedChallengeData } from './stringReplacer.components'
import { getChosenLanguage } from '@renderer/service/auth.service'
import React from 'react'

export default function Challenges({ onLogout }) {
  const [challenges, setChallenges] = useState<Array<any>>([])
  const [filteredChallenges, setFilteredChallenges] = useState<Array<Object>>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([
    'COMPLETED',
    'INPROGRESS',
    'INIT'
  ])
  const [selectedTags, setSelectedTags] = useState<Object>({})
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState<any>()
  const [pinnedChallenges, setPinnedChallenges] = useState<Array<string>>(getPinnedChallenges)
  const [showOnlyPinned, setShowOnlyPinned] = useState(false)
  const [language, setLanguage] = useState(getChosenLanguage)
  const [loadingModalVisible, setLoadingModalVisible] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    savePinnedChallenges(pinnedChallenges)
  }, [pinnedChallenges])

  useEffect(() => {
    fetchData()
  }, [language])

  const fetchData = async (): Promise<void> => {
    try {
      setLoadingModalVisible(true)
      const fetchedChallenges = await getUserChallenges()
      const filteredChallenges = fetchedChallenges.filter(
        (challenge: any) =>
          !challenge.challenge?.tags?.includes('Achievement') &&
          challenge.challenge?.tags.length > 0
      )

      const sortedChallenges = filteredChallenges.sort(
        (a: any, b: any) => a.challenge.orderNo - b.challenge.orderNo
      )
      setChallenges(sortedChallenges)
      setFilteredChallenges(sortedChallenges)
      setLoadingModalVisible(false)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    const newFilteredChallenges = challenges.filter((ch) => {
      const sanitizedChallengeData: sanitizedChallengeData = $$(ch.challenge.challengeId, language)
      const name = (
        sanitizedChallengeData.internalName !== '' && sanitizedChallengeData.title !== 'undefined'
          ? sanitizedChallengeData.title
          : ch.challenge.name
      ).toLowerCase()
      
      const description = (
        sanitizedChallengeData.internalName !== '' && sanitizedChallengeData.desc !== 'undefined'
          ? sanitizedChallengeData.desc
          : ch.challenge.description
      ).toLowerCase()

      const isNameMatch = name.toLowerCase().includes(searchTerm.toLowerCase())
      const isDescriptionMatch = description.toLowerCase().includes(searchTerm.toLowerCase())

      const isStatusMatch = selectedStatuses.includes(ch.status)

      const areTagsMatch = Object.keys(selectedTags).every((key) => {
        return selectedTags[key].every((tag) => ch.challenge.tags.includes(tag))
      })

      let isPinned = true
      if (showOnlyPinned) {
        isPinned = pinnedChallenges.includes(ch.challenge.challengeId)
      }

      return (isNameMatch || isDescriptionMatch) && isStatusMatch && areTagsMatch && isPinned
    })

    const sortedChallenges = newFilteredChallenges.sort(
      (a: any, b: any) => a.challenge.orderNo - b.challenge.orderNo
    )

    setFilteredChallenges(sortedChallenges)
  }, [
    challenges,
    searchTerm,
    selectedStatuses,
    selectedTags,
    showOnlyPinned,
    pinnedChallenges,
    language
  ])

  const handleOpenModal = (modalContent): void => {
    setModalContent(modalContent)
    setOpen(true)
  }

  const handleCloseModal = (): void => {
    setOpen(false)
  }

  const handleStatusChange = (statuses: string[]): void => {
    setSelectedStatuses(statuses)
  }

  const onTagFilterChange = (optionName: string, tag: string[]): void => {
    setSelectedTags((prevTags) => ({ ...prevTags, [optionName]: tag }))
  }

  const togglePinnedChallenge = (challengeId: string): void => {
    setPinnedChallenges((prevPinned) => {
      if (prevPinned.includes(challengeId)) {
        return prevPinned.filter((id) => id !== challengeId)
      } else {
        return [...prevPinned, challengeId]
      }
    })
  }

  const getChallengesByIds = (challengeIds: string[]): void => {
    return challenges.filter((ch) => challengeIds.includes(ch.challenge.challengeId))
  }

  const handleSetLanguage = (language: string): void => {
    saveChosenLanguage(language)
    setLanguage(language)
  }

  const signOut = (): void => {
    logout()
    onLogout()
  }

  const challengesFilters = ChallengesFilters({
    handleStatusChange: handleStatusChange,
    onTagFilterChange: onTagFilterChange
  })

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
      <Backdrop
        open={loadingModalVisible}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '10px'
        }}
      >
        <Typography variant="h4">Fetching data</Typography>
        <CircularProgress color="success" style={{}} />
      </Backdrop>
      <ChallengesHeader
        fetchData={fetchData}
        openModal={handleOpenModal}
        setSearchTerm={setSearchTerm}
        signOut={signOut}
        onShowOnlyPinnedChange={setShowOnlyPinned}
        setLanguage={handleSetLanguage}
        setFiltersOpen={challengesFilters.setOpen}
      />
      {challengesFilters.element}
      <ChallengesGrid
        challenges={filteredChallenges}
        openModal={handleOpenModal}
        togglePinnedChallenge={togglePinnedChallenge}
        pinnedChallenges={pinnedChallenges}
        getChallengesById={getChallengesByIds}
        language={language}
      />
      <ModalWrapper open={open} handleClose={handleCloseModal} modalContent={modalContent} />
    </Container>
  )
}
