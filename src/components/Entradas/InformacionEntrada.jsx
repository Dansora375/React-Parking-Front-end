import React from 'react'
import Modal1 from '../Hogares/Modal1'
import Grid from '@mui/material/Grid';
import {useState} from 'react';

export default function InformacionEntrada() {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    
    return (
        <div>
            <div
                onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                    Mas informacion 
            </div>
       
    <Modal1 estado = {estadoModal1} cambiarEstado = {cambiarEstadoModal1} funcion= {cambiarEstadoModal1}>
        
                
                <Grid item xs={12} sx={{textAlign:'center',background:'#14FFEC',color: '#323232', borderRadius:'5px'}}>
                  
                <h2 sx={{textAlign:'cnter'}}>Información </h2>
                </Grid>
                 <br />
                <Grid container spacing={2}sx={{backgroundColor:'#BCFFFA', color:'#323232',borderRadius:'5px'}}>  
                    <Grid item xs={5} sx={{textAlign: 'left'}}>
                        <h3>Nombre:</h3>
                        
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
                        <h3>Apartamento:</h3>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'center'}}>
                        <b>C102</b>
                    </Grid>
                    <Grid item xs={5} sx={{textAlign: 'left'}}>
                        <h3>Datos Extra:</h3>
                        
                    </Grid>
                    <Grid item xs={5} sx={{textAlign: 'center'}}>
                        <b>Sin rayones</b>
                    </Grid>
                    </Grid>
                 </Modal1>
             </div>
    )
}


