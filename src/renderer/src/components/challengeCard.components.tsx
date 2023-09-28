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

function LinearProgressWithLabel({
  initialCurrentValue,
  targetValue,
  ...rest
}: LinearProgressProps & { initialCurrentValue: number; targetValue: number }) {
  const [currentValue, setCurrentValue] = useState(initialCurrentValue)

  useEffect(() => {
    if (currentValue >= targetValue) {
      setCurrentValue(targetValue)
    } else setCurrentValue(Math.floor(currentValue))
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

export default function ChallengeCard({ challenge, openModal }: any) {
  // useEffect(() => {
  //   console.log(challenge);
  // });

  const openChallengeModal = () => {
    const challengesToComplete = challenge.progress.prerequisite.completedChallengeIds
    openModal(challengesToComplete)
  }

  return (
    <Card style={{ width: '100%', height: '150px' }}>
      <CardContent style={{ padding: 8 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {challenge.challenge.name}
          {challenge.status === 'COMPLETED' ? (
            <VerifiedUserIcon color="success" />
          ) : challenge.status === 'INIT' ? (
            <LockIcon color="disabled" />
          ) : null}
        </Typography>
        <LinearProgressWithLabel
          initialCurrentValue={challenge.progress.objective.stats[0].currentValue}
          targetValue={challenge.progress.objective.stats[0].targetValue}
        />
        <Typography variant="body2" color="text.secondary">
          {challenge.challenge.description}
        </Typography>
      </CardContent>
      {!!openModal && challenge.status === 'INIT' ? (
        <CardActions>
          <Button size="small" onClick={openChallengeModal}>
            Show prerequisites
          </Button>
        </CardActions>
      ) : (
        ''
      )}
    </Card>
  )
}
