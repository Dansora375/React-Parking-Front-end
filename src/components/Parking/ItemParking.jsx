import React from 'react'
import {Grid, Box} from '@mui/material';

function ItemParking() {
  return (
    <>
      <Box 
      border={2}
      borderColor='primary.main'>  
      <Grid 
        container
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Box 
          m={2}>
            Imagen
          </Box>
        </Grid>      
        <Grid item xs={4}>
          <Grid 
            container
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Box 
              m={3}> 
                ESTADO DE PARQUEADERO
              </Box>
              <Box 
              m={3}>
                VACIO
              </Box>
            </Grid>           
            <Grid item xs={4}>
               <Box>
                PARQUEADERO NUMERO
              </Box>
              <Box>
                A2
              </Box>
            </Grid>      
          </Grid> 
        </Grid>      
        <Grid item xs={4}>
        BOTON
        </Grid>      
      </Grid> 
      
      </Box> 
    </>
  )
}

export default ItemParking
