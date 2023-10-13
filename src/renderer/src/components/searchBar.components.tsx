import { Container, InputAdornment, TextField, Button } from '@mui/material'
import { ReactElement, useState } from 'react'
import { Search, FilterList } from '@mui/icons-material/'

export default function SearchBar({
  onChange,
  setOpen,
  open
}: {
  onChange
  setOpen
  open
}): ReactElement {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: { target: { value: string } }): void => {
    setSearchTerm(event.target.value)
    onChange(event.target.value)
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
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="success"
                onClick={(): void => {
                  setOpen(!open)
                }}
                endIcon={<FilterList />}
              >
                Filters
              </Button>
            </InputAdornment>
          )
        }}
      />
    </Container>
  )
}
