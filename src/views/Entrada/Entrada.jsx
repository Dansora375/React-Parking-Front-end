import * as React from 'react';
import './Entrada.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IngresoParqueadero from '../../components/Entrada/IngresoParqueadero';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ItemEntrada from '../../components/Entrada/ItemEntrada'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'
import {useDispatch, useSelector} from 'react-redux'
import {getEntradasResiAction} from '../../redux/Ducks/entradaDuck'
import {getEntradasVisiAction} from '../../redux/Ducks/entradaDuck'

export function Entrada() {
  const dispatch= useDispatch()
  const [personTypeFromTab, setPersonTypeFromTab]= React.useState(0)

  // datos del usuario
  const userData = useSelector(state => state.authentication.userData)

  React.useEffect(()=>{//se ejecuta cuando se monta el componente
    if(userData){
      dispatch(getEntradasResiAction({IdNeighborhood: userData.neighborhood}))//se ejecuta la accion
      dispatch(getEntradasVisiAction({IdNeighborhood: userData.neighborhood}))
    }
  },[])

  

  // probablemente haya que usar useMemo como computed
  // para que se actuaice cada vez que se cambie algo
  const resiEntradas=useSelector(store=>store.entradas.entradasResi)
  const visiEntradas=useSelector(store=>store.entradas.entradasVisi)
  
  // el id del nieghborhood se obtendra del sessionStorage
  // por ahora sera id estatico
  const info ={
    IdNeighborhood:"619cc7d78011c2969719fedd"
  }
 
  const  kindOfPerson=(value)=>{
    setPersonTypeFromTab(value)
  }

    return (
      <>
      <Grid container 
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={0} >
        <Grid item xs={0.5} className="plus">
          <IngresoParqueadero/>
        </Grid>
        <Grid item xs={8.5}>
          <b className="texto-creacion">&nbsp;&nbsp;&nbsp;
          Agregar ingreso</b>
        </Grid>
        <Grid item xs={2}>
          <Box className='input-container'> 
            <TextField id="standard-basic" label="Filtrar..." variant="standard" 
            size="large"/>
          </Box>               
            </Grid>
             <Grid item xs={1}>
              <IconButton aria-label="search"> 
              <SearchIcon fontSize="large" sx={{ color:'primary.main'}}/>  
              </IconButton>
            </Grid>
        </Grid>

      <TabResiOrVisi typePerson={(value)=>kindOfPerson(value)}></TabResiOrVisi>
      <div>
        {
          personTypeFromTab===0?
          resiEntradas==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          resiEntradas.map(item=>(
          <ItemEntrada key={item._id} entryTime={item.entryTime} plate={item.plate} vehicleType={item.vehicleType} />//se puede usar el id como key
          )):
          visiEntradas==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          visiEntradas.map(item=>(
            item=== 'error'?'mostrar error con el cosito ed abajo':
            <ItemEntrada key={item._id} vehicleType={item.vehicleType} plate={item.plate} entryTime={item.entryTime} />
          ))
        }
      </div>

     </>   
    );

}