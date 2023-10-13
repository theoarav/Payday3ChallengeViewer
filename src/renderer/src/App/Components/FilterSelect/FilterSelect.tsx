import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { ReactElement } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import Tooltip from '@mui/material/Tooltip';

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
}: FilterSelectProps): ReactElement {
  const [selectedOption, setSelectedOption] = React.useState<FilterOption | 'All'>('All')

  const handleChange = (event: SelectChangeEvent): void => {
    const value = event.target.value
    const selected = filterOptions.find((option) => option.name === value) || 'All'
    setSelectedOption(selected)
    filterChange(selected !== 'All' ? selected.tags : [], optionName)
    console.log("optionName:",optionName);
  }

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id={optionName + '-label'}>{optionName}</InputLabel>
      <Select
        labelId={optionName + '-label'}
        value={selectedOption !== 'All' ? selectedOption.name : 'All'}
        label={optionName}
        onChange={handleChange}
        autoWidth={true}
      >
        <MenuItem value="All">Show all</MenuItem>
        {
          //Doing a separate filter for weapons is not a good practice because it wont be dynamic, but theres no real way of implementing subgroups for the weapons otherwise :(
        }
        {optionName === "Weapon" ? [
          <ListSubheader>Assault Rifle</ListSubheader>,
            <MenuItem value="CAR-4" key={"weapons-"+0}>
              <Tooltip placement="left" title="Max level: 29">
                <label>CAR-4</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="KU-59" key={"weapons-"+1}>
              <Tooltip placement="left" title="Max level: 29">
                <label>KU-59</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="Northwest B-9" key={"weapons-"+2}>
              <Tooltip placement="left" title="Max level: 27">
                <label>Northwest B-9</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="VF-7S" key={"weapons-"+3}>
              <Tooltip placement="left" title="Max level: 29">
                <label>VF-7S</label>
              </Tooltip>
            </MenuItem>,
          <ListSubheader>Marksman Rifle</ListSubheader>,
            <MenuItem value="Reinfeld 900S" key={"weapons-"+4}>
              <Tooltip placement="left" title="Max level: 14">
                <label>Reinfeld 900S</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="SA A144" key={"weapons-"+5}>
              <Tooltip placement="left" title="Max level: 24">
                <label>SA A144</label>
              </Tooltip>
            </MenuItem>,
          <ListSubheader>Pistol</ListSubheader>,
            <MenuItem value="SP Model 11" key={"weapons-"+6}>
              <Tooltip placement="left" title="Max level: 13">
                <label>SP Model 11</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="Signature 40" key={"weapons-"+7}>
              <Tooltip placement="left" title="Max level: 13">
                <label>Signature 40</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="Signature 403" key={"weapons-"+8}>
              <Tooltip placement="left" title="Max level: 13">
                <label>Signature 403</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="Stryk 7" key={"weapons-"+9}>
              <Tooltip placement="left" title="Max level: 13">
                <label>Stryk 7</label>
              </Tooltip>
            </MenuItem>,
          <ListSubheader>Revolver</ListSubheader>,
            <MenuItem value="J&M Castigo 44" key={"weapons-"+10}>
              <Tooltip placement="left" title="Max level: 12">
                <label>J&M Castigo 44</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="Sforza Bison" key={"weapons-"+11}>
              <Tooltip placement="left" title="Max level: 11">
                <label>Sforza Bison</label>
              </Tooltip>
            </MenuItem>,
          <ListSubheader>SMG</ListSubheader>,
            <MenuItem value="FIK PC9" key={"weapons-"+12}>
              <Tooltip placement="left" title="Max level: 24">
                <label>FIK PC9</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="SG Compact-7" key={"weapons-"+13}>
              <Tooltip placement="left" title="Max level: 17">
                <label>SG Compact-7</label>
              </Tooltip>
            </MenuItem>,            
            <MenuItem value="Ziv Commando" key={"weapons-"+14}>
              <Tooltip placement="left" title="Max level: 17">
                <label>Ziv Commando</label>
              </Tooltip>
            </MenuItem>,

          <ListSubheader>Shotgun</ListSubheader>,
            <MenuItem value="Mosconi 12 Classic" key={"weapons-"+15}>
              <Tooltip placement="left" title="Max level: 12">
                <label>Mosconi 12 Classic</label>
              </Tooltip>
            </MenuItem>,
            <MenuItem value="Reinfeld 880" key={"weapons-"+16}>
              <Tooltip placement="left" title="Max level: 17">
                <label>Reinfeld 880</label>
              </Tooltip>
            </MenuItem>,


          <ListSubheader>Overkill Weapon</ListSubheader>,
            <MenuItem value="Het-5 Red Fox" key={"weapons-"+17}>
              <label>Het-5 Red Fox</label>
            </MenuItem>,
            <MenuItem value="Marcom Mamba GL" key={"weapons-"+18}>
              <label>Marcom Mamba GL</label>
            </MenuItem> ]
        : 
        filterOptions.map((option, index) => (
          <MenuItem value={option.name} key={index}>
            {option.name}
          </MenuItem>
        ))
        }
        
      </Select>
    </FormControl>
  )
}
