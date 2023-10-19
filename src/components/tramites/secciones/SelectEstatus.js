import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectEstatus() {

  const options = [
    { value: 'todos', label: 'Todos' },
    { value: 'estatus', label: 'Estatus' },
  ];

  const [estatus, setEstatus] = useState('todos');

  const handleChange = (event) => {
    setEstatus(event.target.value);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl fullWidth>
        <InputLabel id="estatusTramitesLabel">Estatus</InputLabel>
        <Select
          labelId="estatusTramitesLabel"
          id="estatusTramites"
          value={estatus}
          onChange={handleChange}
          autoWidth
          label="Estatus"
        >
          {options.map(o => (
            <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}