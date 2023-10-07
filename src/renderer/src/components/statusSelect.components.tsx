import * as React from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

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
  const [checked, setChecked] = React.useState<Record<Status, boolean>>({
    COMPLETED: true,
    INPROGRESS: true,
    INIT: true
  })

  const handleIndividualChange =
    (status: Status) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = { ...checked, [status]: event.target.checked }
      setChecked(newChecked)
      onStatusChange(Object.keys(newChecked).filter((key) => newChecked[key as Status]) as Status[])
    }

  // const handleSelectAllChange = () => {
  //   const allChecked = !Object.values(checked).every(Boolean)
  //   const newChecked = {
  //     COMPLETED: allChecked,
  //     INPROGRESS: allChecked,
  //     INIT: allChecked
  //   }
  //   setChecked(newChecked)
  //   onStatusChange(allChecked ? (Object.keys(statusMap) as Status[]) : [])
  // }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }} style={{ display: 'inline-block' }}>
      {/* <FormControlLabel
        label="Select all"
        control={
          <Checkbox
            checked={Object.values(checked).every(Boolean)}
            indeterminate={
              Object.values(checked).some(Boolean) && !Object.values(checked).every(Boolean)
            }
            color="success"
            onChange={handleSelectAllChange}
          />
        }
      /> */}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {Object.entries(statusMap).map(([status, label]) => (
          <FormControlLabel
            key={status}
            label={label}
            control={
              <Checkbox
                checked={checked[status as Status]}
                onChange={handleIndividualChange(status as Status)}
                color="success"
              />
            }
          />
        ))}
      </Box>
    </Box>
  )
}
