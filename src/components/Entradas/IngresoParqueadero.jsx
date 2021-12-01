import * as React from 'react';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal1 from '../../components/Hogares/Modal1';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../../views/Entrada/Entrada.css';
import { useDispatch, useSelector } from 'react-redux';
import { getHomestoEntryAction } from '../../redux/Ducks/homeDuck';
import { getTowersAction } from '../../redux/Ducks/groupDuck';
import { getApartmentByTowerAction } from '../../redux/Ducks/homeDuck';
import { getEmptyVisParkingAction } from '../../redux/Ducks/entradaDuck';
import { NewEntryVisit } from '../../redux/Ducks/entradaDuck';
import { NewEntryResident } from '../../redux/Ducks/entradaDuck';


const TipoIngreso = [
    {
      value: 'Visitante',
      label: 'Visitante',
    },
    {
      value: 'Residente',
      label: 'Residente',
    },
  ];

const Tipovehiculo = [
    {
      value: 'Carro',
      label: 'Carro',
    },
    {
      value: 'Moto',
      label: 'Moto',
    },
    {
      value: 'Bicicleta',
      label: 'Bicicleta',
    },
  ];

export default function IngresoParqueadero() {

    const dispatch = useDispatch();
    const hogares = useSelector(store => store.homes.homesEntry);
    const torres = useSelector(store => store.groups.towers);
    const apartamentos = useSelector(store => store.homes.apartmentByTower);
    const parqueaderosvisdb = useSelector(store => store.entradas.emptyviparkings);
    const [parqueaderosvis, setparqueaderosvis] = React.useState([]);

    const [info, setinfo] = useState( { IdNeighborhood:"619cc7d78011c2969719fedd",
                                       IdGroup:""});

    React.useEffect (() => {
        dispatch(getHomestoEntryAction(info))
        dispatch(getTowersAction(info))
        dispatch(getApartmentByTowerAction(info))
        dispatch(getEmptyVisParkingAction(info))
      },[info])

    const [estadoModal, setEstadoModal] = React.useState(false);
    const [Ingreso, setIngreso] = React.useState('Visitante');
    const [Hogar, setHogar] = React.useState('');
    const [Parqueadero, setParqueadero] = React.useState('');
    const [Vehiculo, setVehiculo] = React.useState('');
    const [Torre, setTorre] = React.useState('');
    const [nameTower, setnameTower] = React.useState('');
    const [Apartamento, setApartamento] = React.useState('');
    const [Name, setName] = React.useState('');
    const [Cedula, setCedula] = React.useState('');
    const [Placa, setPlaca] = React.useState('');
    const [extra, setextra] = React.useState('');

    const CambiarIngreso = (event) => {
        setIngreso(event.target.value);
        setHogar('');
        setParqueadero('');
        setVehiculo('');
        setTorre('');
        setApartamento('');
        setinfo({IdNeighborhood:"619cc7d78011c2969719fedd",
                 IdGroup: info.IdGroup});
    };

    const CambiarHogar = (event) => {
        setHogar(event.target.value);
    };

    const CambiarVehiculo = (event) => {
        setVehiculo(event.target.value);
        const provparkings = [];
        for (let i=0; i<parqueaderosvisdb.length; i++){
            if (parqueaderosvisdb[i].vehicleType === event.target.value){
                provparkings.push(parqueaderosvisdb[i]);
            }
        }
        setparqueaderosvis(provparkings);
    };

    const CambiarParqueadero = (event) => {
        setParqueadero(event.target.value);
    };

    const CambiarTorre = (event) => {
        setTorre(event.target.value);
        info.IdGroup = event.target.value;
        setinfo({IdNeighborhood:"619cc7d78011c2969719fedd",
                 IdGroup: info.IdGroup});
        for (let i=0; i<torres.length; i++){
        if (torres[i]._id===event.target.value){
            setnameTower(torres[i].name);
            return
        }
        }
    };

    const CambiarApartamento = (event) => {
        setApartamento(event.target.value);
    };

    const cambiarEstadoModal = (event) => {
        setEstadoModal(!estadoModal);
        setIngreso('Visitante');
        setHogar('');
        setParqueadero('');
        setVehiculo('');
        setTorre('');
        setApartamento('');
    }

    const nuevoIngreso = () => {

        if (Ingreso === "Visitante") {
            dispatch(NewEntryVisit({
                IdNeighborhood: info.IdNeighborhood,
                ParkingId: Parqueadero,
                name: Name,
                identification: Cedula,
                group: nameTower,
                homeName: Apartamento,
                plate: Placa,
                vehicleType: Vehiculo,
                extra: extra
            }))
        } else if (Ingreso === "Residente") {
            dispatch(NewEntryResident({
                IdNeighborhood: info.IdNeighborhood,
                HomeId: Hogar
            }))
        }

        setinfo({IdNeighborhood:"619cc7d78011c2969719fedd",
                 IdGroup: info.IdGroup});

        cambiarEstadoModal()
    }

    return (
        <div>
            <Fab aria-label="add" size="small" id="boton"
                onClick={cambiarEstadoModal}>
                <AddIcon />
            </Fab>
            <Modal1 
                estado = {estadoModal}
                cambiarEstado = {cambiarEstadoModal}
                funcion = {nuevoIngreso}>
                <h1>Ingreso Parqueadero<br/>{Ingreso}</h1>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={Ingreso}
                    onChange={CambiarIngreso}
                    size="small"
                    sx={{width: '40%'}}
                    >
                    {TipoIngreso.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br/><br/>
                {Ingreso === "Residente" && <Grid container spacing={2}>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3 className="requerimientos-resi">Lista de hogares</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}> 
                        <TextField
                            id="outlined-select-currency"
                            select
                            value={Hogar}
                            onChange={CambiarHogar}
                            size="small"
                            margin='normal'
                            sx={{width: '100%'}}
                            >
                            {hogares.map((option) => (
                                <MenuItem key={option._id} value={option._id} >
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>}

                {Ingreso === "Visitante" && <Grid container spacing={2}>
                    <Grid item xs={6} sx={{textAlign: 'right'}}>
                        <h3 className="requerimientos-vis">Torre</h3>
                        <h3 className="requerimientos-vis">Apartamento</h3>
                        <h3 className="requerimientos-vis">Nombre</h3>
                        <h3 className="requerimientos-vis">Cedula</h3>
                        <h3 className="requerimientos-vis">Placa</h3>
                        <h3 className="requerimientos-vis">Tipo de vehiculo</h3>
                        <h3 className="requerimientos-vis">Parqueadero</h3>
                        <h3 className="requerimientos-vis">Informacion adicional</h3>
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            value={Torre}
                            onChange={CambiarTorre}
                            size="small"
                            margin='dense'
                            sx={{width: '100%'}}
                            >
                            {torres.map((option) => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            select
                            value={Apartamento}
                            onChange={CambiarApartamento}
                            size="small"
                            margin='dense'
                            sx={{width: '100%'}}
                            >
                            {apartamentos.map((option) => (
                                <MenuItem key={option._id} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="outlined-basic" label="Nombre" variant="outlined" size="small" margin='dense'
                        onChange={event => setName(event.target.value)}
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                        <TextField id="outlined-basic" label="Cedula" variant="outlined" size="small" margin='dense'
                        onChange={event => setCedula(event.target.value)}
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                        <TextField id="outlined-basic" label="Placa" variant="outlined" size="small" margin='dense'
                        onChange={event => setPlaca(event.target.value)}
                        className="textfield" InputLabelProps={{className: 'textfieldLabel'}}/>
                        <TextField
                            id="outlined-select-currency"
                            select
                            value={Vehiculo}
                            onChange={CambiarVehiculo}
                            size="small"
                            margin='dense'
                            sx={{width: '100%'}}
                            >
                            {Tipovehiculo.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            select
                            value={Parqueadero}
                            onChange={CambiarParqueadero}
                            size="small"
                            margin='dense'
                            sx={{width: '100%'}}
                            >
                            {parqueaderosvis.map((option) => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Info. Adicional"
                            multiline
                            maxRows={3}
                            value={extra}
                            onChange={event => setextra(event.target.value)}
                            />
                        
                    </Grid>
                </Grid>}
            </Modal1>
        </div>
    )
}
