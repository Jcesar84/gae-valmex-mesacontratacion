import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Perfilamientos from './tabsCuestionarioPerfilamientoCliente/perfilamientos/Perfilamientos';
import PerfilInversionSuperiorInferior from './tabsCuestionarioPerfilamientoCliente/perfilInversionSuperiorInferior/PerfilInversionSuperiorInferior';

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

const CuestionarioPerfilamientoClienteTramite = (props) => {
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
    // eslint-disable-next-line
    const [origen, setOrigen] = React.useState('Onboarding');
    // eslint-disable-next-line
    const [fechaHora, setFechaHora] = React.useState('12/09/2023 15:50 hrs');

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <AppBar position="static">
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    aria-label="full width tabs example"
                    sx={{ backgroundColor: 'navy' }}
                >
                    <Tab label="Perfilamientos" {...a11yProps(0)} />
                    <Tab label="Perfil de inversión superior o inferior" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0} dir={theme.direction}>
                <Perfilamientos id={id} user={user} folio={folio} origen={origen} fechaHora={fechaHora} />
            </TabPanel>
            <TabPanel value={tab} index={1} dir={theme.direction}>
                <PerfilInversionSuperiorInferior id={id} user={user} folio={folio} origen={origen} fechaHora={fechaHora} />
            </TabPanel>
        </Box>
    );
}

export default CuestionarioPerfilamientoClienteTramite;