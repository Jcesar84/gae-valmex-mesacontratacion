import React from 'react'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    'navy',
  color: 'white',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    color: 'white',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Beneficiario = (props) => {
  // eslint-disable-next-line
  const [mismoDomicilio, setMismoDomicilio] = React.useState(props.mismoDomicilio);
  // eslint-disable-next-line
  const [respBeneficiario, setRespBeneficiario] = React.useState(props.respBeneficiario);
  // eslint-disable-next-line
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (evt, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange(props.sd)} >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography >Beneficiario - {respBeneficiario.id}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
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
              Datos Generales
            </Typography>
          </Toolbar>
          <Container component="main" maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={8}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="datosGeneralesRelacionParentesco"
                  name="datosGeneralesRelacionParentesco"
                  fullWidth
                  label="Relación o Parentesco con el Titular"
                  value={"Relación o Parentesco con el Titular"}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="datosGeneralesPorcentajeAsignado"
                  name="datosGeneralesPorcentajeAsignado"
                  fullWidth
                  label="Porcentaje Asignado"
                  value={"Porcentaje Asignado"}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="datosGeneralesNombresApPaternoApMaterno"
                  name="datosGeneralesNombresApPaternoApMaterno"
                  fullWidth
                  label="Nombre(s), Apellido Paterno y Apellido Materno"
                  value={"Nombre(s), Apellido Paterno y Apellido Materno"}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  id="datosGeneralesFechaNacimiento"
                  name="datosGeneralesFechaNacimiento"
                  fullWidth
                  label="Fecha de Nacimiento"
                  value={"Fecha de Nacimiento"}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
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
              Domicilio Particular
            </Typography>
          </Toolbar>
          <Container component="main" maxWidth="xl" sx={{ mt: 1, mb: 4 }}>
            <Grid container spacing={3} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={8} />
              <Grid item xs={12} sm={4} alignContent={'end'} sx={{ textAlign: 'right' }}>
                <FormGroup>
                  <FormControlLabel checked={mismoDomicilio} control={<Checkbox color="success" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Mismo que Domicilio Particular de Titular" />
                </FormGroup>
              </Grid>
              <Box component="div" sx={mismoDomicilio ? { display: 'none' } : { display: 'block' }}>
                <Grid container spacing={3} sx={{ mt: 2 , mb: 2 }}>
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
              </Box>
            </Grid>
          </Container>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default Beneficiario