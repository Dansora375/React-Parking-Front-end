import * as React from 'react';
import './Entrada.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IngresoParqueadero from '../../components/Entradas/IngresoParqueadero';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ItemEntrada from '../../components/Entradas/ItemEntrada'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'
import {useDispatch, useSelector} from 'react-redux'
import {getParkingsResiAction} from '../../redux/Ducks/parkingDuck'
import {getParkingsVisiAction} from '../../redux/Ducks/parkingDuck'

export function Entrada() {
  const dispatch= useDispatch()
  const [personTypeFromTab, setPersonTypeFromTab]= React.useState(0)

  React.useEffect(()=>{//se ejecuta cuando se monta el componente
    dispatch(getParkingsResiAction(info))//se ejecuta la accion
    dispatch(getParkingsVisiAction(info))
  },[])

  

  // probablemente haya que usar useMemo como computed
  // para que se actuaice cada vez que se cambie algo
  const resiParkings=useSelector(store=>store.Parkings.parkingsResi)//seleccionamos el estado del store para obtener el estado de los parkings
  const visiParkings=useSelector(store=>store.Parkings.parkingsVisi)
  
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
          resiParkings==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          resiParkings.map(item=>(

          <ItemEntrada key={item._id} name={item.name} vehicleType={item.vehicleType} personType={item.personType} isTaken={item.isTaken} />//se puede usar el id como key
          )):
          visiParkings==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          visiParkings.map(item=>(
            item=== 'error'?'mostrar error con el cosito ed abajo':
            <ItemEntrada key={item._id} name={item.name} vehicleType={item.vehicleType} personType={item.personType} isTaken={item.isTaken} />
          ))
        }
      </div>

     </>   
    );

}