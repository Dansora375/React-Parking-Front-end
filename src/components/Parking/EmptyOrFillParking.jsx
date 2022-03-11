  import React from 'react'
  import {Dialog,Fab, Button, Box, DialogContent, DialogActions,DialogContentText, Grid, TextField,FormControl,MenuItem,Select, InputLabel, FormHelperText, DialogTitle } from '@mui/material';
  import useMediaQuery from '@mui/material/useMediaQuery';
  import { useTheme } from '@mui/material/styles';
  import {useDispatch, useSelector} from 'react-redux'
  import WarningParking from '../icons/WarningParking'
  import * as dateFromUtil from '../../utils/DateNow'
  import {FillParkingAction} from '../../redux/Ducks/parkingDuck'


  function EmptyOrFillParking(props) {
    const dispatch= useDispatch()
    const [open, setOpen] = React.useState(false);
    const [date, setDate]=React.useState(dateFromUtil.dateNow)
    const [time, setTiem]=React.useState(dateFromUtil.timeNow)
  
    const theme = useTheme();
    const {children, optionName, idParking, ParkingType}= props
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [info, setInfo]= React.useState({})
    
    React.useEffect(() => {
      let Data=[]
      if(ParkingType==='Residente'){
        Data= ResiDataStore.find(item=>item._id===idParking)

      }else if(ParkingType==='Visitante') {
        Data=VisiDataStore.find(item=>item._id===idParking)
        
      }
      // console.log(Data)
      const info={
        IdNeighborhood: Data.neighborhood,
        HomeId: Data.home,
        IdParking: Data._id
      }
      setInfo(info)
        
    }, [])
    

    const ResiDataStore=useSelector(store=>store.Parkings.parkingsResi)
    const VisiDataStore=useSelector(store=>store.Parkings.parkingsVisi)

    const handleClose = () => {
      setOpen(false);
    };

    const handleFillPaking = () => {

      dispatch(FillParkingAction(info))
      setOpen(false);
    };
    const handleEmtyPaking = () => {

      // dispatch(FillParkingAction(info))
      setOpen(false);
    };

    const handleOpen= () => {
      setOpen(true);
      // dispatch(CreateParking(datos))
    };
    
    return (
      <>
        <Box onClick={handleOpen}>
        {optionName}
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
            <WarningParking fill='#14FFEC'/>
            </Box>
          </DialogTitle>
          <DialogContent>
              <Box  m={2} sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
              Esta seguro de que quiere {optionName==='Vaciar Parquedaero'? 'vaciar el parqueadero?':'llenar el parqueadero?'}
            </Box>
            <Grid container
            justifyContent="right"
            alignItems="center"
            spacing={2}>
              <Grid item rowSpacing={6} xs={6} sx={{fontSize:19,color:'tertiary.main'}} >
                <Box sx={{textAlign:'right'}} >
                fecha :
                </Box>
              </Grid>
              <Grid item rowSpacing={6} xs={6}>
              {date}
              </Grid>
            </Grid>
            <Grid container
            justifyContent="right"
            alignItems="center"
            spacing={2}>
              <Grid item rowSpacing={6} xs={6} sx={{fontSize:19,color:'tertiary.main'}} >
                <Box sx={{textAlign:'right'}} >
                Hora :
                </Box>
              </Grid>
              <Grid item rowSpacing={6} xs={5.7} ml={1.6}>
              {time}
              </Grid>
            </Grid>
              
          </DialogContent>
          <DialogActions sx={{'justify-content': 'space-evenly'}}>
            <Button onClick={optionName==='Vaciar Parquedaero'?handleEmtyPaking:handleFillPaking}>
              {children[0]}
            </Button>
            <Button autofocus onClick={handleClose}>
              {children[1]}
            </Button>
          </DialogActions>
        </Box>
        </Dialog>
      </>
    )
  }

  export default EmptyOrFillParking
