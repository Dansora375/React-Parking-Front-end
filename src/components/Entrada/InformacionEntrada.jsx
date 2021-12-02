import React from 'react'
import Modal1 from '../Hogares/Modal1'
import Grid from '@mui/material/Grid';
import {useState} from 'react';

export default function InformacionEntrada(props) {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const name = props.name
    const plate = props.plate
    const entryTime = props.entryTime
    const group = props.group
    const homename = props.homename
    const extra = props.extra

    
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
                        <b>{name}</b>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <h3>Placa:</h3>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'center'}}>
                        <b>{plate}</b>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <h3>Hora de Ingreso:</h3>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'center'}}>
                        {entryTime}
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <h3>Apartamento:</h3>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'center'}}>
                        <b>{group}<br/>{homename}</b>
                    </Grid>
                    <Grid item xs={5} sx={{textAlign: 'left'}}>
                        <h3>Datos Extra:</h3>
                        
                    </Grid>
                    <Grid item xs={5} sx={{textAlign: 'center'}}>
                        <b>{extra}</b>
                    </Grid>
                    </Grid>
                 </Modal1>
             </div>
    )
}


