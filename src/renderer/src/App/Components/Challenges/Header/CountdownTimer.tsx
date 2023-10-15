import { Typography } from '@mui/material'
import * as React from 'react'
import { secondsToHourlyFormat, secondsToDhms } from '../../Utils/Utils'

type CountDownProps = {
  startSeconds: number
  format?: string
  onComplete?: () => void
}

type CountDownState = {
  endTime: number
}

export default class CountDown extends React.Component<CountDownProps, CountDownState> {
  private intervalId: any

  constructor(props: any) {
    super(props)
    this.state = {
      endTime: Date.now() + this.props.startSeconds * 1000
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId)
  }

  private startTimer() {
    this.intervalId = setInterval(this.update.bind(this), 1000)
  }

  private update() {
    const now = Date.now()
    const remainingSeconds = Math.round((this.state.endTime - now) / 1000)

    if (remainingSeconds <= 0) {
      clearInterval(this.intervalId)
      if(this.props.onComplete) this.props.onComplete()
      return
    }

    this.forceUpdate()
  }

  private get remainingSeconds(): number {
    return Math.max(0, Math.round((this.state.endTime - Date.now()) / 1000))
  }

  render() {
    return this.props.format === "DAY" ? 
      <span>{secondsToDhms(this.remainingSeconds)}</span>
      : 
      <Typography>({secondsToHourlyFormat(this.remainingSeconds.toString())})</Typography>
  }
}
