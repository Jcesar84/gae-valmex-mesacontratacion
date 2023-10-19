import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LandingTramites from '../tramites/LandingTramites';
import logo from '../../assets/logos/logo_valores_h_small.png';
import * as Constants from '../../utils/Constants';
import './Styles.css';

const LandingPage = () => {

  const {id, user} = useParams();
  
  // eslint-disable-next-line
  const [notificacion, setNotificacion] = useState('0');

  return (
    <div className={"container-fluid"}>
      <div className={"wrapper"}>
        <header>
          <div className={"row bg-header-top-custom"}>
            <div className={"col-9"}>
            </div>
            <div className={"col-1 custom-align-right"}>
              <Badge badgeContent={notificacion} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </div>
            <div className={"col-2"}>
              <div className={"custom-logo-right"}>
                <img className={"custom-logo-small"} src={logo} alt={"Valores Mexicanos"} />
              </div>
            </div>
          </div>
        </header >
        <main id={"main"}>
          <LandingTramites id={id} user={user} />
        </main>
        <footer className={"fixed-bottom bg-footer-custom"}>
          <div className={"row justify-content-center"}>
            <p className={"footer-text"}>&copy;Copyright 2023 Mesa de Contratación - Versión {Constants.VERSION}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage;