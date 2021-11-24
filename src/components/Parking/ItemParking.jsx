/* eslint-disable no-unused-vars */
import React from 'react'
import {Grid, Box, IconButton} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled  from 'styled-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
  

const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin-left: 20px;
margin-right: 20px;
padding-bottom: 20px;
`


function ItemParking(props) {

  const name=props.name
  const vehicleType=props.vehicleType
  const personType=props.personType
  const isTaken =props.isTaken
  return (
    <>
      <Box 
      border={2}
      borderColor='primary.main'
      sx={{ borderRadius:2, my:3 }}>  
      <Grid 
        container
        justifyContent="space-around"
        alignItems="center">
        <Grid item xs={0}>
          <Box m={2}>
            {

            }
          </Box>
        </Grid>      
        <Grid item xs={10}>
          <Grid 
            container
            justifyContent="center"
            alignItems="center">
            <Grid item xs={6}>
              <Container>
                <Box color='primary.main' m={2} sx={{fontSize: 12, fontWeight: '500'}}>
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
                <Box color='primary.main' m={2} sx={{fontSize: 12, fontWeight: '500'}}>
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
