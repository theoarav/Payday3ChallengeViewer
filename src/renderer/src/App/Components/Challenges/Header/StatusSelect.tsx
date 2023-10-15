import * as React from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

const statusMap = {
  COMPLETED: 'Completed',
  INPROGRESS: 'In Progress',
  INIT: 'Locked',
  BUGGED: 'Bugged'
}

type Status = keyof typeof statusMap

interface StatusSelectProps {
  onStatusChange: (statuses: Status[]) => void
  selectedStatuses: any[]
}

interface StatusSelectStates {
  checked: Record<Status, boolean>
}

export default class StatusSelect extends React.Component<StatusSelectProps, StatusSelectStates> {
  constructor(props: any) {
    super(props)
    this.state = {
      checked: {
        COMPLETED: true,
        INPROGRESS: true,
        INIT: true,
        BUGGED: true,
      },
    }
  }

  componentDidMount(): void {
    let newChecked: Record<Status, boolean> =
    {
      COMPLETED: this.props.selectedStatuses.includes('COMPLETED'),
      INPROGRESS: this.props.selectedStatuses.includes('INPROGRESS'),
      INIT: this.props.selectedStatuses.includes('INIT'),
      BUGGED: this.props.selectedStatuses.includes('BUGGED'),
    }
    this.setState({checked: newChecked})
  }

  private handleIndividualChange = (status: Status) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = { ...this.state.checked, [status]: event.target.checked }
    this.setState({checked: newChecked})
    this.props.onStatusChange(Object.keys(newChecked).filter((key) => newChecked[key as Status]) as Status[])
  }

  render() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }} style={{ display: 'inline-block' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {Object.entries(statusMap).map(([status, label]) => (
          <FormControlLabel
            key={status}
            label={label}
            control={
              <Checkbox
                checked={this.state.checked[status as Status]}
                onChange={this.handleIndividualChange(status as Status)}
                color="success"
              />
            }
          />
        ))}
      </Box>
    </Box>
  )
}
}
