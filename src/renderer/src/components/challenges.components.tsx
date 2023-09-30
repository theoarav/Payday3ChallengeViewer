import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { getUserChallenges, logout } from '../service/auth.service'
import { ChallengesHeader } from './challengesHeader.components'
import { ChallengesFilters } from './challengesFilters.components'
import { ChallengesGrid } from './challengesGrid.components'
import { ChallengeModalWrapper } from './challengesModalWrapper.components'

export default function Challenges({ onLogout }) {
  // Gestion de l'état local avec React Hooks
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
  const [modalChallenges, setModalChallenges] = useState<Array<any>>([])
  const [pinnedChallenges, setPinnedChallenges] = useState<Array<string>>([])
  const [showOnlyPinned, setShowOnlyPinned] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  // Récupération de données
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
      // Vérifie si le nom du challenge contient le terme de recherche
      const isNameMatch = ch.challenge.name.toLowerCase().includes(searchTerm.toLowerCase())

      // Vérifie si le statut du challenge est dans les statuts sélectionnés
      const isStatusMatch = selectedStatuses.includes(ch.status)

      // Vérifie si tous les tags dans selectedTags sont présents dans ch.challenge.tags
      const areTagsMatch = Object.keys(selectedTags).every((key) => {
        return selectedTags[key].every((tag) => ch.challenge.tags.includes(tag))
      })

      let isPinned = true
      if (showOnlyPinned) {
        isPinned = pinnedChallenges.includes(ch.challenge.challengeId)
      }

      // Retourne vrai si toutes les conditions sont vraies
      return isNameMatch && isStatusMatch && areTagsMatch && isPinned
    })

    // Mettre à jour l'état
    setFilteredChallenges(newFilteredChallenges)
  }, [challenges, searchTerm, selectedStatuses, selectedTags, showOnlyPinned, pinnedChallenges])

  const handleChallengeModal = (challengeId) => {
    const selectedChallenges = challenges.filter((ch) => ch.id === challengeId)
    setModalChallenges(selectedChallenges)
    setOpen(true)
  }

  const handleClose = () => {
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
        setSearchTerm={setSearchTerm}
        signOut={signOut}
        onShowOnlyPinnedChange={setShowOnlyPinned}
      />
      <ChallengesFilters
        handleStatusChange={handleStatusChange}
        onTagFilterChange={onTagFilterChange}
      />
      <ChallengesGrid
        challenges={filteredChallenges}
        handleChallengeModal={handleChallengeModal}
        togglePinnedChallenge={togglePinnedChallenge}
        pinnedChallenges={pinnedChallenges}
      />
      <ChallengeModalWrapper open={open} handleClose={handleClose} challenges={modalChallenges} />
    </Container>
  )
}
