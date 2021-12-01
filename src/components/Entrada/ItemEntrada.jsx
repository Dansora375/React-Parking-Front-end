import React from 'react'
import {Grid, Box, IconButton,FontAwesomeIcon} from '@mui/material';
import styled  from 'styled-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import ParkingCarTaken from '../icons/ParkingCarTaken'
import ParkingMotoTaken from '../icons/ParkingMotoTaken'
import EmptyParking from '../icons/EmptyParking'
import useMediaQuery from '@mui/material/useMediaQuery';
// import HoraEntrada from './HoraEntrada';
import ItemOptionEntrada from './ItemOptionsEntrada';


const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin-left: 20px;
margin-right: 20px;
padding-bottom: 20px;
`

const ContainerImg = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin: 15px;
`

function ItemEntrada(props) {

  const [EntradaTaken, setEntradaTaken]= React.useState("")

  React.useEffect(()=>{
    setEntradaTaken(typeEntradaTaken()) 
  },[])
  
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  
  // console.log(matchesMD)
  const entryTime = props.entryTime
  const plate = props.plate
  const vehicleType=props.vehicleType
  const isTaken =props.isTaken
  // const personType=props.personType

  // conditions
  
  const typeEntradaTaken= ()=>{ 
    // console.log(isTaken)
    // console.log(vehicleType)
    if(vehicleType=== "Carro" && isTaken ){
      return "Pkg car taken"
    }else if(vehicleType=== "Moto" && isTaken){
      return "Pkg motobike taken"
    }else if(vehicleType=== "Bicicleta" && isTaken) {
      return false
      // "Pkg bike taken"
    }else if(vehicleType=== "Others" && isTaken)
      return false
      // "Pkg Other taken"
    else{
      return false
    }
  }
  
  return (
    <>
      <Box 
      border={2}
      borderColor='primary.main'
      // un ejemplode matche en SX es el siguiente
      // sx={matchesLG?{ borderRadius:2, my:3 }:{ borderRadius:1, my:1 }}> 
      sx={{ borderRadius:2, my:3 }}> 
      <Grid 
        container
        justifyContent="space-around"
        alignItems="center">
        <Grid item xs={matchesLG?2.5:1.9}>
            <ContainerImg>
              { 
                EntradaTaken=== "Pkg car taken"? 
                <ParkingCarTaken color='#14FFEC'  height={ matchesLG?50:75} />:
                EntradaTaken === "Pkg motobike taken"?
                <ParkingMotoTaken  fill='#14FFEC' stroke='#14FFEC'  height={ matchesLG?50:75}/>: 
                <EmptyParking fill='#14FFEC' width={83} />
              }
            </ContainerImg>
        </Grid>      
        <Grid item xs={matchesLG?7.5:7.4}>
          <Grid 
            container
            justifyContent="center"
            alignItems="center">
            <Grid item xs={6}>
              <Container>
                <Box color='primary.main' m={2} sx={{fontSize: 12, fontWeight: '500',}}>
                  <b>HORA DE ENTRADA</b> 
                </Box>
                <Box color='tertiary.main' m={0.4} sx={{fontSize: 25, fontWeight: 'Bold'}}>
                  {entryTime}
                  lol
                </Box>
              </Container>
            </Grid>           
            <Grid item xs={6}>
              <Container>
                <Box color='primary.main' m={2} sx={{fontSize: 12, fontWeight: '500', textAlign:"center"}}>
                  <b>PLACA</b>
                </Box>
                <Box color='tertiary.main' m={0.4} sx={{fontSize: 25, fontWeight: 'Bold'}}>
                  {plate}
                  lol
                </Box>
              </Container>
            </Grid>      
          </Grid> 
        </Grid>      
        <Grid item xs={0}>
          <ItemOptionEntrada></ItemOptionEntrada>
        </Grid>      
      </Grid> 
      </Box> 
    </>
  )
}

export default ItemEntrada
