import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import KycTramite from './kyc/KycTramite';
import CuestionarioPerfilamientoClienteTramite from './cuestionarioPerfilamientoCliente/CuestionarioPerfilamientoClienteTramite';

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const TabsTramite = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [tab, setTab] = React.useState(0);
    // eslint-disable-next-line
    const [id, setId] = React.useState(props.id);
    // eslint-disable-next-line
    const [user, setUser] = React.useState(props.user);
    // eslint-disable-next-line
    const [folio, setFolio] = React.useState(props.folio);
    // eslint-disable-next-line
    const [titular, setTitular] = React.useState(props.titular);
    
    
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    const handleClickReturn = () => {
        navigate("/landingPage/" + id + "/" + user);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <Toolbar
                sx={{
                    marginBottom: 1,
                    marginTop: 1,
                    bgcolor: '#fff'
                }}
            >
                <Typography
                    sx={{ flex: '1 1 100%', color: 'navy' }}
                    variant="h6"
                    id="tabsTramiteTitle"
                    component="div"
                >
                    Folio {folio}
                </Typography>
                <Tooltip title="Regresar">
                    <IconButton onClick={(event) => handleClickReturn(event)}>
                        <KeyboardReturnIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <AppBar position="static">
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    aria-label="full width tabs example"
                    sx={{ backgroundColor: 'navy' }}
                >
                    <Tab label="KYC" {...a11yProps(0)} />
                    <Tab label="Cuestionario de Perfilamiento del Cliente" {...a11yProps(1)} />
                    <Tab label="Validaciones" {...a11yProps(2)} />
                    <Tab label="Expediente" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0} dir={theme.direction}>
                <KycTramite id={id} user={user} folio={folio} titular={titular} />
            </TabPanel>
            <TabPanel value={tab} index={1} dir={theme.direction}>
                <CuestionarioPerfilamientoClienteTramite  id={id} user={user} folio={folio} />
            </TabPanel>
            <TabPanel value={tab} index={2} dir={theme.direction}>

            </TabPanel>
            <TabPanel value={tab} index={3} dir={theme.direction}>

            </TabPanel>
        </Box>
    );
}

export default TabsTramite;