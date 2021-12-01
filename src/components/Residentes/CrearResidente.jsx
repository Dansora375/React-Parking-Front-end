import * as React from 'react';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal1 from '../Hogares/Modal1';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../../views/Residentes/Residentes.css';
import {useDispatch, useSelector} from 'react-redux';
import { NewOwner } from '../../services/residente.service';
import { GetResidentsAction } from '../../redux/Ducks/residenteDuck';

export default function CrearResidente() {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const dispatch = useDispatch();
    const Residentes = useSelector(store => store.residentes.residentes);

    React.useEffect (() => {
        dispatch(GetResidentsAction(info))
      },[])

    const [Name, setName] = React.useState('');
    const [Cedula, setCedula] = React.useState('');
    const [telefono, settelefono] = React.useState('');
    const [Home, setHome] = React.useState('');

    const info = {
        IdNeighborhood:"619cc7d78011c2969719fedd"
      }

    const cambiarEstadoModal = (event) => {
        cambiarEstadoModal1(!estadoModal1);
        setName('');
        setCedula('');
        settelefono('');
        setHome('');
    }

    // Toca corregirlo
    const CrearResidente = () => {

        dispatch(NewOwner({
          IdNeighborhood: info.IdNeighborhood,
          name: Name,
          identification: Cedula,
          telephone: telefono,
          homeId: Home
      }))

      cambiarEstadoModal()
  
      }

    return (
        <div>
            <Fab aria-label="add" size="small" id="boton"
                onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                <AddIcon />
            </Fab>
            <Modal1 
                estado = {estadoModal1}
                cambiarEstado = {cambiarEstadoModal}
                funcion = {cambiarEstadoModal}>
                <h2>Agregar nuevo Residente </h2>
                <Grid container spacing={2}>  
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Nombre:</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Nombre" variant="outlined" size="small" margin="normal"
                        onChange={event => setName(event.target.value)}
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>C.C: </h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="C.C." variant="outlined" size="small" margin="normal"
                        onChange={event => setCedula(event.target.value)}
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>

                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Telefono</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Telefono" variant="outlined" size="small" margin="normal"
                        onChange={event => settelefono(event.target.value)}
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>ID Apto:</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="ID Apto" variant="outlined" size="small" margin="normal" 
                        onChange={event => setHome(event.target.value)}
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                    </Grid>
                    
                    
                    
                </Grid>
            </Modal1>

            
        </div>
    )
}
