import React from 'react';
import Titular from './titular/Titular';
import Beneficiarios from './beneficiarios/Beneficiarios';

const TabsKyc = (props) => {

  // eslint-disable-next-line
  const [id, setId] = React.useState(props.id);
  // eslint-disable-next-line
  const [user, setUser] = React.useState(props.user);
  // eslint-disable-next-line
  const [folio, setFolio] = React.useState(props.folio);
  // eslint-disable-next-line
  const [titular, setTitular] = React.useState(props.titular);

  if (props.seccion === 'titular') {
    return (
      <Titular id={id} user={user} folio={folio} titular={titular} />
    )
  }

  if (props.seccion === 'beneficiarios') {
      return (
        <Beneficiarios id={id} user={user} folio={folio} />
      )
  }

}

export default TabsKyc;