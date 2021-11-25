import  React from 'react';
import ItemParking from '../../components/Parking/ItemParking'
import SearchAndAdd from '../../components/common/SearchAndAdd/SearchAndAdd'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'
import {useDispatch, useSelector} from 'react-redux'
import {getParkingsResiAction} from '../../redux/Ducks/parkingDuck'
import {getParkingsVisiAction} from '../../redux/Ducks/parkingDuck'

function Parking() {
  
  const [personTypeFromTab, setPersonTypeFromTab]= React.useState(0)

   // se podria implementar que la accion se realice con alguna
  // funcion del ciclo de vide de react, u otra coasa que
  // haga que si no se a modificado nada no se haga la peticion, como el useMemo
  React.useEffect(()=>{
    dispatch(getParkingsResiAction(info))
    dispatch(getParkingsVisiAction(info))
  },[])

  const dispatch= useDispatch()

  // probablemente haya que usar useMemo como computed
  // para que se actuaice cada vez que se cambie algo
  const resiParkings=useSelector(store=>store.Parkings.parkingsResi)
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
      <SearchAndAdd></SearchAndAdd>
      <TabResiOrVisi typePerson={(value)=>kindOfPerson(value)}></TabResiOrVisi>
      <div>
        {
          personTypeFromTab===0?
          resiParkings.map(item=>(

          <ItemParking key={item._id} name={item.name} vehicleType={item.vehicleType} personType={item.personType} isTaken={item.isTaken} />
          )):
          visiParkings.map(item=>(
            
          <ItemParking key={item._id} name={item.name} vehicleType={item.vehicleType} personType={item.personType} isTaken={item.isTaken} />
          ))
        }
      </div>
    </>
  )
}

export default Parking
