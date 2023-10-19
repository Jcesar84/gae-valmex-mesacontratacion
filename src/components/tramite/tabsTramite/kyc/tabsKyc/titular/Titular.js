import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DatosGeneralesTitular from './datosGeneralesTitular/DatosGeneralesTitular';
import Domicilios from './domiciliosTitular/Domicilios';
import ActividadEconomica from './actividadEconomicaTitular/ActividadEconomica';

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

const Titular = (props) => {
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
                    id="tabsTitularTitle"
                    component="div"
                >
                    Información de Figuras - Titular - {titular}
                </Typography>
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
                    <Tab label="Datos Generales" {...a11yProps(0)} />
                    <Tab label="Domicilios" {...a11yProps(1)} />
                    <Tab label="Actividad Economica" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0} dir={theme.direction}>
                <DatosGeneralesTitular />
            </TabPanel>
            <TabPanel value={tab} index={1} dir={theme.direction}>
                <Domicilios />
            </TabPanel>
            <TabPanel value={tab} index={2} dir={theme.direction}>
                <ActividadEconomica />
            </TabPanel>
        </Box>
    );
}

export default Titular;