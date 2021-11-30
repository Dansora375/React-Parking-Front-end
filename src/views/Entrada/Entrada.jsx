import * as React from 'react';
import './Entrada.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IngresoParqueadero from '../../components/Entradas/IngresoParqueadero';
import InformacionEntrada from '../../components/Entradas/InformacionEntrada';
import Tarifa from '../../components/Entradas/Tarifa';
import ItemEntrada from '../../components/Entradas/ItemEntrada'
import AddEntrada from '../../components/common/SearchAndAdd/AddEntrada'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'
import {useDispatch, useSelector} from 'react-redux'
import {getParkingsResiAction} from '../../redux/Ducks/parkingDuck'
import {getParkingsVisiAction} from '../../redux/Ducks/parkingDuck'

export function Entrada() {
  const dispatch= useDispatch()
  const [personTypeFromTab, setPersonTypeFromTab]= React.useState(0)

   // se podria implementar que la accion se realice con alguna
  // funcion del ciclo de vide de react, u otra coasa que
  // haga que si no se a modificado nada no se haga la peticion, como el useMemo
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

      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Grid container spacing={2}>
              
              <Grid item xs={1} className="plus">
                <IngresoParqueadero/>
              </Grid>
              <Grid item xs={5}>
                  <b className="texto-creacion">Agregar ingreso</b>
              </Grid>
              <Grid item xs={1} className="plus">
                  <InformacionEntrada/>
              </Grid>
              <Grid item xs={5}>
                  <b className="texto-creacion">Informacion</b>
              </Grid>
              <Grid item xs={1} className="plus">
                  <Tarifa/>
              </Grid>
              
          </Grid>
      </Box>
      <AddEntrada></AddEntrada>
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