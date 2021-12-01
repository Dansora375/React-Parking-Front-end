import React from 'react'
import {Grid, Box, DialogContent, Dialog, DialogTitle, TextField, DialogActions, Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import MotoInfoParking from '../icons/MotoInfoParking'
import CarInfoParking from '../icons/CarInfoParking'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useDispatch, useSelector} from 'react-redux' 
import {getMoreInfoPkngVisiAction} from '../../redux/Ducks/parkingDuck'
import {getMoreInfoPkngResiAction} from '../../redux/Ducks/parkingDuck'



function MoreInfoParking(props) {
  const dispatch= useDispatch()
  const [open, setOpen] = React.useState(false);
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [datosResi, setDatosResi]=React.useState([
    {key:'Nombre',value:'No establecido/a' },
    {key:'C.C', value:'No establecido/a'},
    {key:'Telefono',value:'No establecido/a' },
    {key:'Placa',value:'No establecido/a' },
    {key:'Marca',value:'No establecido/a' },
    {key:'Color', value:'No establecido/a'},
    {key:'Hora entrada',value:'No establecido/a'},
    {key:'Hora salida', value:'No establecido/a'},
    {key:'Grupo', value:'No establecido/a'},
    {key:'Apartamento', value:'No establecido/a'},
    {key:'Parqueadero', value:'No establecido/a'},
    {key:'Datos extra',value:'No establecido/a' }, 
  ])

  const [datosVisi, setDatosVisi]=React.useState([
    {key:'Nombre',value:'No establecido/a' },
    {key:'C.C', value:'No establecido/a'},
    {key:'Placa',value:'No establecido/a' },
    {key:'Hora entrada', value:'No establecido/a'},
    {key:'Grupo', value:'No establecido/a'},
    {key:'Apartamento',value:'No establecido/a' },
    {key:'Parqueadero', value:'No establecido/a'},
    {key:'Datos extra', value:'No establecido/a'}, 
  ])

  const {children, ParkingType, idParking}= props

  const handleOpenAndGet = () => {
    setOpen(true);
    if(ParkingType==='Residente'){
      const  dataArray=[]
      // console.log(dataArray)
      if(ParkingResi.home){

          dataArray[9]=ParkingResi.home.name

          if(ParkingResi.home.owner){
            dataArray[0]=ParkingResi.home.owner.name
            dataArray[1]=ParkingResi.home.owner.identification
            dataArray[2]=ParkingResi.home.owner.telephone
          }
          if(ParkingResi.home.group){
              dataArray[8]=ParkingResi.home.group.name
              
          }
      }
      if(ParkingResi.vehicle){
          dataArray[3]=ParkingResi.vehicle.plate
          dataArray[4]=ParkingResi.vehicle.carBrand
          dataArray[5]=ParkingResi.vehicle.color
          dataArray[11]=ParkingResi.vehicle.extra
        
      }
      
      if(ParkingResi){
          dataArray[6]=ParkingResi.lastEntryTime
          dataArray[7]=ParkingResi.lastExitTime
          dataArray[10]=ParkingResi.name
      }

          const DatosResi2=JSON.parse(JSON.stringify(datosResi))
          // console.log(dataArray)
      
          for(const index in DatosResi2){
            if(dataArray[index]){

              DatosResi2[index].value=dataArray[index]
              // DatosResi2[index].value='No establecido/a'
            }else if (dataArray[index]===null ||  typeof empty) {
              continue
            }

          }
          setDatosResi(DatosResi2)
          // console.log(datosResi)
    }else if(ParkingType==='Visitante'){
      const dataArray=[]
      // console.log(dataArray)
      if(ParkingVisi.idLastEntryVisitant){
       dataArray[0]=ParkingVisi.idLastEntryVisitant.name
       dataArray[1]=ParkingVisi.idLastEntryVisitant.identification
       dataArray[2]=ParkingVisi.idLastEntryVisitant.plate
       dataArray[3]=ParkingVisi.idLastEntryVisitant.entryTyme
       dataArray[4]=ParkingVisi.idLastEntryVisitant.group
       dataArray[5]=ParkingVisi.idLastEntryVisitant.homeName
       dataArray[7]=ParkingVisi.idLastEntryVisitant.extra
      }
      
        dataArray[6]=ParkingVisi.name
      

      const DatosVisi2=JSON.parse(JSON.stringify(datosVisi))
      for(const index in DatosVisi2){
        if(dataArray[index]){

          DatosVisi2[index].value=dataArray[index]
          // DatosResi2[index].value='No establecido/a'
        }else if (dataArray[index]===null ||  typeof empty) {
          continue
        }

      }
      setDatosVisi(DatosVisi2)
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  
  // console.log(ParkingType)
  // console.log(idParking)

  React.useEffect(()=>{
    
    if(ParkingType==='Residente'){
      dispatch(getMoreInfoPkngResiAction(idParking))

    }else if(ParkingType==='Visitante') {
      dispatch(getMoreInfoPkngVisiAction(idParking))
      
    }
  },[])
  
  const ParkingResi=useSelector(store=>store.Parkings.parkingsResiMoreInfo)
  const ParkingVisi=useSelector(store=>store.Parkings.parkingsVisiMoreInfo)
  
 
  

  
  return (
    <>
    <Box onClick={handleOpenAndGet}>
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
            
            {
              

            }
            Informacion residente
          </Box>
        </DialogTitle>
        <DialogContent>
            <Box  m={2} sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
            <CarInfoParking></CarInfoParking>
          </Box>


          {
            ParkingType==='Residente'?
            datosResi.map(item=>(
              <Grid container
              justifyContent="right"
              alignItems="center"
              spacing={2}
              key={idParking}>
              <Grid item rowSpacing={6} xs={6} sx={{fontSize:19,color:'tertiary.main'}}  >
                <Box m={1} sx={{textAlign:'right'}} >
                {item.key} :
                </Box>
              </Grid>
              <Grid item rowSpacing={6} xs={6} >
                {item.value}
              </Grid>
              </Grid>
              )):
            datosVisi.map(item=>(
              <Grid container
              justifyContent="right"
              alignItems="center"
              spacing={2}>
              <Grid item rowSpacing={6} xs={6} sx={{fontSize:19,color:'tertiary.main'}} >
                <Box m={1} sx={{textAlign:'right'}} >
                {item.key} :
                </Box>
              </Grid>
              <Grid item rowSpacing={6} xs={6}>
                {item.value}
              </Grid>
              </Grid>
            ))

          }
            {/* <Grid 
            container
            justifyContent="right"
            alignItems="center">
            <Grid item rowSpacing={6} sx={{fontSize:19,color:'tertiary.main'}}  xs={6} >
              <Box m={1} sx={{textAlign:'right'}} >
              Vehiculo :
              </Box>
            </Grid>
            <Grid item rowSpacing={6}  xs={6} >
              
            </Grid>
            </Grid> */}
            
        </DialogContent>
        <DialogActions alignItems="center" sx={{'justify-content': 'center'}}>
          <Box sx={{textAlign:'center', widht:'full widht' }}>
          <Button onClick={handleClose}  >
             {children}
          </Button>
          </Box>
        </DialogActions>
      </Box>
      </Dialog>
    </>
  )
}

export default MoreInfoParking
