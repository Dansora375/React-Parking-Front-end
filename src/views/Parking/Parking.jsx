import  React from 'react';
import ItemParking from '../../components/Parking/ItemParking'
import SearchAndAdd from '../../components/common/SearchAndAdd/SearchAndAdd'
import TabResiOrVisi from '../../components/common/TabResiOrVisi/TabResiOrVisi'
import {useDispatch, useSelector} from 'react-redux'
import {getParkingsAction} from '../../redux/Ducks/parkingDuck'

function Parking() {

  const dispatch= useDispatch()
  const resiParkings=useSelector(store=>store.resiParkings.parkingsResi)
  // console.log(resiParkings)

  // el id del nieghborhood se obtendra del sessionStorage
  // por ahora sera id estatico
  const info ={
    IdNeighborhood:"619cc7d78011c2969719fedd"
  }

  React.useEffect(()=>{
    dispatch(getParkingsAction(info))
  },[])

  return (
    <>  
      <SearchAndAdd></SearchAndAdd>
      <TabResiOrVisi></TabResiOrVisi>
      <div>
        {
        resiParkings.map(item=>(
        <ItemParking key={item._id} name={item.name} vehicleType={item.vehicleType} personType={item.personType} isTaken={item.isTaken} />
        ))
      }
      </div>
    </>
  )
}

export default Parking
