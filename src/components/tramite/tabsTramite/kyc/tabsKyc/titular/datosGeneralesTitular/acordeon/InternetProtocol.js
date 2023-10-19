import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Estatus from '../../../../../../../comunes/Estatus';

const InternetProtocol = () => {

  // eslint-disable-next-line
  const [estatusScrore, setEstatusScrore] = React.useState("ok");
  // eslint-disable-next-line
  const [labelScore, setLabelScore] = React.useState("Score");

  const [openSpam, setOpenSpam] = React.useState(true);

  const handleClickSpam = () => {
    setOpenSpam(!openSpam);
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}>Información de la IP</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="ip"
            name="ip"
            fullWidth
            label="Internet Protocol"
            value={"187.1.3.2"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ipValidacionAutomatica"
            name="ipValidacionAutomatica"
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
        <Grid item xs={12} sm={10}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="ipScore"
            name="ipScore"
            fullWidth
            label="Score"
            value={"1/100"}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Estatus label={labelScore} estatusMostrar={estatusScrore} />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">Ubicación</TableCell>
                  <TableCell align="right">Mexico City</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Pais</TableCell>
                  <TableCell align="right">MX</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Tipo de IP</TableCell>
                  <TableCell align="right">ISP</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">IP Mobil</TableCell>
                  <TableCell align="right">false</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">PSI</TableCell>
                  <TableCell align="right">WANTEL TECNOLOGIA LTDA. EPP</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Puertos Abiertos</TableCell>
                  <TableCell align="right">none</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">TOR</TableCell>
                  <TableCell align="right">false</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">VPN</TableCell>
                  <TableCell align="right">false</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Proxy Publico</TableCell>
                  <TableCell align="right">false</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Proxy Web</TableCell>
                  <TableCell align="right">false</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12}>
        <List
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClickSpam} sx={{ width: '100%', bgcolor: '#e5e5e5' }}>
              <ListItemText primary={"Listas negras de SPAM 1"} />
              {openSpam ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSpam} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Spamhaus ZEM" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}>Reglas Aplicadas</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">IP addres was found on 1 spam blacklist</TableCell>
                  <TableCell align="right">0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

export default InternetProtocol;