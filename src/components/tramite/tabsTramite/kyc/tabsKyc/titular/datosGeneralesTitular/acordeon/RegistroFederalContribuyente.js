import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";

const RegistroFederalContribuyente = () => {
  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="rfc"
            name="rfc"
            fullWidth
            label="RFC"
            defaultValue="GARJ840730JNA"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="rfcValidacionAutomatica"
            name="rfcValidacionAutomatica"
            fullWidth
            label="Validación Automática"
            value={"Exitosa"}
            InputProps={{
              readOnly: true,
              size: 'medium',
              endAdornment: (
                <InputAdornment position="end">
                  <CheckCircleIcon sx={{ color: 'green' }} />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="rfcTipoPersona"
            name="rfcTipoPersona"
            fullWidth
            label="Tipo de Persona"
            defaultValue="FISICA"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="rfcMensaje"
            name="rfcMensaje"
            fullWidth
            label="Mensaje"
            defaultValue="RFC Valido"
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default RegistroFederalContribuyente;