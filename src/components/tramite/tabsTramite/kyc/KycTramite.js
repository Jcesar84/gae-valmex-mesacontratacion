import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TabsKyc from './tabsKyc/TabsKyc';
import '../../Styles.css';

const KycTramite = (props) => {

    // eslint-disable-next-line
    const [id, setId] = React.useState(props.id);
    // eslint-disable-next-line
    const [user, setUser] = React.useState(props.user);
    // eslint-disable-next-line
    const [folio, setFolio] = React.useState(props.folio);
    // eslint-disable-next-line
    const [titular, setTitular] = React.useState(props.titular);

    const [seccion, setSeccion] = React.useState('titular');

    const [openInformacionFiguras, setOpenInformacionFiguras] = React.useState(true);
    const [openInformacionContrato, setOpenInformacionContrato] = React.useState(false);

    const handleClickInformacionFiguras = () => {
        setOpenInformacionFiguras(!openInformacionFiguras);
    };

    const handleClickInformacionContrato = () => {
        setOpenInformacionContrato(!openInformacionContrato);
    };

    const handleClickSection = (event, opc) => {
        setSeccion(opc);
    };

    return (
        <div className='row col-12 custom-landing-tramites'>
            <div className='col-2'>
                <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
                    <List
                        sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
                        component="nav"
                        dense={true}
                        aria-labelledby="kyc-tramite-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="kyc-tramite-list-subheader">
                                Informacion del Tramite
                            </ListSubheader>
                        }
                    >
                        <ListItemButton onClick={handleClickInformacionFiguras}>
                            <ListItemText primary="Información de Figuras" />
                            {openInformacionFiguras ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openInformacionFiguras} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} onClick={(event) => handleClickSection(event, 'titular')} >
                                    <ListItemText primary="Titular" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={(event) => handleClickSection(event, 'Cotitulares')} >
                                    <ListItemText primary="Cotitulares" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} onClick={(event) => handleClickSection(event, 'beneficiarios')} >
                                    <ListItemText primary="Beneficiarios" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Apoderado" onClick={(event) => handleClickSection(event, 'apoderado')} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Autorizado" onClick={(event) => handleClickSection(event, 'autorizado')} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Propietario Real" onClick={(event) => handleClickSection(event, 'propietarioReal')} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Proveedor de Recursos" onClick={(event) => handleClickSection(event, 'propietarioRecursos')} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleClickInformacionContrato}>
                            <ListItemText primary="Información del Contrato" />
                            {openInformacionContrato ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openInformacionContrato} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Registro de Cuenta de Cheques" onClick={(event) => handleClickSection(event, 'registroCuentaCheques')} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={(event) => handleClickSection(event, 'distribucionFiscal')}>
                            <ListItemText primary="Distribución Fiscal" />
                        </ListItemButton>
                        <ListItemButton onClick={(event) => handleClickSection(event, 'serviciosAdicionales')}>
                            <ListItemText primary="Servicios Adicionales" />
                        </ListItemButton>
                        <ListItemButton onClick={(event) => handleClickSection(event, 'conocimientoCliente')}>
                            <ListItemText primary="Conocimiento del Cliente" />
                        </ListItemButton>
                    </List>
                </Box>
            </div>
            <div className='col-10'>
                <div id='tabsKyc'>
                  <TabsKyc id={id} user={user} folio={folio} titular={titular} seccion={seccion} />
                </div>
            </div>
        </div>
    );
}

export default KycTramite;