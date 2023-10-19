import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";

const DatosGenerales = () => {

    return (
        <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                            size: 'medium',
                            endAdornment: (
                                <InputAdornment
                                    position="end">
                                    <CheckCircleIcon sx={{ color: 'green' }} />
                                </InputAdornment>
                            )
                        }}
                        id="dgNombre"
                        name="dgNombre"
                        fullWidth
                        label="Nombre(s), Apellido Paterno, Apellido Materno"
                        value={"Julio Cesar Garcia Robles"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                            size: 'medium',
                            endAdornment: (
                                <InputAdornment
                                    position="end">
                                    <CheckCircleIcon sx={{ color: 'green' }} />
                                </InputAdornment>
                            )
                        }}
                        id="dgGenero"
                        name="dgGenero"
                        fullWidth
                        label="Género"
                        value={"MASCULINO"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                            size: 'medium',
                            endAdornment: (
                                <InputAdornment
                                    position="end">
                                    <CheckCircleIcon sx={{ color: 'green' }} />
                                </InputAdornment>
                            )
                        }}
                        id="dgFechaNacimiento"
                        name="dgFechaNacimiento"
                        fullWidth
                        label="Fecha de Nacimiento"
                        value={"12/12/2023"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                            size: 'medium',
                            endAdornment: (
                                <InputAdornment
                                    position="end">
                                    <CheckCircleIcon sx={{ color: 'green' }} />
                                </InputAdornment>
                            )
                        }}
                        id="dgPaisNacimiento"
                        name="dgPaisNacimiento"
                        fullWidth
                        label="Pais de Nacimiento"
                        value={"MEXICO"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                            size: 'medium',
                            endAdornment: (
                                <InputAdornment
                                    position="end">
                                    <CheckCircleIcon sx={{ color: 'green' }} />
                                </InputAdornment>
                            )
                        }}
                        id="dgEntidadNacimiento"
                        name="dgEntidadNacimiento"
                        fullWidth
                        label="Entidad Federativa de Nacimiento"
                        value={"MEXICO"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                            size: 'medium',
                            endAdornment: (
                                <InputAdornment
                                    position="end">
                                    <CheckCircleIcon sx={{ color: 'green' }} />
                                </InputAdornment>
                            )
                        }}
                        id="dgNacionalidad"
                        name="dgNacionalidad"
                        fullWidth
                        label="Nacionalidad"
                        defaultValue={"Mexicana"}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DatosGenerales;