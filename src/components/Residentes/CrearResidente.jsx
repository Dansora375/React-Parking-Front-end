import * as React from 'react';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal1 from '../Hogares/Modal1';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../../views/Residentes/Residentes.css';


export default function CrearResidente() {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    return (
        <div>
            <Fab aria-label="add" size="small" id="boton"
                onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                <AddIcon />
            </Fab>
            <Modal1 
                estado = {estadoModal1}
                cambiarEstado = {cambiarEstadoModal1}>
                <h2>Agregar nuevo Residente </h2>
                <Grid container spacing={2}>  
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Nombre:</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>C.C: </h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>

                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Telefono</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Torre:</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Apartamento:</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Parqueadero: </h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Placa: </h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Marca: </h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Color: </h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Residente" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                </Grid>
            </Modal1>
        </div>
    )
}
