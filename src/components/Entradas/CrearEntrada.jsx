import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import {Dialog,Fab, Button, Box, DialogContent, DialogActions,DialogContentText, Grid, TextField } from '@mui/material';
import ImgParking from '../icons/IconCreateParking'



// const ModalContainer = styled.div`
//     /* width: 450px; */
    
//     /* position: relative; */
//     border-radius: 4px;
//     /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 15px 0px; */
//     padding: 20px;
//     text-align: center;
//     border: 1px solid;
//     border-color: white;
// `;
const sombrita ='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'

export default function CreateEntradaDialog(props) {
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
  console.log(children)
  return (
    <div>
      <Fab aria-label="add" size="small" id="boton" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog"
        sx={{boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}
        >
        
      <Box sx={{border:1, borderColor:'tertiary.main'}}>
        <DialogTitle  sx={{alignContent:"center"}} >
          <Box  m={2} color='tertiary.main'sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
            <b>INGRESO PARQUEADERO</b>
          </Box>
          
        </DialogTitle>
        <DialogContent>
            <Box  m={2} sx={{fontSize: 28, fontWeight: '500',textAlign:"center"}}>
          </Box>
          <Grid container
          justifyContent="right"
          alignItems="center">
            <Grid item>
              Nombre parquedero :
            </Grid>
            <Grid item>
            </Grid>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue=" "
              />
            </Grid>
            <Grid container
          justifyContent="right"
          alignItems="center">

            <Grid item>
              {/* VEHICULO:  */}
              
            </Grid>
            <Grid item>


            </Grid>

            </Grid>
            <Grid container
          justifyContent="right"
          alignItems="center">


            <Grid item>
              {/* TIPO :  */}
              
            </Grid>
            <Grid item>


            </Grid>
            </Grid>



          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
             {children[0]}
          </Button>
          <Button autofocus onClick={handleClose}>
             {children[1]}
          </Button>
        </DialogActions>
      </Box>
      
      </Dialog>
    </div>

  );
}