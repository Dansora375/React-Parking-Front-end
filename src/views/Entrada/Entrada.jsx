import  React from 'react';//importacion de react-router-dom
import ItemEntrada from '../../components/Entrada/ItemEntrada'
import AddEntrada from '../../components/common/SearchAndAdd/AddEntrada'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'
import {useDispatch, useSelector} from 'react-redux'
import {getEntradasResiAction} from '../../redux/Ducks/EntradaDuck'
import {getEntradasVisiAction} from '../../redux/Ducks/EntradaDuck'

function Entrada() {
  const dispatch= useDispatch()
  const [personTypeFromTab, setPersonTypeFromTab]= React.useState(0)

   // se podria implementar que la accion se realice con alguna
  // funcion del ciclo de vide de react, u otra coasa que
  // haga que si no se a modificado nada no se haga la peticion, como el useMemo
  React.useEffect(()=>{//se ejecuta cuando se monta el componente
    dispatch(getEntradasResiAction(info))//se ejecuta la accion
    dispatch(getEntradasVisiAction(info))
  },[])

  

  // probablemente haya que usar useMemo como computed
  // para que se actuaice cada vez que se cambie algo
  //seleccionamos el estado del store para obtener el estado de los entradas
  const resiEntradas=useSelector(store=>store.Entradas.entradasResi);
  const visiEntradas=useSelector(store=>store.Entradas.entradasVisi)
  
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
      <AddEntrada></AddEntrada>
      <TabResiOrVisi typePerson={(value)=>kindOfPerson(value)}></TabResiOrVisi>
      <div>
        {
          personTypeFromTab===0?
          resiEntradas==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          resiEntradas.map(item=>(
          <ItemEntrada key={item._id} entryTime={item.entryTime} plate={item.plate} vehicleType={item.vehicleType} isTaken={item.isTaken} />//se puede usar el id como key
          )):
          visiEntradas==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          visiEntradas.map(item=>(
            item=== 'error'?'mostrar error con el cosito ed abajo':
            <ItemEntrada key={item._id} entryTime={item.entryTime} plate={item.plate} vehicleType={item.vehicleType} isTaken={item.isTaken} />
          ))
        }
      </div>
    </>
  )
}

export default Entrada
