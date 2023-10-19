import React from 'react';
import LateralUsuario from './LateralUsuario';
import TramitesElectronicos from './TramitesElectronicos';

function LandingTramites(props) {
  return (
    <div className='row'>
      <div className='col-2'>
        <LateralUsuario id={props.id} user={props.user} />
      </div>
      <div className='col-10'>
        <TramitesElectronicos id={props.id} user={props.user} />
      </div>
    </div>
  )
}

export default LandingTramites;