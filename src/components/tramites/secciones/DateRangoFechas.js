import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';


const DateRangoFechas = () => {

    const [valueDe, setValueDe] = useState(null);
    const [valueHasta, setValueHasta] = useState(null);

    const handleChangeDe = (event) => {
        setValueDe(dayjs(event));
    };

    const handleChangeHasta = (event) => {
        setValueHasta(dayjs(event));
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DemoItem label="Rango de Fecha De" >
                        <DatePicker
                            label="De"
                            disableFuture
                            value={valueDe}
                            onChange={handleChangeDe}
                            referenceDate={dayjs()}
                        />
                    </DemoItem>
                    <DemoItem label="Rango de Fecha Hasta" >
                        <DatePicker
                            label="Hasta"
                            disableFuture
                            value={valueHasta}
                            onChange={handleChangeHasta}
                            referenceDate={dayjs()}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </Box>
    )
}

export default DateRangoFechas;