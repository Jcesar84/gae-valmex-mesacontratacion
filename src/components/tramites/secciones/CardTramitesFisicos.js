import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { styled } from '@mui/material/styles';

const CardTramitesFisicos = () => {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Card sx={{ minWidth: 275, textAlign: 'center', display: 'none' }}>
      <CardContent sx={{ alignContent: 'center' }}>
        <Typography variant="h5" component="div">
          Trámites físicos
        </Typography>
        <br />
        <Button component="label" variant="contained" startIcon={<FileUploadOutlinedIcon />} disabled>
          Adjuntar KYC (excel)
          <VisuallyHiddenInput type="file" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardTramitesFisicos