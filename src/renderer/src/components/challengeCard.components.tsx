import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import LockIcon from '@mui/icons-material/Lock'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { $$, sanitizedChallengeData } from './stringReplacer.components'
import PushPinIcon from '@mui/icons-material/PushPin'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import { IconButton } from '@mui/material'

function LinearProgressWithLabel({
  initialCurrentValue,
  targetValue,
  ...rest
}: LinearProgressProps & { initialCurrentValue: number; targetValue: number }) {
  const [currentValue, setCurrentValue] = useState(initialCurrentValue)

  useEffect(() => {
    if (currentValue >= targetValue) {
      setCurrentValue(targetValue)
    } else setCurrentValue(Math.floor(initialCurrentValue))
  }, [currentValue, targetValue])

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
}: any) {

  const challengeProgess = challenge.progress.objective.stats[0]

  const openChallengeModal = () => {
    const challengesToComplete = challenge.progress.prerequisite.completedChallengeIds
    openModal(challengesToComplete)
  }

  const sanitizedChallengeData: sanitizedChallengeData = $$(challenge.challenge.challengeId, language)
  const challengeName = sanitizedChallengeData.internalName !== "" ? sanitizedChallengeData.title : challenge.challenge.name;
  const challengeDesc = sanitizedChallengeData.internalName !== "" ? sanitizedChallengeData.desc : challenge.challenge.description;

  let borderColor
  switch (challenge.status) {
    case 'COMPLETED':
      borderColor = 'rgba(0, 255, 0, 0.4)'
      break
    case 'INPROGRESS':
      borderColor = 'rgba(255, 255, 255, 0.6)'
      break
    case 'INIT':
      borderColor = 'rgba(243, 27, 56, 0.5)'
      break
    default:
      borderColor = 'rgba(0, 0, 0, 0)'
  }

  const challengeRewards =
    challenge.challenge.reward?.stats?.[0]?.statCode === 'infamy-point'
      ? challenge.challenge.reward.stats[0].value
      : ''

  return (
    <Card
      style={{
        width: '100%',
        height: '175px',
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
            variant="h5"
            component="div"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            {challenge.status === 'COMPLETED' ? (
              <VerifiedUserIcon color="success" sx={{ mr: 1 }} />
            ) : challenge.status === 'INIT' ? (
              <LockIcon color="disabled" sx={{ mr: 1 }} />
            ) : null}
            {challengeName}
          </Typography>
          <Typography>
            <IconButton
              aria-label="pin"
              onClick={() => togglePinnedChallenge(challenge.challenge.challengeId)}
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
        />
        <Typography variant="body2" color="text.secondary">
          {challengeDesc}
        </Typography>
      </CardContent>
      <CardActions style={{ alignItems: 'baseline', paddingTop: 0, marginTop: 'auto' }}>
        {!!openModal && challenge.status === 'INIT' ? (
          <Button size="small" onClick={openChallengeModal}>
            Show prerequisites
          </Button>
        ) : (
          ''
        )}
        {!!challengeRewards ? (
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
