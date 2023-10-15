import { Button, Typography } from '@mui/material'

export default function Error(): JSX.Element {
  return (
    <>
      <Typography variant="h1">Error</Typography>
      <Button
        onClick={() => {
          window.location.href = '/'
        }}
      >
        Return
      </Button>
    </>
  )
}
