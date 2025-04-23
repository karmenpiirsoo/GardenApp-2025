import hardinessZones from "../data/hardinessZones.json"
import {  styled, useAutocomplete } from "@mui/material";

const Label = styled('label')({
    display: 'block',
  });
  
  const Input = styled('input')(({ theme }) => ({
    width: 200,
    backgroundColor: '#fff',
    color: '#000',
    ...theme.applyStyles('dark', {
      backgroundColor: '#000',
      color: '#fff',
    }),
  }));
  
  const Listbox = styled('ul')(({ theme }) => ({
    width: 200,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: '#fff',
    overflow: 'auto',
    maxHeight: 200,
    border: '3px solid rgba(0,0,0,.25)',
    '& li.Mui-focused': {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#000',
    }),
  }));
  
  
  function MuiAutoComplete(props) {
    const {
      getRootProps,
      getInputLabelProps,
      getInputProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
        } = useAutocomplete({
      id: 'use-autocomplete-demo',
      options: [...new Set(hardinessZones.map(area => area.location))],
      getOptionLabel: (option) => option,
    });
  
  return (
    <div>
     <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Search your location</Label>
        <Input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()} onClick={(e) => props.filterByLocation(e)}>
          {groupedOptions.map((option, index) => {
            const { key, ...optionProps } = getOptionProps({ option, index });
            return (
              <li key={key} {...optionProps}>
                {option}
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  )
  }

export default MuiAutoComplete