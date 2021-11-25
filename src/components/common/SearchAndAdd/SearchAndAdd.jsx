import React from 'react'
import {Grid, Box, Fab, TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CreateParkingDialog from '../../Parking/CreateParking'
import ConfirmButton  from '../ConfirmButton'; 
import CancelButton  from '../CancelButton'; 



function SearchAndAdd(props) {

  const TextCreatePkngButtonConf='Confirmar'
  const TextCreatePkngButtonCan='Cancelar'
  return (
    <>
      <Grid container 
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={0} >
        <Grid item xs={8.8}>      
          <CreateParkingDialog>
            <CancelButton text={TextCreatePkngButtonCan} />
            <ConfirmButton text={TextCreatePkngButtonConf} />
          </CreateParkingDialog>
        </Grid>
        <Grid item xs={2}>
          <Box className='input-container'> 
            <TextField id="standard-basic" label="Filtrar..." variant="standard" 
            size="large"/>
          </Box>               
            </Grid>
             <Grid item xs={1}>
              <IconButton aria-label="search"> 
              <SearchIcon fontSize="large" sx={{ color:'primary.main'}}/>  
              </IconButton>
            </Grid>
    </Grid>

    </>
  )
}

export default SearchAndAdd
