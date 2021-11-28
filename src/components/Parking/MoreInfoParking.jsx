import React from 'react'
import {Grid, Box, DialogContent, Dialog, DialogTitle, TextField, DialogActions, Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import MotoInfoParking from '../icons/MotoInfoParking'
import CarInfoParking from '../icons/CarInfoParking'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useDispatch, useSelector} from 'react-redux'



function MoreInfoParking(props) {
  const [open, setOpen] = React.useState(false);
  
  const {children}= props

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleDatos = (event) => {

  //   // console.log(vehicleType)
  // };

  const handleCreateParking = () => {
    setOpen(false);
    
  };
  return (
    <>
    <Box onClick={handleClickOpen}>
      Mas informacion
    </Box>
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog">
      <Box sx={{
        height: fullScreen?950:"auto",  border:1, borderColor:'tertiary.main'}}>
        <DialogTitle  sx={{alignContent:"center"}} >
          <Box  m={2} color='tertiary.main'sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
            Informacion residente
          </Box>
        </DialogTitle>
        <DialogContent>
            <Box  m={2} sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
            <CarInfoParking></CarInfoParking>
          </Box>
          <Grid container
          justifyContent="right"
          alignItems="center"
          spacing={2}>
            <Grid item rowSpacing={6} xs={6} sx={{fontSize:19,color:'tertiary.main'}} >
              <Box sx={{textAlign:'right'}} >
              Nombre parquedero :
              </Box>
            </Grid>
            <Grid item rowSpacing={6} xs={6}>
              <TextField
                required
                label="Required"
                defaultValue=" "
                size="small"
                name='parkingName'
                // onChange={handleDatos}
                />
            </Grid>
            </Grid>
            <Grid 
            container
            justifyContent="right"
            alignItems="center">
            <Grid item rowSpacing={6} sx={{fontSize:19,color:'tertiary.main'}}  xs={6} >
              <Box sx={{textAlign:'right'}} >
              Vehiculo :
              </Box>
            </Grid>
            <Grid item rowSpacing={6}  xs={6} >
              
            </Grid>
            </Grid>
            <Grid 
            container
            justifyContent="right"
            alignItems="center">
            <Grid item rowSpacing={6} sx={{fontSize:19,color:'tertiary.main'}}  xs={6} >
              <Box sx={{textAlign:'right'}} >
              Tipo :
              </Box>
            </Grid>
            <Grid item rowSpacing={6}  xs={6} >
              
            </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
             {children[0]}
          </Button>
          <Button autofocus onClick={handleCreateParking}>
             {children[1]}
          </Button>
        </DialogActions>
      </Box>
      </Dialog>
    </>
  )
}

export default MoreInfoParking
