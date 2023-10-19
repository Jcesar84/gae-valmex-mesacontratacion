import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PerfilSeleccionado from './acordeon/PerfilSeleccionado';
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

const PerfilInversionSuperiorInferior = (props) => {

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
    const [fechaHora, setFechaHora] = React.useState('12/09/2023 15:50 hrs');
    // eslint-disable-next-line
    const [perfil, setPerfil] = React.useState('Perfil 1');
    // eslint-disable-next-line
    const [tituloPerfil, setTituloPerfil] = React.useState('Conservador');

    const [expandedPerfilSeleccionado, setExpandedPerfilSeleccionado] = React.useState(true);
    const [expandedValidacion, setExpandedValidacion] = React.useState(true);

    const handleChangePerfilInversionSuperiorInferior = (panel) => (event, newExpanded) => {
        if (panel === 'perfilSeleccionado') {
            setExpandedPerfilSeleccionado(newExpanded);
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
                <Accordion expanded={expandedPerfilSeleccionado} onChange={handleChangePerfilInversionSuperiorInferior('perfilSeleccionado')} >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography >Perfil Seleccionado</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PerfilSeleccionado perfil={perfil} tituloPerfil={tituloPerfil} />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandedValidacion} onChange={handleChangePerfilInversionSuperiorInferior('validacion')} >
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

export default PerfilInversionSuperiorInferior;