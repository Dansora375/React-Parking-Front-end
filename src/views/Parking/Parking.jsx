import  React from 'react';
import ItemParking from '../../components/Parking/ItemParking'
import SearchAndAdd from '../../components/common/SearchAndAdd/SearchAndAdd'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'
import {useDispatch, useSelector} from 'react-redux'
import {getVisitEntryAction} from '../../redux/Ducks/entradaDuck'
import {getParkingsVisiAction} from '../../redux/Ducks/parkingDuck'
// import watch from 'redux-watch'
// import  store from '../../redux/createdStore'

function Parking() {
  
  const dispatch= useDispatch()
  const [personTypeFromTab, setPersonTypeFromTab]= React.useState(0)
  // const [resiParkings, setResiParkings]= React.useState(useSelector(store=>store.Parkings.parkingsResi))
  // const [visiParkings, setVisiParkings]= React.useState(useSelector(store=>store.Parkings.parkingsVisi))

  React.useEffect(()=>{
    dispatch(getVisitEntryAction(info))
    dispatch(getParkingsVisiAction(info))
  },[])

  
  
  // probablemente haya que usar useMemo como computed
  // para que se actuaice cada vez que se 
  const resiParkings= useSelector(store=>store.Parkings.parkingsResi)
  const visiParkings= useSelector(store=>store.Parkings.parkingsVisi)

 

  // let wR = watch(store.getState, 'Parkings.parkingsResi')

  // store.subscribe(wR((newVal, oldVal, objectPath)=>{
  //   setResiParkings(newVal)
  //   console.log('se a cambiado el valor del estore resi')
    
  // }))
  // let wV = watch(store.getState, 'Parkings.parkingsVisi')
  // store.subscribe(wV ((newVal, oldVal, objectPath)=>{
  //   setVisiParkings(newVal)
  //   console.log('se a cambiado el valor del estore visi')
    
  // }))

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
          resiParkings==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          resiParkings.map(item=>(
            
            
            <ItemParking key={item._id} name={item.name} vehicleType={item.vehicleType} personType={item.personType} isTaken={item.isTaken} />
          )):
          visiParkings==="error"?'mostrar error con el cosito ed abajo con el tipo de error':
          visiParkings.map(item=>(
            item=== 'error'?'mostrar error con el cosito ed abajo':
            <ItemParking key={item._id} name={item.name} vehicleType={item.vehicleType} personType={item.personType} isTaken={item.isTaken} />
          ))
        }
      </div>
    </>
  )
}

export default Parking
