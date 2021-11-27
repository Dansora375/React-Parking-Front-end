import * as React from 'react';
import './Entrada.css';
import Box from '@mui/material/Box';
import IngresoParqueadero from '../../components/Entradas/IngresoParqueadero';

export function Entrada() {

    return (

      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
      
        <IngresoParqueadero/>
          
      </Box>

        
    );

}