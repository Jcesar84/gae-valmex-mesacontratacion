import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DomicilioParticular from './acordeon/DomicilioParticular';
import DomicilioFiscal from './acordeon/DomicilioFiscal';
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


const Domicilios = () => {

  const [expandedDomicilioParticular, setExpandedDomicilioParticular] = React.useState(true);
  const [expandedDomicilioFiscal, setExpandedDomicilioFiscal] = React.useState(true);
  const [expandedDomicilioValidacion, setExpandedDomicilioValidacion] = React.useState(true);
  
  // eslint-disable-next-line
  const [mismoDomicilio, setMismoDomicilio] = React.useState(false);

  const handleChangeDomicilios = (panel) => (event, newExpanded) => {
    if (panel === 'domicilioParticular') {
      setExpandedDomicilioParticular(newExpanded);
    }
    if (panel === 'domicilioFiscal') {
      setExpandedDomicilioFiscal(newExpanded);
    }
    if (panel === 'validacion') {
      setExpandedDomicilioValidacion(newExpanded);
    }
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <Accordion expanded={expandedDomicilioParticular} onChange={handleChangeDomicilios('domicilioParticular')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography >Domicilio Particular</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DomicilioParticular />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedDomicilioFiscal} onChange={handleChangeDomicilios('domicilioFiscal')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography >Domicilio Fiscal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DomicilioFiscal mismoDomicilio={mismoDomicilio} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedDomicilioValidacion} onChange={handleChangeDomicilios('validacion')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography >Validación</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Validacion />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Domicilios;