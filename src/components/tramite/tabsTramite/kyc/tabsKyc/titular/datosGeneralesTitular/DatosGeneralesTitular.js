import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DatosGenerales from './acordeon/DatosGenerales';
import ClaveUnicaRegistroPoblacion from './acordeon/ClaveUnicaRegistroPoblacion';
import RegistroFederalContribuyente from './acordeon/RegistroFederalContribuyente';
import NumeroTelefonico from './acordeon/NumeroTelefonico';
import CorreoElectronico from './acordeon/CorreoElectronico';
import InstitutoNacionalElectoral from './acordeon/InstitutoNacionalElectoral';
import Geolocalizacion from './acordeon/Geolocalizacion';
import InternetProtocol from './acordeon/InternetProtocol';
import Validacion from './acordeon/Validacion';

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

const DatosGeneralesTitular = () => {
  const [expandedDatosGenerales, setExpandedDatosGenerales] = React.useState(true);
  const [expandedCurp, setExpandedCurp] = React.useState(true);
  const [expandedRfc, setExpandedRfc] = React.useState(true);
  const [expandedNumeroTelefonico, setExpandedNumeroTelefonico] = React.useState(true);
  const [expandedCorreoElectronico, setExpandedCorreoElectronico] = React.useState(true);
  const [expandedIne, setExpandedsetIne] = React.useState(true);
  const [expandedGeolocalizacion, setExpandedGeolocalizacion] = React.useState(true);
  const [expandedIp, setExpandedIp] = React.useState(true);
  const [expandedValidacion, setExpandedValidacion] = React.useState(true);
  // eslint-disable-next-line
  const [latitud, setLatitud] = React.useState(20.3783217);
  // eslint-disable-next-line
  const [longitud, setLongitud] = React.useState(-99.9620911);

  const handleChangeDatosGeneralesTitular = (panel) => (event, newExpanded) => {
    if (panel === 'datosGenerales') {
      setExpandedDatosGenerales(newExpanded);
    }
    if (panel === 'curp') {
      setExpandedCurp(newExpanded);
    }
    if (panel === 'rfc') {
      setExpandedRfc(newExpanded);
    }
    if (panel === 'numeroTelefonico') {
      setExpandedNumeroTelefonico(newExpanded);
    }
    if (panel === 'numeroTelefonico') {
      setExpandedNumeroTelefonico(newExpanded);
    }
    if (panel === 'correoElectronico') {
      setExpandedCorreoElectronico(newExpanded);
    }
    if (panel === 'ine') {
      setExpandedsetIne(newExpanded);
    }
    if (panel === 'geolocalizacion') {
      setExpandedGeolocalizacion(newExpanded);
    }
    if (panel === 'ip') {
      setExpandedIp(newExpanded);
    }
    if (panel === 'validacion') {
      setExpandedValidacion(newExpanded);
    }
  };

  return (
    <div>
      <Accordion expanded={expandedDatosGenerales} onChange={handleChangeDatosGeneralesTitular('datosGenerales')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography >Datos Generales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DatosGenerales />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedCurp} onChange={handleChangeDatosGeneralesTitular('curp')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography >Clave Unica de Registro de Poblacion (CURP)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClaveUnicaRegistroPoblacion />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedRfc} onChange={handleChangeDatosGeneralesTitular('rfc')} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography >Registro Federal del Contribuyente (RFC)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RegistroFederalContribuyente />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedNumeroTelefonico} onChange={handleChangeDatosGeneralesTitular('numeroTelefonico')} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography >Número Telefónico</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NumeroTelefonico />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedCorreoElectronico} onChange={handleChangeDatosGeneralesTitular('correoElectronico')} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography >Correo Electrónico</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CorreoElectronico />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedIne} onChange={handleChangeDatosGeneralesTitular('ine')} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography >INE / IFE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InstitutoNacionalElectoral />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedGeolocalizacion} onChange={handleChangeDatosGeneralesTitular('geolocalizacion')} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography >Geolocalización</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Geolocalizacion latitud={latitud} longitud={longitud} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedIp} onChange={handleChangeDatosGeneralesTitular('ip')} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography >IP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InternetProtocol />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedValidacion} onChange={handleChangeDatosGeneralesTitular('validacion')} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography >Validación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Validacion />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default DatosGeneralesTitular;