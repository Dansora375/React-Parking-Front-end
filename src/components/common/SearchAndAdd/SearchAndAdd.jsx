import React from 'react'
import {Grid, Box, Fab, Menu, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';




function SearchAndAdd() {
  return (
    <>
      <Grid container 
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={0} >
        <Grid item xs={8.8}>
          <Fab aria-label="add" size="small" id="boton">
                <AddIcon   />
            </Fab>
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
