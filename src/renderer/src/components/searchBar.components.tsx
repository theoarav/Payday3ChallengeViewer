import { Container, InputAdornment, TextField, Button } from '@mui/material'
import { ReactElement, useState } from 'react'
import { Search, FilterList, Sort } from '@mui/icons-material/'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export default function SearchBar({
  onChange,
  setOpen,
  open,
  handleSortOption
}: {
  onChange
  setOpen
  open
  handleSortOption
}): ReactElement {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortMethod, setSortMethod] = useState('A-Z')

  const handleChange = (event: { target: { value: string } }): void => {
    setSearchTerm(event.target.value)
    onChange(event.target.value)
  }

  const handleSort = (event: SelectChangeEvent) => {
    const value = event.target.value
    setSortMethod(value)
    handleSortOption(value)
  }

  return (
    <Container sx={{ mx: 0 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: '100%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: ([
            <InputAdornment position="end">
              <FormControl variant="standard" fullWidth>
                <InputLabel id={'sortfilter-label'}>{"Sort by: "}</InputLabel>
                  <Select
                    labelId={'sortfilter-label'}
                    value={sortMethod}
                    onChange={handleSort}
                    autoWidth={true}
                  >
                    <MenuItem value={"A-Z"} key={"sortfilter-"+1}>
                      A-Z
                    </MenuItem>
                    <MenuItem value={"Z-A"} key={"sortfilter-"+2}>
                      Z-A
                    </MenuItem>
                    <MenuItem value={"PercHigh"} key={"sortfilter-"+3}>
                      High %
                    </MenuItem>
                    <MenuItem value={"PercLow"} key={"sortfilter-"+4}>
                      Low %
                    </MenuItem>
                  </Select>
              </FormControl>
            </InputAdornment>,
            <InputAdornment position="end">
            <Button
              variant="contained"
              color="success"
              onClick={(): void => {
                setOpen(!open)
              }}
              endIcon={<FilterList/>}
            >
              Filters
            </Button>
          </InputAdornment>,]
          )
        }}
      />
    </Container>
  )
}
