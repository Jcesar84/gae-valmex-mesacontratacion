import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { green, red } from '@mui/material/colors';

const Validacion = () => {

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">
                    <FormControl>
                      <FormLabel id="revisionDatosGenerales">Revisión</FormLabel>
                      <RadioGroup
                        aria-labelledby="revisionDatosGenerales"
                        name="revision-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="exitosa" control={
                          <Radio sx={{
                            color: green[800],
                            '&.Mui-checked': {
                              color: green[600],
                            },
                          }} />
                        } label="Exitosa" />
                        <FormControlLabel value="noExitosa" control={
                          <Radio sx={{
                            color: red[800],
                            '&.Mui-checked': {
                              color: red[600],
                            },
                          }} />
                        } label="No Exitosa" />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                  <TableCell align="left">
                    <List>
                      <ListItem disablePadding>
                          <ListItemText primary="Cuestionario de Perfilamiento" />
                      </ListItem>
                    </List>
                  </TableCell>
                  <TableCell align="left">
                    <TextField fullWidth id="outlined-basic" label="Comentarios" />
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained">Guardar</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Validacion;