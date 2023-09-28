import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box } from '@mui/material'

interface FilterOption {
  name: string
  tags: string[]
}

interface FilterSelectProps {
  optionName: string
  filterOptions: FilterOption[]
  filterChange: (selectedTags: string[], optionName: string) => void
}

export default function FilterSelect({
  optionName,
  filterOptions,
  filterChange
}: FilterSelectProps) {
  const [selectedOption, setSelectedOption] = React.useState<FilterOption | 'All'>('All')

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    const selected = filterOptions.find((option) => option.name === value) || 'All'
    setSelectedOption(selected)
    filterChange(selected !== 'All' ? selected.tags : [], optionName)
  }

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id={optionName + '-label'}>{optionName}</InputLabel>
        <Select
          labelId={optionName + '-label'}
          value={selectedOption !== 'All' ? selectedOption.name : 'All'}
          label={optionName}
          onChange={handleChange}
          autoWidth={true}
        >
          <MenuItem value="All">Show all</MenuItem>
          {filterOptions.map((option, index) => (
            <MenuItem value={option.name} key={index}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
