import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

const statusMap = {
  COMPLETED: 'Completed',
  INPROGRESS: 'In Progress',
  INIT: 'Locked'
}

type Status = keyof typeof statusMap

interface StatusSelectProps {
  onStatusChange: (statuses: Status[]) => void
}

export default function StatusSelect({ onStatusChange }: StatusSelectProps) {
  const [checkedStatuses, setCheckedStatuses] = React.useState<Status[]>([
    'COMPLETED',
    'INPROGRESS',
    'INIT'
  ])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value }
    } = event

    let newCheckedStatuses = [...value] as Status[]

    //@ts-ignore
    if (newCheckedStatuses.includes('ALL')) {
      if (checkedStatuses.length === Object.keys(statusMap).length) {
        newCheckedStatuses = []
      } else {
        newCheckedStatuses = Object.keys(statusMap) as Status[]
      }
    }

    setCheckedStatuses(newCheckedStatuses)
    onStatusChange(newCheckedStatuses)
  }

  const allSelected = checkedStatuses.length === Object.keys(statusMap).length
  const noneSelected = checkedStatuses.length === 0

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id="status-checkbox-label">Status</InputLabel>
      <Select
        labelId="status-checkbox-label"
        id="status-checkbox"
        multiple
        value={checkedStatuses}
        onChange={handleChange}
        renderValue={(selected) => {
          return selected.length === Object.keys(statusMap).length
            ? 'Show all'
            : (selected as Status[]).map((s) => statusMap[s] || s).join(', ')
        }}
      >
        <MenuItem key="ALL" value="ALL">
          <Checkbox
            color="success"
            checked={allSelected}
            indeterminate={!allSelected && !noneSelected}
          />
          <ListItemText primary="Select All" />
        </MenuItem>
        {Object.entries(statusMap).map(([status, label]) => (
          <MenuItem key={status} value={status}>
            <Checkbox color="success" checked={checkedStatuses.includes(status as Status)} />
            <ListItemText primary={label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
