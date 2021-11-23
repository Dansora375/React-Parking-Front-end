import * as React from 'react';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal1 from '../../components/Hogares/Modal1';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../../views/Hogares/Hogares.css'
import Checkbox from '@mui/material/Checkbox';
import { submitApto } from './ConexionBack/FormCrearApto';

const currencies2 = [
    {
      value: 'Torre A',
      label: 'Torre A',
    },
    {
      value: 'Torre B',
      label: 'Torre B',
    },
    {
      value: 'Torre C',
      label: 'Torre C',
    },
    {
      value: 'Torre D',
      label: 'Torre D',
    },
  ];

export default function CrearHogarApartamento() {

    const [estadoModal2, cambiarEstadoModal2] = useState(false);
 
    const [tower, setCurrency2] = React.useState('Torre A');

    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };

    const [checked, setChecked] = React.useState(false);

    const [aptoName, setaptoName] = useState('');

    const SubApto = (event) => {

        submitApto(aptoName, tower);
        cambiarEstadoModal2();
    }

    const handleChangeCheck = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <Fab aria-label="add" size="small" id="boton"
                onClick={() => cambiarEstadoModal2(!estadoModal2)}>
                <AddIcon/>
            </Fab>
            <Modal1 
                estado = {estadoModal2}
                cambiarEstado = {cambiarEstadoModal2}
                funcion = {SubApto}>
                <h2>Agregar nuevo hogar </h2>
                <Grid container spacing={2}>  
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Torre</h3>
                        <h3>Numero apartamento</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Torre"
                            value={tower}
                            onChange={handleChange2}
                            size="small"
                            sx={{width: '100%'}}
                            >
                            {currencies2.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="outlined-basic" label="Numero apto" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}} 
                        onChange={event => setaptoName(event.target.value)}/>
                    </Grid>
                </Grid>
                <h4><Checkbox checked={checked}
                    onChange={handleChangeCheck}
                    inputProps={{ 'aria-label': 'controlled'}} />
                    Agregar Representante</h4>
                {checked && 
                <Grid container spacing={2}>  
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3>Cedula propietario</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField id="outlined-basic" label="Cedula" variant="outlined" size="small" margin="normal"
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}} />
                    </Grid>
                </Grid>}
            </Modal1>
        </div>
    )
}