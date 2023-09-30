import { Container, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar({ onChange }: any) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: any) => {
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
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </Container>
  )
}
