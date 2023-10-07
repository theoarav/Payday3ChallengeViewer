import * as React from 'react';

//Converts seconds into a more reabled HH:MM:SS format.
function durationSecondsConverter(duration: string) {
  if (duration && duration != "undefined" && duration != null) {
    var temp = +duration;
    var hrs = ~~((temp / 3600) % 24);
    var mins = ~~((temp % 3600) / 60);
    var secs = temp % 60;

    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  }
  else return "";
}

type CountDownProps = {
    startSeconds: number,
    onComplete: () => void, 
}

type CountDownState ={
    seconds: number,
}

export default class CountDown extends React.Component<CountDownProps, CountDownState> {
    private timeoutId: any;

    constructor(props: any) {
        super(props);
        this.state = {
            seconds: this.props.startSeconds,
        }
    }

    componentWillMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        if (this.timeoutId) clearInterval(this.timeoutId);
    }   

    private startTimer() {
        this.timeoutId = setInterval(this.timeout.bind(this), 1000);
    }

    private timeout() {
        const seconds = this.state.seconds - 1;

        if(seconds < 0) {
            this.props.onComplete();
            return;
        }

        this.setState({ seconds });
    }

    render() {
        return <span>You can refresh your challenges in: <br/><b>{durationSecondsConverter(this.state.seconds.toString())}</b></span>
    }
}
