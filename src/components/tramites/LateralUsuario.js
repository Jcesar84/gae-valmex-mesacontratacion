import React from 'react'
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import './Styles.css';

const LateralUsuario = (props) => {

    // eslint-disable-next-line
    const [user, setUser] = React.useState(props.user);

    const navigate = useNavigate();

    const handleClickCerrarSesion = (event, param) => {
        if (param === 'close') {
            navigate("/")
        }
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blueGrey[500]),
        backgroundColor: blueGrey[500],
        '&:hover': {
            backgroundColor: blueGrey[700],
        },
    }));

    const buttons = [
        <ColorButton sx={{ marginTop: 20, marginBottom: 10 }} variant="contained" key="cerrarSession" onClick={event => handleClickCerrarSesion(event, 'close')} >Cerrar Sesion</ColorButton >,
    ];

    return (
        <div className='lateral-usuario'>
            <div>
                <label className={'lateral-titulo-label'}>Mesa de Contratacion</label>
            </div>
            <div className='lateral-center'>
                <AccountCircleIcon className='lateral-icon-user' />
            </div>
            <div className='lateral-center'>
                <span className={'custom-label-usuario'}>{user}</span>
            </div>
            <div className='lateral-center'>
                <Stack direction="row" sx={{ display: 'contents', boxShadow: 'none' }}>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="contained"
                        sx={{ boxShadow: 'none' }}
                    >
                        {buttons}
                    </ButtonGroup>
                </Stack>
            </div>
        </div>
    )
}

export default LateralUsuario;