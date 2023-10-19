import React from 'react';
import Dialog from '@mui/material/Dialog';

const DialogRfc = (props) => {

    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
        </Dialog>
    )
}

export default DialogRfc;