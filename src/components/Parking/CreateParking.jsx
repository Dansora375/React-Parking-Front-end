import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import {Dialog,Fab, Button, Box, DialogContent, DialogActions,DialogContentText, Grid, TextField,FormControl,MenuItem,Select, InputLabel, FormHelperText } from '@mui/material';
import ImgParking from '../icons/IconCreateParking'
import {useDispatch, useSelector} from 'react-redux'
import {CreateParking} from '../../redux/Ducks/parkingDuck'


export default function CreateParkingDialog(props) {
  const dispatch= useDispatch()
  const [open, setOpen] = React.useState(false);
  // const [vehicleType, setVehicleType] = React.useState(' ');
  // const [personType, setPersonType] = React.useState(' ');
  // const [parkingName, setParkingName] = React.useState(' ');

  // el id del nieghborhood se obtendra del sessionStorage
  // por ahora sera id estatico
  
const [datos, setDatos]=React.useState({
    vehicleType:' ',
    personType:' ',
    parkingName:' ',
    IdNeighborhood:'619cc7d78011c2969719fedd'

  })

  const {children}= props
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDatos = (event) => {
    setDatos({...datos, [event.target.name]: event.target.value});
    // console.log(vehicleType)
  };

  const handleCreateParking = () => {
    setOpen(false);
    dispatch(CreateParking(datos))
  };

  const vehicleOptios=[
    {type: 'Moto'},
    {type: 'Carro'},
    {type: 'Bicicleta'},
    {type: 'Others'}
  ]
  const personOptios=[
    {type: 'Residente'},
    {type: 'Visitante'},
    // {type: 'Otros'}
  ]
  // console.log(children)
  return (
    <div>
      <Fab aria-label="add" size="small" id="boton" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog">
      <Box sx={{
        height: fullScreen?950:"auto",  border:1, borderColor:'tertiary.main'}}>
        <DialogTitle  sx={{alignContent:"center"}} >
          <Box  m={2} color='tertiary.main'sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
            Agregar nuevo parqueadero
          </Box>
        </DialogTitle>
        <DialogContent>
            <Box  m={2} sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
            <ImgParking></ImgParking>
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
                onChange={handleDatos}
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
              <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel >Required</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Required *"
                  defaultValue=' '
                  onChange={handleDatos}
                  size='small'
                  name='vehicleType'
                  >
                    
                  {
                    vehicleOptios.map((item, index)=>(
                      <MenuItem dense  value={item.type} >{item.type}  </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
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
              <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel >Required</InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  label="Required *"
                  defaultValue=' '
                  name='personType'
                  onChange={handleDatos}
                  size='small'>
                  {
                    personOptios.map(item=>(
                      <MenuItem dense  value={item.type} >{item.type}  </MenuItem>
                    ))
                  }
                </Select>
                </FormControl>
            </Grid>
            </Grid>
        </DialogContent>
        <DialogActions sx={{'justify-content': 'space-evenly'}}>
          <Button onClick={handleClose}>
             {children[0]}
          </Button>
          <Button autofocus onClick={handleCreateParking}>
             {children[1]}
          </Button>
        </DialogActions>
      </Box>
      </Dialog>
    </div>

  );
}