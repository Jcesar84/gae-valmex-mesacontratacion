import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputAdornment from "@mui/material/InputAdornment";
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import logo from '../../../../../../../../assets/icons/MX.ico';
import Estatus from '../../../../../../../comunes/Estatus';
import RedesDominios from '../../../../../../../comunes/RedesDominios';

const NumeroTelefonico = () => {

  // eslint-disable-next-line
  const [estatusScrore, setEstatusScrore] = React.useState("ok");
  // eslint-disable-next-line
  const [labelScore, setLabelScore] = React.useState("Score");

  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}>Información del Número</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="telefono"
            name="telefono"
            fullWidth
            label="Número Teléfonico"
            value={"5516519435"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="telefonoValidacionAutomatica"
            name="telefonoValidacionAutomatica"
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
            id="telefonoScore"
            name="telefonoScore"
            fullWidth
            label="Score"
            value={"1/100"}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Estatus label={labelScore} estatusMostrar={estatusScrore} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <img src={logo} alt={"Valores Mexicanos"} />
                </InputAdornment>
              )
            }}
            id="telefonoPais"
            name="telefonoPais"
            fullWidth
            label="Pais"
            defaultValue="MX"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="telefonoValido"
            name="telefonoValido"
            fullWidth
            label="Valido"
            defaultValue="SI"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="telefonoTipo"
            name="telefonoTipo"
            fullWidth
            label="Tipo"
            defaultValue="MOBILE"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}>Plataformas con registro</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'facebook'} />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}>Plataformas sin registro</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'google'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'twitter'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'instagram'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'yahoo'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'whatsapp'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'telegram'} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RedesDominios redDominio={'viber'} />
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
                  <TableCell align="left">At least 2 online profiles were found</TableCell>
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

export default NumeroTelefonico;