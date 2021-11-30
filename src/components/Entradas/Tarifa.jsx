import React from 'react'
import Modal1 from '../Hogares/Modal1'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import Box from '@mui/material/Button'

export default function Tarifa() {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    
    return (
        <div>
            <Fab aria-label="add" size="small" id="boton"
                onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                <AddIcon />
            </Fab>
       
    <Modal1 estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1} >
        
                
                <Grid item xs={12} sx={{textAlign:'center',background:'#BCFFFA',color: '#323232', borderRadius:'5px'}}>
                  
                <h2 sx={{textAlign:'cnter'}}>Tarifa Parqueo </h2>
                </Grid>
                 <br />
                <Grid container spacing={2}sx={{backgroundColor:'#BCFFFA', color:'#323232',borderRadius:'5px'}}>  
                    <Grid item xs={5} sx={{textAlign: 'left'}}>
                        <h3>Propietario:</h3>
                        
                    </Grid>
                    <Grid item xs={5} sx={{textAlign: 'center'}}>
                        <b>Ricardo</b>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <h3>Placa:</h3>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'center'}}>
                        <b>HGX-234</b>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <h3>Hora de Ingreso:</h3>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'center'}}>
                        <b>18:52 23/10/2021</b>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <h3>Hora de salida:</h3>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'center'}}>
                        <b>20:52 23/10/2021</b>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                    <Button variant="contained" sx={{background:'#323232', color: '#BCFFFA'}}>Calcular tarifa</Button>
                        
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <TextField sx={{backgroundColor:'#BCFFFA', color:'#323232', float:'center'}} value="$ 3000"></TextField>
                    </Grid>
                    </Grid>
                 </Modal1>
             </div>
    )
}


