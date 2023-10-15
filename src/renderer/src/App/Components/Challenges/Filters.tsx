import { Dialog, DialogActions, DialogTitle, IconButton, List, ListItem } from '@mui/material'
import StatusSelect from './Header/StatusSelect'
import FilterSelect from '../FilterSelect/FilterSelect'
import customTagFilters from './CustomTagFilters'
import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { Close } from '@mui/icons-material'

export const ChallengesFilters = ({
  handleStatusChange,
  onTagFilterChange,
  selectedFilters,
  selectedStatuses
}: {
  handleStatusChange
  onTagFilterChange
  selectedFilters
  selectedStatuses
}): { element: ReactElement; setOpen: Dispatch<SetStateAction<boolean>>; open: boolean } => {
  const [open, setOpen] = useState(false)

  return {
    element: (
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Filters</DialogTitle>
        <DialogActions>
          <List style={{ textAlign: 'center' }}>
            {Object.entries(customTagFilters).map(([key, values]) => (
              <ListItem key={key} style={{ display: 'inline-block' }}>
                <FilterSelect
                  key={key}
                  optionName={key}
                  filterOptions={values.map((value) => ({ name: value.name, tags: value.tags }))}
                  selectedFilters={selectedFilters}
                  filterChange={(tags: string[]): void => onTagFilterChange(key, tags)}
                />
              </ListItem>
            ))}
            <StatusSelect onStatusChange={handleStatusChange} selectedStatuses={selectedStatuses}/>
          </List>
        </DialogActions>
        <IconButton
          onClick={(): void => {
            setOpen(false)
          }}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px'
          }}
        >
          <Close />
        </IconButton>
      </Dialog>
    ),
    setOpen: setOpen,
    open: open
  }
}
