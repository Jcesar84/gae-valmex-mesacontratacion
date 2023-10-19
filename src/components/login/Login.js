import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../../assets/logos/logo_valores_h_small.png';
import * as Constants from '../../utils/Constants';
import './Styles.css';

const Login = () => {

  const [usuario, setUsuario] = useState('')
  const [usuarioError, setUsuarioError] = useState(false)
  const [usuarioErrorText, setUsuarioErrorText] = React.useState('');
  const [contrasena, setContrasena] = useState('')
  const [contrasenaError, setContrasenaError] = useState(false)
  const [contrasenaErrorText, setContrasenaErrorText] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const onButtonClick = () => {
    setUsuarioErrorText('')
    setUsuarioError(false);
    setContrasenaErrorText('')
    setContrasenaError(false);
    if ("" === usuario) {
      setUsuarioError(true);
      setUsuarioErrorText("Por favor introduzca Usuario");
      return;
    }
    if ("" === contrasena) {
      setContrasenaError(true);
      setContrasenaErrorText("Por favor introduzca Contraseña")
      return;
    }
    navigate("/landingPage/" + 12345 + "/" + usuario);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={"contenedor"}>
      <div className={"principal"}>
            <div className={"center_content"}>
                <div className={"principal_label"}>
                    Mesa de Contratación
                </div>
            </div>
        </div>
      <div className={"sidebar"}>
        <div>
          <img className={"img_login_custom"} src={logo} alt={"Valores Mexicanos"} />
        </div>
        <div className={"login_custom"}>
          <div className={"login_group_custom"}>
            <FormControl variant="outlined" error={usuarioError}>
              <TextField
                id={"usuario"}
                value={usuario}
                label={"Usuario"}
                onChange={ev => setUsuario(ev.target.value)}
                autoComplete={"off"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  )
                }}
              />
              <FormHelperText id="error-usuario">{usuarioErrorText}</FormHelperText>
            </FormControl>
          </div>
          <div className={"login_group_custom"}>
            <FormControl variant="outlined" error={contrasenaError}>
              <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
              <OutlinedInput
                id={"contrasena"}
                value={contrasena}
                label={"Contraseña"}
                onChange={ev => setContrasena(ev.target.value)}
                autoComplete={"off"}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText id="0error-contrasena">{contrasenaErrorText}</FormHelperText>
            </FormControl>
          </div>
          <div className={"login_group_custom"}>
            <input
              className={"button_custom"}
              type={"button"}
              onClick={onButtonClick}
              value={"Entrar"} />
          </div>
        </div>
      </div>
      <div className={"fixed-bottom bg-footer-custom"}>
        <div className={"row"}>
          <p className={"footer-text"}>&copy;Copyright 2023 Mesa de Contratación - Versión {Constants.VERSION} </p>
        </div>
      </div>
    </div>
  )
}

export default Login;