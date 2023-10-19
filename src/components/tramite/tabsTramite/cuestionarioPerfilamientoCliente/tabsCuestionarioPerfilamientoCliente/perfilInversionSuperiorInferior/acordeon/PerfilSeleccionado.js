import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const PerfilSeleccionado = (props) => {

    // eslint-disable-next-line
    const [perfil, setPerfil] = React.useState(props.perfil);
    // eslint-disable-next-line
    const [tituloPerfil, setTituloPerfil] = React.useState(props.tituloPerfil);

    return (
        <Container component="main" maxWidth="sm" >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} id="perfil-perfil-seleccionado">{perfil}</FormLabel>
                        <br />
                        <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold' }} id="titulo-perfil-perfil-seleccionado">{tituloPerfil}</FormLabel>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PerfilSeleccionado;