import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CONSTANCIASITUACIONFISCAL from '../../../../../../../,,/../../assets/images/CONSTANCIASITUACIONFISCAL.png';

const DomicilioFiscal = (props) => {

    // eslint-disable-next-line
    const [mismoDomicilio, setMismoDomicilio] = React.useState(props.mismoDomicilio);

    return (
        <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Grid container spacing={3} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={8} />
                <Grid item xs={12} sm={4} alignContent={'end'} sx={{ textAlign: 'right' }}>
                    <FormGroup>
                        <FormControlLabel checked={mismoDomicilio} control={<Checkbox color="success" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Mismo que Domicilio Fiscal" />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="domicilioFiscalValidacionAutomatica"
                        name="domicilioFiscalValidacionAutomatica"
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
            </Grid>
            <Grid container spacing={3} sx={{ mb: 2 }}>
                <Grid item xs={12} sm={12} >
                    <Box component="div" sx={mismoDomicilio ? { display: 'none' } : { display: 'block' }}>
                        <Grid container spacing={3} sx={{ mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    id="domicilioFiscalCalleAvenidaVia"
                                    name="domicilioFiscalCalleAvenidaVia"
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
                                    id="domicilioFiscalNoExterior"
                                    name="domicilioFiscalNoExterior"
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
                                    id="domicilioFiscalNoInterior"
                                    name="domicilioFiscalNoInterior"
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
                                    id="domicilioFiscalColoniaUrbanizacion"
                                    name="domicilioFiscalColoniaUrbanizacion"
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
                                    id="domicilioFiscalCiudadPoblacion"
                                    name="domicilioFiscalCiudadPoblacion"
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
                                    id="domicilioFiscalAlcaldiaMunicipio"
                                    name="domicilioFiscal"
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
                                    id="domicilioFiscalCodigoPostal"
                                    name="domicilioFiscalCodigoPostal"
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
                                    id="domicilioFiscalEntidadFederativa"
                                    name="domicilioFiscalEntidadFederativa"
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
                                    id="domicilioFiscalPais"
                                    name="domicilioFiscalPais"
                                    fullWidth
                                    label="Pais"
                                    value={"Pais"}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Container component="main" maxWidth="xl" sx={{ mb: 4, textAlign: 'center', alignItems: 'center' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <FormControl fullWidth variant="standard" sx={{ textAlign: 'center', alignItems: 'center' }}> 
                                    <img width={'25%'} src={CONSTANCIASITUACIONFISCAL} alt={"Comprobante de Domicilio Fiscal o Constancia de Situacion Fiscal"} />
                                    <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} >
                                        Comprobante de Domicilio Fiscal o Constancia de Situacion Fiscal
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

export default DomicilioFiscal;