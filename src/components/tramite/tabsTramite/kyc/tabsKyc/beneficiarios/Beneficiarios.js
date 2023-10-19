import React from 'react';
import Box from '@mui/material/Box';
import Beneficiario from './Beneficiario';
import Validacion from './Validacion';

const Beneficiarios = (props) => {

    const respBeneficiarios = [
        { id: 223, nombre: 'Jose jimenez lopez', mismoDomicilio: true },
        { id: 247, nombre: 'Norma Dominguez Rodriguez', mismoDomicilio: false}
    ];

    // eslint-disable-next-line
    const [id, setId] = React.useState(props.id);
    // eslint-disable-next-line
    const [user, setUser] = React.useState(props.user);
    // eslint-disable-next-line
    const [folio, setFolio] = React.useState(props.folio);

    return (
        <div>
            {
                respBeneficiarios.map(respBeneficiario => (
                    <Box key={respBeneficiario.id} sx={{ bgcolor: 'background.paper', width: '100%' }}>
                        <Beneficiario sd={respBeneficiario.id} mismoDomicilio={respBeneficiario.mismoDomicilio} respBeneficiario={respBeneficiario}  />
                    </Box>
                    
                ))
            }
            <Box sx={{ bgcolor: 'background.paper', width: '100%' }} >
                <Validacion respBeneficiarios={respBeneficiarios} />
            </Box>
        </div>

    )
}

export default Beneficiarios;