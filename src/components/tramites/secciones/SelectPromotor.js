import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectPromotor = () => {

    const options = [
        { value: 'todos', label: 'Todos' },
        { value: 'promotor', label: 'Promotor' },
    ];

    const [promotor, setPromotor] = useState('todos');

    const handleChange = (event) => {
        setPromotor(event.target.value);
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl fullWidth>
                <InputLabel id="promotorTramitesLabel">Promotor</InputLabel>
                <Select
                    labelId="promotorTramitesLabel"
                    id="promotorTramites"
                    value={promotor}
                    onChange={handleChange}
                    autoWidth
                    label="Promotor"
                >
                    {options.map(o => (
                        <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectPromotor;