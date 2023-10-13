import { useState, useEffect, ReactElement } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import LockIcon from '@mui/icons-material/Lock'
import { $$, sanitizedChallengeData } from '../Language/StringReplacer'
import PushPinIcon from '@mui/icons-material/PushPin'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import { IconButton } from '@mui/material'

function LinearProgressWithLabel({
  initialCurrentValue,
  targetValue,
  ...rest
}: LinearProgressProps & { initialCurrentValue: number; targetValue: number }): ReactElement {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (initialCurrentValue >= targetValue) {
      setCurrentValue(targetValue)
    } else setCurrentValue(Math.floor(initialCurrentValue))
  }, [initialCurrentValue, targetValue])

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          color="success"
          {...rest}
          value={Math.round((currentValue / targetValue) * 100)}
        />
      </Box>
      <Box sx={{ minWidth: 110 }}>
        <Typography variant="body2" color="text.secondary">
          {currentValue} / {targetValue}
        </Typography>
      </Box>
    </Box>
  )
}

export default function ChallengeCard({
  challenge,
  openModal,
  togglePinnedChallenge,
  isPinned,
  language
}: ReactElement & {
  challenge
  openModal
  togglePinnedChallenge
  isPinned
  language
}): ReactElement {
  const challengeProgess = challenge.progress.objective.stats[0]
  const openChallengeModal = (): void => {
    const challengesToComplete = challenge.progress.prerequisite.completedChallengeIds
    openModal(challengesToComplete)
  }

  const sanitizedChallengeData: sanitizedChallengeData = $$(
    challenge.challenge.challengeId,
    language
  )
  const challengeName = (
    sanitizedChallengeData.internalName && sanitizedChallengeData.title !== 'undefined'
      ? sanitizedChallengeData.title
      : challenge.challenge.name
  ).toUpperCase()
  const challengeDesc =
    sanitizedChallengeData.internalName && sanitizedChallengeData.desc !== 'undefined'
      ? sanitizedChallengeData.desc
      : challenge.challenge.description

  let borderColor
  let linearColor
  switch (challenge.status) {
    case 'COMPLETED':
      borderColor = '#66bb6a'
      linearColor = 'success'
      break
    case 'INPROGRESS':
      borderColor = '#494949'
      linearColor = 'inherit'
      break
    case 'INIT':
      borderColor = '#f44336'
      linearColor = 'error'
      break
    case 'BUGGED':
      borderColor = 'rgba(255, 180, 0, 1)'
      linearColor = 'warning'
      break
    default:
      borderColor = 'rgba(0, 0, 0, 0)'
      linearColor = ''
  }

  if (challengeProgess.currentValue > 0 && challenge.status === 'INPROGRESS')
    linearColor = 'success'

  if (isPinned) linearColor = 'primary'

  const challengeRewards =
    challenge.challenge.reward?.stats?.[0]?.statCode === 'infamy-point'
      ? challenge.challenge.reward.stats[0].value
      : ''

  return (
    <Card
      style={{
        width: '100%',
        minHeight: '12em',
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: borderColor
      }}
    >
      <CardContent style={{ padding: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {challenge.status === 'INIT' ? <LockIcon color="disabled" sx={{ mr: 1 }} /> : null}
            {challengeName}
          </Typography>
          <Typography>
            <IconButton
              aria-label="pin"
              onClick={(): void => togglePinnedChallenge(challenge.challenge.challengeId)}
            >
              {isPinned ? (
                <PushPinIcon style={{ color: 'rgba(134, 154, 243, 0.6)' }} />
              ) : (
                <PushPinOutlinedIcon />
              )}
            </IconButton>
          </Typography>
        </Box>
        <LinearProgressWithLabel
          initialCurrentValue={challengeProgess.currentValue}
          targetValue={challengeProgess.targetValue}
          color={linearColor !== '' ? linearColor : undefined}
        />
        <Typography variant="body2" color="text.secondary">
          {challengeDesc}
        </Typography>
        {challenge.status === "BUGGED" ? (
          <Typography variant="body2" color="rgba(243, 27, 56, 0.5)">
            This challenge is bugged in-game. You've unlocked it, but you didn't get the reward for
            it yet.
          </Typography>
        ) : (
          ''
        )}
      </CardContent>
      <CardActions style={{ alignItems: 'baseline', paddingTop: 0, marginTop: 'auto' }}>
        {!!openModal && challenge.status === 'INIT' ? (
          <Button size="small" onClick={openChallengeModal}>
            Show prerequisites
          </Button>
        ) : (
          ''
        )}
        {challengeRewards ? (
          <Typography variant="overline" display="block" style={{ marginLeft: 'auto' }}>
            Reward: {challengeRewards} Infamy points
          </Typography>
        ) : (
          ''
        )}
      </CardActions>
    </Card>
  )
}
