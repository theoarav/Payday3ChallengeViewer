import { Container } from '@mui/material'
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
import { $$, internalizedChallenge } from './stringReplacer.components'

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
  const [language, setLanguage] = useState('en-US')

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    savePinnedChallenges(pinnedChallenges)
  }, [pinnedChallenges])

  const fetchData = async () => {
    try {
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
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    const newFilteredChallenges = challenges.filter((ch) => {
      const internalizedChallenge: internalizedChallenge = $$(ch.challenge.challengeId)
      const name = (
        internalizedChallenge && internalizedChallenge.en && internalizedChallenge.en.title
          ? internalizedChallenge.en.title
          : ch.challenge.name
      ).toLowerCase()

      //In case you want to reapply searching in descriptions also.
      //const description = ((internalizedChallenge && internalizedChallenge.game && internalizedChallenge.game.desc) ? internalizedChallenge.game.desc : ch.challenge.description).toLowerCase()

      const isNameMatch = name.toLowerCase().includes(searchTerm.toLowerCase())

      const isStatusMatch = selectedStatuses.includes(ch.status)

      const areTagsMatch = Object.keys(selectedTags).every((key) => {
        return selectedTags[key].every((tag) => ch.challenge.tags.includes(tag))
      })

      let isPinned = true
      if (showOnlyPinned) {
        isPinned = pinnedChallenges.includes(ch.challenge.challengeId)
      }

      return isNameMatch && isStatusMatch && areTagsMatch && isPinned
    })

    setFilteredChallenges(newFilteredChallenges)
  }, [
    challenges,
    searchTerm,
    selectedStatuses,
    selectedTags,
    showOnlyPinned,
    pinnedChallenges,
    language
  ])

  const handleOpenModal = (modalContent) => {
    setModalContent(modalContent)
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleStatusChange = (statuses: string[]) => {
    setSelectedStatuses(statuses)
  }

  const onTagFilterChange = (optionName: string, tag: string[]) => {
    setSelectedTags((prevTags) => ({ ...prevTags, [optionName]: tag }))
  }

  const togglePinnedChallenge = (challengeId: string) => {
    setPinnedChallenges((prevPinned) => {
      if (prevPinned.includes(challengeId)) {
        return prevPinned.filter((id) => id !== challengeId)
      } else {
        return [...prevPinned, challengeId]
      }
    })
  }

  const getChallengesByIds = (challengeIds: string[]) => {
    return challenges.filter((ch) => challengeIds.includes(ch.challenge.challengeId))
  }

  const handleSetLanguage = (language: string) => {
    saveChosenLanguage(language)
    setLanguage(language)
  }

  const signOut = () => {
    logout()
    onLogout()
  }

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
      <ChallengesHeader
        fetchData={fetchData}
        openModal={handleOpenModal}
        setSearchTerm={setSearchTerm}
        signOut={signOut}
        onShowOnlyPinnedChange={setShowOnlyPinned}
        setLanguage={handleSetLanguage}
      />
      <ChallengesFilters
        handleStatusChange={handleStatusChange}
        onTagFilterChange={onTagFilterChange}
      />
      <ChallengesGrid
        challenges={filteredChallenges}
        openModal={handleOpenModal}
        togglePinnedChallenge={togglePinnedChallenge}
        pinnedChallenges={pinnedChallenges}
        getChallengesById={getChallengesByIds}
      />
      <ModalWrapper open={open} handleClose={handleCloseModal} modalContent={modalContent} />
    </Container>
  )
}
