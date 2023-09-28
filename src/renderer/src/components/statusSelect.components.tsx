import * as React from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

/*
challenge.status = "COMPLETED" | "INPROGRESS" | "INIT"
*/

const options = ['Completed', 'In Progress', 'Locked']

export default function StatusSelect({ onStatusChange }: any) {
  const [checked, setChecked] = React.useState(new Array(options.length).fill(true))

  const handleIndividualChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checked]
      newChecked[index] = event.target.checked
      setChecked(newChecked)
      onStatusChange(newChecked)
    }

  const handleSelectAllChange = () => {
    const newCheckedArray = checked.some((check) => !check)
      ? new Array(options.length).fill(true)
      : new Array(options.length).fill(false)

    setChecked(newCheckedArray)
    onStatusChange(newCheckedArray)
  }

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          label={option}
          control={
            <Checkbox
              checked={checked[index]}
              onChange={handleIndividualChange(index)}
              color="success"
            />
          }
        />
      ))}
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <FormControlLabel
        label="Select all"
        control={
          <Checkbox
            checked={checked.every(Boolean)}
            indeterminate={checked.some(Boolean) && !checked.every(Boolean)}
            color="success"
            onChange={handleSelectAllChange}
          />
        }
      />
      {children}
    </Box>
  )
}
