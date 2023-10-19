import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CURP from '../../../../../../../,,/../../assets/images/CURP.jpg';

const ClaveUnicaRegistroPoblacion = () => {

  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="curp"
                  name="curp"
                  fullWidth
                  label="CURP"
                  value={"GARJ840730HDFRBL04"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="curpValidacionAutomatica"
                  name="curpValidacionAutomatica"
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
                  id="curpNombre"
                  name="curpNombre"
                  fullWidth
                  label="Nombre"
                  value={"Julio César"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="curpApPaterno"
                  name="curpApPaterno"
                  fullWidth
                  label="Apellido Paterno"
                  value={"Garcia"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="curpApMaterno"
                  name="curpApMaterno"
                  fullWidth
                  label="Apellido Materno"
                  value={"Robles"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="curpSexo"
                  name="curpSexo"
                  fullWidth
                  label="Sexo"
                  value={"HOMBRE"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="curpFechaNacimiento"
                  name="curpFechaNacimiento"
                  fullWidth
                  label="Fecha de Nacimiento"
                  value={"30/07/1984"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="curpPaisNacimiento"
                  name="curpPaisNacimiento"
                  fullWidth
                  label="Pais de Nacimiento"
                  value={"MEXICO"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="curpEstadoNacimiento"
                  name="curpEstadoNacimiento"
                  fullWidth
                  label="Estado de Nacimiento"
                  value={"MEXICO"}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth variant="standard">
                    <img src={CURP} alt={"RFC"} />
                    <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} >
                        CURP Titular
                    </FormLabel>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ClaveUnicaRegistroPoblacion;