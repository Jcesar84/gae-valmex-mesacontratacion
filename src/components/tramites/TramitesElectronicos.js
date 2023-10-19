import React from 'react';
import TextFolio from "./secciones/TextFolio";
import SelectUsuarioValidador from "./secciones/SelectUsuarioValidador";
import SelectPromotor from "./secciones/SelectPromotor";
import SelectEstatus from "./secciones/SelectEstatus";
import DateRangoFechas from "./secciones/DateRangoFechas";
// eslint-disable-next-line
import CardTramitesFisicos from './secciones/CardTramitesFisicos';
import TableTramites from './secciones/TableTramites';
import './Styles.css';

const TramitesElectronicos = (props) => {
    return (
        <div className="col-12 mt-3 mb-3">
            <div className="row col-12 ">
                <div className="custom-info">
                    <div className="custom-info-label">
                        Trámites Electrónicos
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className="col-12">
                    <div className="row col-12 mb-3">
                        <div className="col-3" >
                            <TextFolio />
                        </div>
                        <div className="col-3" >
                            <SelectUsuarioValidador />
                        </div>
                        <div className="col-3" >
                            <SelectPromotor />
                        </div>
                        <div className="col-3" >
                            <SelectEstatus />
                        </div>
                    </div>
                    <div className="row col-12 mb-3">
                        <div className="col-6" >
                            <DateRangoFechas />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row col-12'>
                <TableTramites id={props.id} user={props.user} />
            </div>
        </div >
    )
}

export default TramitesElectronicos