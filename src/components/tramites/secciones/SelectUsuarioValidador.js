import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectUsuarioValidador = () => {
    const options = [
        { value: 'todos', label: 'Todos' },
        { value: 'usuarioValidador', label: 'UsuarioValidador' },
    ];

    const [usuarioValidador, setUsuarioValidador] = useState('todos');

    const handleChange = (event) => {
        setUsuarioValidador(event.target.value);
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl fullWidth>
                <InputLabel id="usuarioValidadorTramitesLabel">Usuario Validador</InputLabel>
                <Select
                    labelId="usuarioValidadorTramitesLabel"
                    id="usuarioValidadorTramites"
                    value={usuarioValidador}
                    onChange={handleChange}
                    label="Usuario Validador"
                >
                    {options.map(o => (
                        <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );

    
}

export default SelectUsuarioValidador;