import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const SerivicioInversion = (props) => {
    
    // eslint-disable-next-line
    const [serivicioInversion, setSerivicioInversion] = React.useState(props.serivicioInversion);

    return (
        <Container component="main" maxWidth="sm" >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth variant="standard">
                        <FormLabel sx={{ textAlign: 'center', fontWeight: 'bold'}} id="serivicio-inversion">{serivicioInversion}</FormLabel>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SerivicioInversion;