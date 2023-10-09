import { Box } from '@mui/material'
import StatusSelect from './statusSelect.components'
import FilterSelect from './filterSelect.components'
import customTagFilters from '@renderer/data/customTagFilters'

export const ChallengesFilters = ({ handleStatusChange, onTagFilterChange }) => {
  return (
    <Box
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        columnGap: 8,
        rowGap: 8,
        marginBottom: 4,
        marginTop: 12,
        paddingLeft: 12,
        paddingRight: 12
      }}
    >
      {Object.entries(customTagFilters).map(([key, values]) => (
        <FilterSelect
          key={key}
          optionName={key}
          filterOptions={values.map((value) => ({ name: value.name, tags: value.tags }))}
          filterChange={(tags: string[]) => onTagFilterChange(key, tags)}
        />
      ))}
      <StatusSelect onStatusChange={handleStatusChange} />
    </Box>
  )
}
