import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Estatus from '../../../../../../../comunes/Estatus';
import INE from '../../../../../../../../assets/images/INE.png';

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

const InstitutoNacionalElectoral = () => {

  const [expandedDatosDocumento, setExpandedDatosDocumento] = React.useState(true);
  const [expandedIntegridadDatos, setExpandedIntegridadDatos] = React.useState(true);

  const handleChangeDatosIne = (panel) => (event, newExpanded) => {
    if (panel === 'datosDocumento') {
      setExpandedDatosDocumento(newExpanded);
    }
    if (panel === 'integridadDatos') {
      setExpandedIntegridadDatos(newExpanded);
    }
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="idClienteIne"
            name="idClienteIne"
            fullWidth
            label="ID de Cliente"
            value={"ID de Cliente: JPB02"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="idClienteIneValidacionAutomatica"
            name="idClienteIneValidacionAutomatica"
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
        <Grid item xs={12} sm={12} sx={{ paddingTop: '5px', paddingBottom: '5px' }} >
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
                Verificación de documento de Identidad Nivel 1
              </Typography>
            </Toolbar>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} >
          <FormControl fullWidth variant="standard">
            <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} id="serivicio-inversion">Mexico - Vote Card (2019)</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth variant="standard">
            <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} id="serivicio-inversion">V. Totales: 24</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth variant="standard">
            <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} id="serivicio-inversion">V. Exitosas: 24</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth variant="standard">
            <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} id="serivicio-inversion">V. Dudosas: 0</FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth variant="standard">
            <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} id="serivicio-inversion">V. Fallidas: 0</FormLabel>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth variant="standard">
                  <img src={INE} alt={"INE"} />
                  <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} >
                    INE
                  </FormLabel>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Container component="main" maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} sx={{ paddingTop: '5px', paddingBottom: '5px' }} >
                <Accordion expanded={expandedDatosDocumento} onChange={handleChangeDatosIne('datosDocumento')} >
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography >Datos del documento</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell align="left">Resultado de la verificacion: </TableCell>
                            <TableCell align="left">El documento a sido verificado correctamente</TableCell>
                            <TableCell align="left">Codigo de tipo de documento: </TableCell>
                            <TableCell align="left">ID</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Identificador único: </TableCell>
                            <TableCell align="left">b6f8a9e8-f793-40ac-b83a-a4f53382653b</TableCell>
                            <TableCell align="left">Numero de duplicados: </TableCell>
                            <TableCell align="left">02</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Nombre: </TableCell>
                            <TableCell align="left">PEREZ BARAJAS JOSE CARLOS</TableCell>
                            <TableCell align="left">Fecha de verificación: </TableCell>
                            <TableCell align="left">2023-03-30</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">CURP: </TableCell>
                            <TableCell align="left">PEBC870527HDFRRR04</TableCell>
                            <TableCell align="left">Clave de elector: </TableCell>
                            <TableCell align="left">PRBRCR87052709H300</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Número CIC: </TableCell>
                            <TableCell align="left">223069441</TableCell>
                            <TableCell align="left">Número de OCR o Número de Identificacion Ciudadano: </TableCell>
                            <TableCell align="left">1659072488673</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Fecha de Nacimiento: </TableCell>
                            <TableCell align="left">27/05/1987</TableCell>
                            <TableCell align="left">Fecha de Registro: </TableCell>
                            <TableCell align="left">01/01/2005</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Fecha de Emisión: </TableCell>
                            <TableCell align="left">01/01/2021 - 2 AÑOS</TableCell>
                            <TableCell align="left">Fecha de Vigencia: </TableCell>
                            <TableCell align="left">31/12/2031</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Edad de Registro: </TableCell>
                            <TableCell align="left">33</TableCell>
                            <TableCell align="left">Número de Emisión: </TableCell>
                            <TableCell align="left">02</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Sexo: </TableCell>
                            <TableCell align="left">H</TableCell>
                            <TableCell align="left">Nacionalidad: </TableCell>
                            <TableCell align="left">México</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Pais de Emisión: </TableCell>
                            <TableCell align="left">México</TableCell>
                            <TableCell align="left">Sección: </TableCell>
                            <TableCell align="left">1659</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">Dirección: </TableCell>
                            <TableCell align="left">COL CERRO PRIETO 07960, GUSTAVO A MADERO, CDMX</TableCell>
                            <TableCell align="left">Ubicación de la dirección: </TableCell>
                            <TableCell align="left"></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandedIntegridadDatos} onChange={handleChangeDatosIne('integridadDatos')} >
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography >Integridad de los datos</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell rowSpan={2} align="left">Edad: </TableCell>
                            <TableCell align="left">{"MRZ: 35"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">{"Visual: 35"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell rowSpan={2} align="left">Nombre Completo: </TableCell>
                            <TableCell align="left">{"MRZ: GARCIA ROBLES JULIO CESAR"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">{"VISUAL: GARCIA ROBLES JULIO CESAR"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell rowSpan={2} align="left">Sexo: </TableCell>
                            <TableCell align="left">{"MRZ: H"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">{"VISUAL: H"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell rowSpan={2} align="left">Fecha Nacimiento: </TableCell>
                            <TableCell align="left">{"MRZ: 30/07/1984"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align="left">{"VISUAL: 30/07/1984"}</TableCell>
                            <TableCell align="left">
                              <Estatus label={""} estatusMostrar={'si-img'} />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default InstitutoNacionalElectoral;