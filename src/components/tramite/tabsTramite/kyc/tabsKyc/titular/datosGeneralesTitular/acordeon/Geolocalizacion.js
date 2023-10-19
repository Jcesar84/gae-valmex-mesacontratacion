import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';
import * as Constants from '../../../../../../../../utils/Constants';

const Geolocalizacion = (props) => {

  // eslint-disable-next-line
  const [latitud, setLatitud] = React.useState(props.latitud);
  // eslint-disable-next-line
  const [longitud, setLongitud] = React.useState(props.longitud);


  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: latitud, lng: longitud },
      map,
      title: 'Ubicación'
    });
    return marker;
  };

  return (
    <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}> <b>latitud:</b> {latitud}</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography fontSize={14}> <b>longitud:</b> {longitud}</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: Constants.keyMaps }}
              defaultCenter={{ lat: latitud, lng: longitud }}
              defaultZoom={16}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
            </GoogleMapReact>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Geolocalizacion;