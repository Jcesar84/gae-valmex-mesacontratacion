import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Estatus from '../../../../../../../comunes/Estatus';
import RedesDominios from '../../../../../../../comunes/RedesDominios';

const CorreoElectronico = () => {

  // eslint-disable-next-line
  const [estatusScrore, setEstatusScrore] = React.useState("ok");
  // eslint-disable-next-line
  const [labelScore, setLabelScore] = React.useState("Score");

  const [openBreach, setOpenBreach] = React.useState(true);

  const handleClickBreach = () => {
    setOpenBreach(!openBreach);
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}>Información del Correo</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="correo"
            name="correo"
            fullWidth
            label="Correo Electónico"
            value={"drako_cesar@hotmail.com"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="correoValidacionAutomatica"
            name="correoValidacionAutomatica"
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
            id="correoScore"
            name="correoScore"
            fullWidth
            label="Score"
            value={"1/100"}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Estatus label={labelScore} estatusMostrar={estatusScrore} />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ mt: 1 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">Deliverable</TableCell>
                  <TableCell align="left">Yes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ mt: 1 }} >
          <List
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClickBreach} sx={{ width: '100%', bgcolor: '#e5e5e5' }}>
              <ListItemText primary={"Data breaches 2"} />
              {openBreach ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openBreach} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="000webhost" secondary="000webhost.com" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="500px" secondary="500px.com" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ mb: 2 }} >
          <Typography fontSize={14}>Plataformas con registro</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'google'} />
        </Grid>
        <Grid item xs={12} sm={12} sx={{ mb: 2 }} >
          <Typography fontSize={14}>Plataformas sin registro</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'apple'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'ebay'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'facebook'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'flickr'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'foursquare'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'github'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'gravatar'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'instagram'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'lastfm'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'linkedin'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'microsoft'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'myspace'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'pinterest'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'skype'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'spotify'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'tumblr'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'twitter'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'vimeo'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'weibo'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'yahoo'} />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}>Dominio</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Estatus label={'CUSTOM'} estatusMostrar={'si'} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Estatus label={'FREE'} estatusMostrar={'no'} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Estatus label={'DISPOSABLE'} estatusMostrar={'no'} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">Registered</TableCell>
                  <TableCell align="left">true</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Creation Date</TableCell>
                  <TableCell align="left">1993-07-11 16:15:54</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Update Date</TableCell>
                  <TableCell align="left">2022-01-01 15:15:15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Expire Date</TableCell>
                  <TableCell align="left">2023-12-01 15:15:15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Register Name</TableCell>
                  <TableCell align="left">MarkMonitor  Inc.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">DMARC Enforred</TableCell>
                  <TableCell align="left">true</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">SPF Strict</TableCell>
                  <TableCell align="left">true</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Valid MX</TableCell>
                  <TableCell align="left">true</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Acept All</TableCell>
                  <TableCell align="left">true</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Suspicious TLD</TableCell>
                  <TableCell align="left">False</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
              <TableRow>
                  <TableCell align="left">Domain is a free provider. At least 2 online´profiles
                  were found. It was involved in at least a data breach</TableCell>
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

export default CorreoElectronico;