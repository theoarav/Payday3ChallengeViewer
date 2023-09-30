import { Box } from '@mui/material'
import StatusSelect from './statusSelect.components'
import FilterSelect from './filterSelect.components'
import customTagFilters from '@renderer/data/customTagFilters'

export const ChallengesFilters = ({ handleStatusChange, onTagFilterChange }) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 4,
        marginTop: 12
      }}
    >
      <StatusSelect onStatusChange={handleStatusChange} />
      {Object.entries(customTagFilters).map(([key, values]) => (
        <FilterSelect
          key={key}
          optionName={key}
          filterOptions={values.map((value) => ({ name: value.name, tags: value.tags }))}
          filterChange={(tags: string[]) => onTagFilterChange(key, tags)}
        />
      ))}
    </Box>
  )
}
