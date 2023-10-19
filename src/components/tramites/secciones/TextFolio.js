import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const TextFolio = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <FormControl fullWidth variant="standard">
                <TextField
                    fullWidth
                    helperText=""
                    id="demo-helper-text-misaligned"
                    label="Folio"
                />
            </FormControl>
        </Box >
    )
}

export default TextFolio;