import { Typography } from '@mui/material'
import * as React from 'react'
import { useState, useEffect, ReactElement } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import { isLoggedIn } from '@renderer/Services/Auth/Auth'
import { getStatItems } from '@renderer/Services/Stats/Stats'
import { numbersWithSeparator } from '@renderer/App/Components/Utils/Utils'
import { $$ } from '../../Language/StringReplacer'

type LevelFromIPProps = {
  ip: number
  totalIP: number
}

type LevelFromIPState = {
  ip: number
  level: number
  previousIP: number
  nextIP: number
}

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
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, maxWidth: "220px"}}> 
      <Box sx={{ minWidth: '120px', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          color="success"
          {...rest}
          value={Math.round((currentValue / targetValue) * 100)}
        />
      </Box>
      <Box sx={{ minWidth: 100 }}>
        <Typography variant="body2" color="text.secondary">
          {currentValue} / {targetValue}
        </Typography>
      </Box>
    </Box>
  )
}

export default class LevelFromIP extends React.Component<LevelFromIPProps, LevelFromIPState> {
  constructor(props: any) {
    super(props)
    this.state = { ip: 0, level: 0, previousIP: 0, nextIP: 0 }
  }

  componentDidMount() {
    this.fetchStatItemsAsync()
  }

  componentDidUpdate(prevprops: any) {
    if (this.props.ip !== prevprops.ip) {
      this.fetchStatItemsAsync()
    }
  }

  private fetchStatItemsAsync = async () => {
    const loggedIn = await isLoggedIn()
    if (!loggedIn) return

    try {
      const statItems = await getStatItems()

      if (statItems) {
        const ipStat = statItems.data.find((stat) => stat.statCode === 'infamy-point')
        this.setState({ ip: ipStat.value })
      }
    } catch (error) {
      //Fallback to calculated ip values in case the API fails
      this.setState({ ip: this.props.ip })
      console.error('Error during fetching infamy points:', error)
    }

    this.fetchLevelsFromIP()
  }

  private fetchLevelsFromIP() {
    const ipNeededPerLevel: number[] = [
      0, 100, 200, 300, 450, 600, 800, 1000, 1200, 1400, 1700, 2000, 2300, 2600, 2900, 3200, 3500,
      3800, 4100, 4400, 4700, 5000, 5300, 5600, 5900, 6200, 6500, 6800, 7100, 7400, 7700, 8000,
      8300, 8600, 8900, 9200, 9500, 9800, 10100, 10400, 10800, 11200, 11600, 12000, 12500, 13000,
      13500, 14000, 14500, 15000, 15500, 16000, 16600, 17200, 17800, 18400, 19000, 19600, 20200,
      20800, 21400, 22000, 22600, 23200, 23800, 24400, 25000, 25700, 26400, 27100, 27800, 28500,
      29200, 29900, 30600, 31300, 32000, 32700, 33400, 34100, 34900, 35700, 36500, 37300, 38100,
      38900, 39700, 40500, 41300, 42100, 42900, 43700, 44500, 45300, 46100, 46900, 47700, 48500,
      49300, 50100, 50900, 51750, 52650, 53600, 54600, 55650, 56750, 57900, 59100, 60350, 61650,
      63000, 64400, 65850, 67350, 68900, 70500, 72150, 73850, 75600, 77400, 79250, 81150, 83100,
      85100, 87100, 89100, 91100, 93100, 95100, 97100, 99100, 101100, 103100, 105100, 107100,
      109100, 111100, 113100, 116100, 119100, 122100, 125100, 128100, 131100, 134100, 137100,
      141100, 145100, 149100
    ]

    for (let i = 0; i < ipNeededPerLevel.length; i++) {
      if (this.state.ip < ipNeededPerLevel[i]) {
        this.setState({
          level: i,
          previousIP: ipNeededPerLevel[i - 1],
          nextIP: ipNeededPerLevel[i]
        })
        break
      }
    }
  }

  render() {
    return (
      <Tooltip
        placement="top"
        title={
          <div>
            <span style={{fontSize:"16px"}}>
              {$$("account.tooltipTitle")}
            </span>
            <LinearProgressWithLabel
              initialCurrentValue={this.state.ip - this.state.previousIP}
              targetValue={this.state.nextIP - this.state.previousIP}
            />
            <span style={{fontSize:"13px"}}>
              {$$("account.currentIp")}: {numbersWithSeparator(this.state.ip, ",")} IP
            </span>
            <br />
            <span style={{fontSize:"13px"}}>
              {$$("account.totalIp")}: {numbersWithSeparator(this.props.totalIP, ",")} IP
            </span>

          </div>
        }
      >
        <Typography noWrap>{$$("header.accountLevelText")}: {this.state.level}</Typography>
      </Tooltip>
    )
  }
}
