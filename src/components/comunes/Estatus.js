import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import OK from '../../assets/icons/estatus/ok.png';
import ERROR from '../../assets/icons/estatus/error.png';
import SI from '../../assets/icons/estatus/si.png';
import NO from '../../assets/icons/estatus/no.png';

const Estatus = (props) => {

  // eslint-disable-next-line
  const [estatusMostrar, setEstatusMostrar] = React.useState(props.estatusMostrar);
  // eslint-disable-next-line
  const [estatusLabel, setEstatusLabel] = React.useState(props.label);


  if (estatusMostrar === 'ok') {
    return (
      <TextField
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
              <img src={OK} alt={"OK"} />
            </InputAdornment>
          ),
        }}
        id="idEstatusMostrar"
        name="idEstatusMostrar"
        fullWidth
        label={estatusLabel}
        value={"OK"}
      />
    )
  }
  if (estatusMostrar === 'error') {
    return (
      <TextField
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
              <img src={ERROR} alt={"ERROR"} />
            </InputAdornment>
          ),
        }}
        id="idEstatusMostrar"
        name="idEstatusMostrar"
        fullWidth
        label={estatusLabel}
        value={"ERROR"}
      />
    )
  }
  if (estatusMostrar === 'si') {
    return (
      <TextField
        InputProps={{
          color: 'primary',
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <img src={SI} alt={"SI"} />
            </InputAdornment>
          ),
        }}
        id="idEstatusMostrar"
        name="idEstatusMostrar"
        fullWidth
        label={estatusLabel}
        value={estatusLabel}
      />
    )
  }
  if (estatusMostrar === 'no') {
    return (
      <TextField
        InputProps={{
          color: 'primary',
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <img src={NO} alt={"NO"} />
            </InputAdornment>
          ),
        }}
        id="idEstatusMostrar"
        name="idEstatusMostrar"
        fullWidth
        label={estatusLabel}
        value={estatusLabel}
      />
    )
  }
  if (estatusMostrar === 'ok-img') {
    return (
      <img src={OK} alt={"OK"} />
    )
  }
  if (estatusMostrar === 'error-img') {
    return (
      <img src={ERROR} alt={"ERROR"} />
    )
  }
  if (estatusMostrar === 'si-img') {
    return (
      <img src={SI} alt={"SI"} />
    )
  }
  if (estatusMostrar === 'no-img') {
    return (
      <img src={NO} alt={"NO"} />
    )
  }
}

export default Estatus;