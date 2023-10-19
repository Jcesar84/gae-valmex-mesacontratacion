import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import COMPROBANTEDOMICILIO from '../../../../../../../,,/../../assets/images/COMPROBANTEDOMICILIO.png';

const DomicilioParticular = () => {
    return (
        <Container component="main" maxWidth="xl" sx={{ mb: 1 }}>
            <Grid container spacing={3} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="domicilioParticularValidacionAutomatica"
                        name="domicilioParticularValidacionAutomatica"
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularCalleAvenidaVia"
                        name="domicilioParticularCalleAvenidaVia"
                        fullWidth
                        label="Calle, Avenida o Via"
                        value={"Calle, Avenida o Via"}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularNoExterior"
                        name="domicilioParticularNoExterior"
                        fullWidth
                        label="No. Exterior"
                        value={"No. Exterior"}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularNoInterior"
                        name="domicilioParticularNoInterior"
                        fullWidth
                        label="No. Interior"
                        value={"No. Interior"}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularColoniaUrbanizacion"
                        name="domicilioParticularColoniaUrbanizacion"
                        fullWidth
                        label="Colonia o Urbanización"
                        value={"Colonia o Urbanización"}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularCiudadPoblacion"
                        name="domicilioParticularCiudadPoblacion"
                        fullWidth
                        label="Ciudad o Población"
                        value={"Ciudad o Población"}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularAlcaldiaMunicipio"
                        name="domicilioParticular"
                        fullWidth
                        label="Alcaldia, Municipio o Demarcación Politica Similar"
                        value={"Alcaldia, Municipio o Demarcación"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularCodigoPostal"
                        name="domicilioParticularCodigoPostal"
                        fullWidth
                        label="Código Postal"
                        value={"Código Postal"}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularEntidadFederativa"
                        name="domicilioParticularEntidadFederativa"
                        fullWidth
                        label="Entidad Federativa, Estado, Provincia, Departamento o Demarcación Politica"
                        value={"Entidad Federativa, Estado, Provincia, Departamento o Demarcación Politica"}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="domicilioParticularPais"
                        name="domicilioParticularPais"
                        fullWidth
                        label="Pais"
                        value={"Pais"}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mb: 1 }}>
                <Grid item xs={12} sm={3}>
                    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth variant="standard">
                                    <img src={COMPROBANTEDOMICILIO} alt={"Comprobante Domicilio Titular"} />
                                    <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} >
                                        Comprobante Domicilio Titular
                                    </FormLabel>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Grid container spacing={3} sx={{ mb: 1 }}>
                        <Grid item xs={12} sm={12}>
                            <Box sx={{ width: '100%' }}>
                                <Toolbar
                                    variant="dense"
                                    sx={{
                                        marginBottom: 0,
                                        marginTop: 1,
                                        bgcolor: 'navy',
                                    }}
                                >
                                    <Typography
                                        sx={{ flex: '1 1 100%', color: 'white' }}
                                        id="tabsTramiteTitle"
                                        component="div"
                                    >
                                        Comprobante de Domicilio
                                    </Typography>
                                </Toolbar>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left"><b>Fecha de verificación:</b> </TableCell>
                                            <TableCell align="left">Fecha no encontrada</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left"><b>Nombre:</b> </TableCell>
                                            <TableCell align="left">Nombre no encontrado</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left"><b>Fecha/Mes de comprobación:</b> </TableCell>
                                            <TableCell align="left">Fecha no encontrada</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left"><b>Dirección:</b> </TableCell>
                                            <TableCell align="left">Dirección no encontrada</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DomicilioParticular;