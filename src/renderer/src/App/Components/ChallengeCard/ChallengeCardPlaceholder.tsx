import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Skeleton } from '@mui/material'

export default function ChallengeCardPlaceholder() {
  return (
    <Card style={{ width: '100%', height: '175px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton animation="wave" width="80%" height={40} />{' '}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton animation="wave" style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" width="80%" />
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
