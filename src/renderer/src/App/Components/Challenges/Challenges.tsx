import { Backdrop, CircularProgress, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getPinnedChallenges, getUserChallenges, savePinnedChallenges } from '@renderer/Services/Challenges/Challenges'
import { isLoggedIn, logout } from '@renderer/Services/Auth/Auth'
import { ChallengesFilters } from './Filters'
import ChallengesGrid from './Grid'
import ChallengesHeader from './Header/Header'
import { ModalWrapper } from '../Modals/Wrapper'
import { $$, $$Challenge, sanitizedChallengeData } from '../Language/StringReplacer'
import { getChosenLanguage, saveChosenLanguage } from '../../../Services/Language/Language'

export default function Challenges() {
  const [challenges, setChallenges] = useState<Array<any>>([])
  const [ipAcquired, setIpAcquired] = useState(0)
  const [totalIP, setTotalIP] = useState(0)
  const [filteredChallenges, setFilteredChallenges] = useState<Array<Object>>([])
  const [sortMethod, setSortMethod] = useState('A-Z')
  const [challengeKey, setchallengeKey] = useState('A-Z')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([
    'COMPLETED',
    'INPROGRESS',
    'INIT',
    'BUGGED'
  ])
  const [selectedTags, setSelectedTags] = useState<Object>({})
  const [storedFilters, setStoredFilters] = useState<Object[]>([])
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
    setchallengeKey(sortMethod)
  }, [sortMethod])

  useEffect(() => {
    savePinnedChallenges(pinnedChallenges)
  }, [pinnedChallenges])

  useEffect(() => {
    fetchData()
  }, [language])

  const fetchData = async (): Promise<void> => {
    try {
      const loggedIn = await isLoggedIn()

      setLoadingModalVisible(true)
      const fetchedChallenges = await getUserChallenges()
      const filteredChallenges = fetchedChallenges.filter(
        (challenge: any) =>
          !challenge.challenge?.tags?.includes('Achievement') &&
          challenge.challenge?.tags.length > 0
      )

      let totalIP: number =  0;
      let ipAcquired: number =  0;

      const translatedNamesArray: any[] = [];

      filteredChallenges.forEach(ch => {
        if(ch.challenge.reward?.stats?.[0]?.statCode === 'infamy-point'){
          totalIP += ch.challenge.reward.stats[0].value;
          if (ch.status === "COMPLETED" || ch.progress.objective.stats[0].currentValue >= ch.progress.objective.stats[0].targetValue) ipAcquired += ch.challenge.reward.stats[0].value;
        }

        const sanitizedChallengeData: sanitizedChallengeData = $$Challenge(ch.challenge.challengeId)
        const name = sanitizedChallengeData.internalName !== '' && sanitizedChallengeData.title !== 'undefined'
            ? sanitizedChallengeData.title
            : ch.challenge.name

        ch.challenge.name = name;
        ch.userProgressionPerc = ch.progress.objective.stats[0].currentValue / ch.progress.objective.stats[0].targetValue * 100;
        if((ch.progress.objective.stats[0].currentValue >= ch.progress.objective.stats[0].targetValue) && ch.status !== "COMPLETED") ch.status = "BUGGED";

        translatedNamesArray.push(ch);
      });

      const translatedAndSortedArray = translatedNamesArray.sort(
        (a: any, b: any) => a.challenge.name.localeCompare(b.challenge.name)
      )

      setTotalIP(totalIP)
      setIpAcquired(ipAcquired)
      setChallenges(translatedAndSortedArray)
      setFilteredChallenges(translatedAndSortedArray)
      setLoadingModalVisible(false)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    handleSortOption(sortMethod)
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
    setSelectedTags((prevTags) => ({ ...prevTags, [optionName]: tag}))
  }

  const storeFilters = (optionName: string, value: string): void => {
    setStoredFilters((prevFilters) => ({ ...prevFilters, [optionName]: value}))
  }

  const handleSortOption = (sorting_method: string): void => {
    let sortedChallenges: any[] = [];
    let challengesToSort = challenges.filter((ch) => {
      const name = (ch.challenge.name).toLowerCase()
      const description = (ch.challenge.description).toLowerCase()

      const isNameMatch = name.toLowerCase().includes(searchTerm.toLowerCase())
      const isDescriptionMatch = description.toLowerCase().includes(searchTerm.toLowerCase())

      const isStatusMatch = selectedStatuses.includes(ch.status)

      const areTagsMatch = Object.keys(selectedTags).every((key) => {
        return selectedTags[key].every((tag) =>{
          if(tag === "Hard"){
            return ch.challenge.tags.includes(tag) && !ch.challenge.tags.includes("Very")
          }
          return ch.challenge.tags.includes(tag);

        } )
      })

      let isPinned = true
      if (showOnlyPinned) {
        isPinned = pinnedChallenges.includes(ch.challenge.challengeId)
      }

      return (isNameMatch || isDescriptionMatch) && isStatusMatch && areTagsMatch && isPinned
    })


    if(sorting_method === "A-Z"){
      sortedChallenges = challengesToSort.sort(
        (a: any, b: any) => a.challenge.name.localeCompare(b.challenge.name)
      )
    }
    if(sorting_method === "Z-A"){
      sortedChallenges = challengesToSort.sort(
        (a: any, b: any) => b.challenge.name.localeCompare(a.challenge.name)
      )
    }
    if(sorting_method === "PercHigh"){
      sortedChallenges = challengesToSort.sort(
        (a: any, b: any) => b.userProgressionPerc - a.userProgressionPerc
      )
    }
    if(sorting_method === "PercLow"){
      sortedChallenges = challengesToSort.sort(
        (a: any, b: any) => a.userProgressionPerc - b.userProgressionPerc
      )
    }

    setSortMethod(sorting_method);
    setFilteredChallenges(sortedChallenges);
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

  const getChallengesByIds = (challengeIds: string[]) => {
    return challenges.filter((ch) => challengeIds.includes(ch.challenge.challengeId))
  }

  const handleSetLanguage = (language: string): void => {
    saveChosenLanguage(language)
    setLanguage(language)
  }

  const challengesFilters = ChallengesFilters({
    handleStatusChange: handleStatusChange,
    onTagFilterChange: onTagFilterChange,
    storeFilters: storeFilters,
    storedFilters: storedFilters,
    selectedStatuses: selectedStatuses,
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
        <Typography variant="h4">{$$("header.refreshButtonTitle")}</Typography>
        <CircularProgress color="success" style={{}} />
      </Backdrop>
      <ChallengesHeader
        fetchData={fetchData}
        openModal={handleOpenModal}
        setSearchTerm={setSearchTerm}
        setLanguage={handleSetLanguage}
        setFiltersOpen={challengesFilters.setOpen}
        onShowOnlyPinnedChange={setShowOnlyPinned}
        handleSortOption={handleSortOption}
        ipAcquired={ipAcquired}
        totalIP={totalIP}
      />
      {challengesFilters.element}
      {loadingModalVisible === false &&
      <ChallengesGrid
        key={challengeKey}
        challenges={filteredChallenges}
        openModal={handleOpenModal}
        togglePinnedChallenge={togglePinnedChallenge}
        pinnedChallenges={pinnedChallenges}
        getChallengesById={getChallengesByIds}
        language={language}
      />}
      <ModalWrapper open={open} handleClose={handleCloseModal} modalContent={modalContent} />
    </Container>
  )
}
