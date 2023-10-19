import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SerivicioInversion from './acordeon/SerivicioInversion';
import CuestionarioPerfilamiento from './acordeon/CuestionarioPerfilamiento';
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

const Perfilamientos = (props) => {
    // eslint-disable-next-line
    const [id, setId] = React.useState(props.id);
    // eslint-disable-next-line
    const [user, setUser] = React.useState(props.user);
    // eslint-disable-next-line
    const [folio, setFolio] = React.useState(props.folio);
    // eslint-disable-next-line
    const [titular, setTitular] = React.useState(props.titular);
    // eslint-disable-next-line
    const [origen, setOrigen] = React.useState(props.origen);
    // eslint-disable-next-line
    const [fechaHora, setFechaHora] = React.useState(props.fechaHora);
    // eslint-disable-next-line
    const [serivicioInversion, setSerivicioInversion] = React.useState('Asesoría de Inversiones');

    const [expandedServicioInversion, setExpandedServicioInversion] = React.useState(true);
    const [expandedCuestionarioPerfilamiento, setExpandedCuestionarioPerfilamiento] = React.useState(true);
    const [expandedValidacion, setExpandedValidacion] = React.useState(true);

    const handleChangePerfilamientos = (panel) => (event, newExpanded) => {
        if (panel === 'servicioInversion') {
            setExpandedServicioInversion(newExpanded);
        }
        if (panel === 'cuestionarioPerfilamiento') {
            setExpandedCuestionarioPerfilamiento(newExpanded);
        }
        if (panel === 'validacion') {
            setExpandedValidacion(newExpanded);
        }
    };

    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
                <Toolbar
                    sx={{
                        bgcolor: '#fff'
                    }}
                >
                    <Typography
                        sx={{ flex: '1 1 80%', color: 'navy' }}
                        variant="h6"
                        id="tabsTitularTitle"
                        component="div"
                    >
                        Origen: {origen}
                    </Typography>
                    <Typography
                        sx={{ flex: '1 1 20%', color: 'navy' }}
                        variant="h6"
                        id="tabsTitularTitle"
                        component="div"
                    >
                        Fecha: {fechaHora}
                    </Typography>
                </Toolbar>
                <Accordion expanded={expandedServicioInversion} onChange={handleChangePerfilamientos('servicioInversion')} >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography >Servicio de Inversión</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SerivicioInversion serivicioInversion={serivicioInversion}/>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandedCuestionarioPerfilamiento} onChange={handleChangePerfilamientos('cuestionarioPerfilamiento')} >
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography >Cuestionario de Perfilamiento</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CuestionarioPerfilamiento />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandedValidacion} onChange={handleChangePerfilamientos('validacion')} >
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography >Validación</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Validacion />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    );
}

export default Perfilamientos;