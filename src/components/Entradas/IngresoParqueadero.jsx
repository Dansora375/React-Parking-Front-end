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
import { GetResiwhitparkingAction } from '../../redux/Ducks/residenteDuck';
import { getTowersAction } from '../../redux/Ducks/groupDuck';
import { getApartmentByTowerAction } from '../../redux/Ducks/homeDuck';
import { getVisitEntryActionn } from '../../redux/Ducks/entradaDuck';
import { CreateEntryVis} from '../../redux/Ducks/entradaDuck';
import { getResiEntryAction} from '../../redux/Ducks/entradaDuck';


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

const Residentes = [
    {
      value: 'Tatiana',
      label: 'Tatiana',
    },
    {
      value: 'Freddy',
      label: 'Freddy',
    },
  ];

const Parqueaderos = [
    {
      value: 'A-1',
      label: 'A-1',
    },
    {
      value: 'A-2',
      label: 'A-2',
    },
  ];

export default function IngresoParqueadero() {

    const dispatch = useDispatch();
    const residentes = useSelector(store => store.residentes.residenteswithparking);
    const torres = useSelector(store => store.groups.towers);
    const apartamentos = useSelector(store => store.homes.apartmentByTower);
    const parqueaderosvisdb = useSelector(store => store.entradas.emptyviparkings);
    const [parqueaderosvis, setparqueaderosvis] = React.useState([]);

    const [info, setinfo] = useState( { IdNeighborhood:"619cc7d78011c2969719fedd",
                                       IdGroup:""});

    React.useEffect (() => {
        dispatch(GetResiwhitparkingAction(info))
        dispatch(getTowersAction(info))
        dispatch(getApartmentByTowerAction(info))
        dispatch(getResiEntryAction(info))
      },[info])

    const [estadoModal, setEstadoModal] = React.useState(false);
    const [Ingreso, setIngreso] = React.useState('Visitante');
    const [Residente, setResidente] = React.useState('');
    const [Parqueadero, setParqueadero] = React.useState('');
    const [verParking, setverParking] = React.useState(false);
    const [Vehiculo, setVehiculo] = React.useState('');
    const [Torre, setTorre] = React.useState('');
    const [nameTower, setnameTower] = React.useState('');
    const [Apartamento, setApartamento] = React.useState('');
    const [Name, setName] = React.useState('');
    const [Cedula, setCedula] = React.useState('');
    const [Placa, setPlaca] = React.useState('');

    const CambiarIngreso = (event) => {
        setIngreso(event.target.value);
        setResidente('');
        setParqueadero('');
        setverParking(false);
        setVehiculo('');
        setTorre('');
        setApartamento('');
    };

    const CambiarResidente = (event) => {
        setResidente(event.target.value);
        setParqueadero('');
        if (verParking) {
            return
        }
        setverParking(!verParking);
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
        setResidente('');
        setParqueadero('');
        setverParking(false);
        setVehiculo('');
        setTorre('');
        setApartamento('');
    }

    const CreateEntryVist = () => {
        dispatch(({
            IdNeighborhood: info.IdNeighborhood,
            ParkingId: Parqueadero,
            name: Name,
            identification: Cedula,
            group: nameTower,
            homeName: Apartamento,
            plate: Placa,
            vehicleType: Vehiculo
        }))
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
                funcion = {CreateEntryVist}>
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
                        <h3 className="requerimientos-resi">Lista de residentes</h3>
                        { verParking && <h3 className="requerimientos-resi">Parqueaderos</h3>}
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'left'}}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            value={Residente}
                            onChange={CambiarResidente}
                            size="small"
                            margin='normal'
                            sx={{width: '100%'}}
                            >
                            {Residentes.map((option) => (
                                <MenuItem key={option.value} value={option.value} >
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        { verParking && <TextField
                            id="outlined-select-currency"
                            select
                            value={Parqueadero}
                            onChange={CambiarParqueadero}
                            size="small"
                            sx={{width: '100%'}}
                            >
                            {Parqueaderos.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField> }
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
                        
                    </Grid>
                </Grid>}
            </Modal1>
        </div>
    )
}
