import * as React from 'react';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal1 from '../../components/Hogares/Modal1';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../../views/Hogares/Hogares.css';
import { submitTorre } from './ConexionBack/FormCrearTorre';


export default function CrearTorre() {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [towerName, setTowerName] = useState('');
    const [capacidad, setcapacidad] = useState(0);
    
    const SubTower = (event) => {

        submitTorre(towerName, capacidad);
        cambiarEstadoModal1();
    }

    return (
        <div>
            <Fab aria-label="add" size="small" id="boton"
                onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                <AddIcon />
            </Fab>
            <Modal1 
                estado = {estadoModal1}
                cambiarEstado = {cambiarEstadoModal1}
                funcion = {SubTower}>
                <h2>Agregar nueva torre </h2>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Nombre de la Torre</h3>
                        <h3>Capacidad</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Torre" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}
                        onChange={event => setTowerName(event.target.value)}/>
                        <TextField id="outlined-basic" label="Capacidad" variant="outlined" size="small"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}
                        onChange={event => setcapacidad(event.target.value)}/>
                    </Grid>
                </Grid>
            </Modal1>
        </div>
    )
}
