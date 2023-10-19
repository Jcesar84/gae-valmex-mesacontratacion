import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CuestionarioPerfilamiento = () => {

    const instrumentos = [
        { text: 'Deuda Bancaria.' },
        { text: 'Deuda Gubernamental.' },
        { text: 'Fondos de inversión en deuda.' },
        { text: 'Acciones en CPO\'S.' },
        { text: 'ETF\'S y Tracks.' }
    ];

    const restricciones = [
        { text: 'No hay restricciones, salvo las que se derivan de mi perfil de inversión.' },
        { text: 'No deseo operar en mercadp de capitales.' },
        { text: 'No deseo operar en mercadp de derivados.' }
    ];

    return (
        <Container component="main" fullWidth sx={{ mb: 4 }}>
            <Grid container fullWidth spacing={3}>
                <Grid item fullWidth xs={12} sm={12}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} >
                            I. Conocimiento y experiencia del Cliente.
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            1) Mi rango de esdad es:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            18 a 29 años
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            2) Grado máximo de estudio:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            Medio Superior
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            3) La estategia de inversipo que <u>HE UTILIZADO</u> en mi portafolio de inversión ha sido:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            18 a 29 años
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            4) ¿Conoce usted las caracteristicas de los servicios de inversión?:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            Si
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            5) En cuales de los siguientes instrumentos ha invertido en los ultimos 2 años:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} md={3}>
                    <List dense={true} sx={{ paddingTop: 0, fontWeight: 'bold' }}>
                        {instrumentos.map(instrumento => {
                            return (
                                <ListItem sx={{ paddingLeft: 0, paddingTop: 0, fontWeight: 'bold' }}>
                                    <ListItemText sx={{ fontWeight: 'bold' }}
                                        primary={instrumento.text}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
                <Grid item fullWidth xs={12} sm={3} />
                <Grid item fullWidth xs={12} sm={3} />
            </Grid>
            <Grid container fullWidth spacing={3}>
                <Grid item fullWidth xs={12} sm={12}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} >
                            II. Situación y capacidad financiera.
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            6) Lo que deseo invertir representa de mi patrimonio financiero:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            Menos del 25%
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            7) Del patrimonio que deseo invertir:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            Es para mi jubilación
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            8) Estoy dispuesto a invertir en un instrumento financiero que contenga devivados
                            (estos pueden implicar compomisos financieros <u>adicionales a la inversión</u>):
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            Si estoy dispuesto
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3} />
                <Grid item fullWidth xs={12} sm={3} />
            </Grid>
            <Grid container fullWidth spacing={3}>
                <Grid item fullWidth xs={12} sm={12}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} >
                            III. Situación y capacidad financiera.
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            9) El objetivo de mi inversión actual podria ser:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            Mediano plazo. (ejemplo: remodelaciones, algun evento, viajes, automovil
                            o mobiliario) (1 a 3 años)
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            10) ¿En que plazo podria utilizar la mayor parte de los recursos de esta inversión?:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            De 1 a 4 años
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            11) Si pudiera elegir uno de los siguientes portafolios.
                            ¿Cual elegiria?:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={9}>
                    <TableContainer component={Paper}>
                        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>Se invirtio 100% en deuda</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">Inversión inicial.</TableCell>
                                    <TableCell align="center">$100.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Peor escenario.</TableCell>
                                    <TableCell align="center">$104.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Escenario esperado.</TableCell>
                                    <TableCell align="center">$104.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">Mejor escenario.</TableCell>
                                    <TableCell align="center">$104.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <FormControl fullWidth variant="standard" sx={{ maxWidth: 400 }}>
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            Nota: Calculado con un rendimiento esperado del 10% en renta variable con una variacion
                            +/- 20% y una tasa de 4% en deuda.
                            <br />
                            El ejemplo anterior no garantiza el rendimiento en su portafolio de inversión.
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            12) El porcentaje que deseo invertir en renta variable es:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            No deseo invertir en renta variable.
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            13) Estoy dispuesto a invertir en <u>una sola acción en directo</u>
                            (Nota: a mayor porcentaje por emisora menor diversificacion y mayor riego):
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            De 1% a 10%
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            13) El porcentaje que deseo invertir en valores corporativos
                            (ejemplo: Papel comercial, bonos y certificados bursátiles):
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            No deseo invertir en valores corporativos
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            14) Estoy dispuesto a invertir en valores corporativos
                            (ejemplo: Papel comercial, bonos y certificados bursátiles):
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            No estoy dispuesto
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} sm={3}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'left', fontWeight: 'bold' }} >
                            15) ¿Requiere restricciones adicionales a las que se derivan de su perfil de inversión:
                        </FormLabel>
                    </FormControl>
                </Grid>
                <Grid item fullWidth xs={12} md={3}>
                    <List dense={true} sx={{ paddingTop: 0, fontWeight: 'bold' }}>
                        {restricciones.map(restriccion => {
                            return (
                                <ListItem sx={{ paddingLeft: 0, paddingTop: 0, fontWeight: 'bold' }}>
                                    <ListItemText sx={{ fontWeight: 'bold' }}
                                        primary={restriccion.text}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
                <Grid item fullWidth xs={12} sm={3} />
                <Grid item fullWidth xs={12} sm={3} />
            </Grid>
        </Container >
    )
}

export default CuestionarioPerfilamiento;