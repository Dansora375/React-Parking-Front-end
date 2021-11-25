/* eslint-disable no-unused-vars */
import React from 'react'
import {Grid, Box, IconButton} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled  from 'styled-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import ParkingCarTaken from '../icons/ParkingCarTaken'
import ParkingMotoTaken from '../icons/ParkingMotoTaken'
import EmptyParking from '../icons/EmptyParking'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


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

function ItemParking(props) {

  const [ParkignTaken, setParkignTaken]= React.useState("")

  React.useEffect(()=>{
     setParkignTaken(typeParkignTaken()) 
  },[])
  
  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  // console.log(matchesMD)
  const name=props.name
  const vehicleType=props.vehicleType
  const isTaken =props.isTaken
  // const personType=props.personType

  // conditions
  
  const typeParkignTaken= ()=>{ 
    console.log(isTaken)
    console.log(vehicleType)
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
                ParkignTaken=== "Pkg car taken"? 
                <ParkingCarTaken color='#14FFEC'  height={ matchesLG?50:75} />:
                ParkignTaken === "Pkg motobike taken"?
                <ParkingMotoTaken  fill='#14FFEC' stroke='#14FFEC'  height={ matchesLG?50:75}/>: 
                <EmptyParking fill='#14FFEC' width={83} />
              }
            </ContainerImg>
            {/* {console.log(ParkignTaken)} */}
        </Grid>      
        <Grid item xs={matchesLG?7.5:7.4}>
          <Grid 
            container
            justifyContent="center"
            alignItems="center">
            <Grid item xs={6}>
              <Container>
                <Box color='primary.main' m={2} sx={{fontSize: 12, fontWeight: '500',textAlign:"center"}}>
                  ESTADO PARQUEADERO 
                </Box>
                <Box color='tertiary.main' m={0.4} sx={{fontSize: 25, fontWeight: 'Bold'}}>
                  {
                    isTaken? "lleno":"vacio"
                  }
                </Box>
              </Container>
            </Grid>           
            <Grid item xs={6}>
              <Container>
                <Box color='primary.main' m={2} sx={{fontSize: 12, fontWeight: '500', textAlign:"center"}}>
                  PARQUEADERO NUMERO
                </Box>
                <Box color='tertiary.main' m={0.4} sx={{fontSize: 25, fontWeight: 'Bold'}}>
                  {name}
                </Box>
              </Container>
            </Grid>      
          </Grid> 
        </Grid>      
        <Grid item xs={0}>
          <IconButton aria-label="Example" size='large'>
            <FontAwesomeIcon icon={faEllipsisV} color='#14FFEC' />
          </IconButton>
        </Grid>      
      </Grid> 
      </Box> 
    </>
  )
}

export default ItemParking
