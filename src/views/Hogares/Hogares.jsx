import * as React from 'react';
import './Hogares.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
//import { styled } from '@mui/system';
import styled  from 'styled-components';
import InputUnstyled from '@mui/core/InputUnstyled';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import CrearTorre from '../../components/Hogares/CrearTorre';
import CrearHogarApartamento from '../../components/Hogares/CrearHogarApartamento';
import ObtenerHogares from '../../components/Hogares/ConexionBack/ObtenerHogares';
import {useDispatch, useSelector} from 'react-redux';
import { getTowersAction } from '../../redux/Ducks/groupDuck';
import { getApartmentByTowerAction } from '../../redux/Ducks/homeDuck';


const BotonNav = styled('button')`
  background-color: ${({theme})=>theme.secondary };
  padding: 6px 16px;
  border-radius: 4px;
  color: #BCFFFA;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  line-height: 1.5;

  &:hover {
    background-color: #14FFEC;
    color: #323232;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #0D7377;
    color: #BCFFFA;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const StyledInputElement = styled('input')`
  width: 55%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: #BCFFFA;
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    opacity: 80%;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 60%;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

function NavButton(props) {
    return <ButtonUnstyled {...props} component={BotonNav} />;
  }

export function Hogares() {

    const dispatch = useDispatch();
    const torres = useSelector(store => store.groups.towers);
    const [Torre, setTorre] = React.useState('');
    const [nameTower, setnameTower] = React.useState('Seleccione una torre');
    const apartamentos = useSelector(store => store.homes.apartmentByTower);
    const [info, setinfo] = React.useState( { IdNeighborhood:"619cc7d78011c2969719fedd",
                                      IdGroup:""});

    React.useEffect (() => {
      dispatch(getTowersAction(info))
      dispatch(getApartmentByTowerAction(info))
    },[info])

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

    return (

      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
              
              <Grid item xs={1} className="plus">
                  <CrearTorre/>
              </Grid>
              <Grid item xs={5}>
                  <b className="texto-creacion">Crear Torre</b>
              </Grid>
              <Grid item xs={1} className="plus">
                  <CrearHogarApartamento/>
              </Grid>
              <Grid item xs={5}>
                  <b className="texto-creacion">Crear Hogar</b>
              </Grid>
              
          </Grid>
      </Box>
          
      {/* Barra de opciones */}
      <Box sx={{ flexGrow: 1, p: 1, border:'1px solid #14FFEC'}}>
      <Grid container spacing={2} >
          <Grid item xs={3}>
              <NavButton>Asignar Parqueadero</NavButton>
          </Grid>
          <Grid item xs={1}>
              <h3 className="indicador-hogar">TORRE</h3>
          </Grid>
          <Grid item xs={3}>
            <TextField
                id="outlined-select-currency"
                select
                value={Torre}
                onChange={CambiarTorre}
                size="small"
                sx={{width: '50%', backgroundColor: '#0D7377'}}
                >
                {torres.map((option) => (
                    <MenuItem key={option._id} value={option._id} >
                        {option.name}
                    </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item xs={4} sx={{textAlign: "right"}}>
              <CustomInput aria-label="Demo input" placeholder="Buscar apartamento..." />
          </Grid>
          <Grid item xs={1}>
              <SearchIcon fontSize="large" sx={{color: "#14FFEC"}}/>
          </Grid>
      </Grid>
      </Box>
      <Grid item xs={12} className="titulo-hogares">
          <b><br/>{nameTower}</b>
      </Grid>
      {nameTower !== "Seleccione una torre" && <div>
        <br/>

        {apartamentos.map((apto) => (

          <ObtenerHogares nameApto={apto.name}/>

        ))}
      </div>}
  </Box>

        
    );

}