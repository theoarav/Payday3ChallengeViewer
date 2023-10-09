import { Typography } from '@mui/material'
import * as React from 'react'

//Converts seconds into a more reabled HH:MM:SS format.
function durationSecondsConverter(duration: string) {
  if (duration && duration != 'undefined' && duration != null) {
    var temp = +duration
    var hrs = ~~((temp / 3600) % 24)
    var mins = ~~((temp % 3600) / 60)
    var secs = temp % 60

    var ret = ''

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '')
    ret += '' + secs

    return ret
  } else return ''
}

type CountDownProps = {
  startSeconds: number
  onComplete: () => void
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
      this.props.onComplete()
      return
    }

    this.forceUpdate()
  }

  private get remainingSeconds(): number {
    return Math.max(0, Math.round((this.state.endTime - Date.now()) / 1000))
  }

  render() {
    return <Typography>({durationSecondsConverter(this.remainingSeconds.toString())})</Typography>
  }
}
