import * as React from 'react';
import './Entrada.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IngresoParqueadero from '../../components/Entradas/IngresoParqueadero';
import InformacionEntrada from '../../components/Entradas/InformacionEntrada';

export function Entrada() {

    return (

      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Grid container spacing={2}>
              
              <Grid item xs={1} className="plus">
                <IngresoParqueadero/>
              </Grid>
              <Grid item xs={5}>
                  <b className="texto-creacion">Agregar ingreso</b>
              </Grid>
              <Grid item xs={1} className="plus">
                  <InformacionEntrada/>
              </Grid>
              <Grid item xs={5}>
                  <b className="texto-creacion">Informacion</b>
              </Grid>
              
          </Grid>
      </Box>

        
    );

}