import api from '../api/api'


function Success (Data, Completed){
  return {
    data:Data,
    completed:Completed
  }
}
function Error (Error, Completed){
  return {
    error:Error,
    completed:Completed
  }
}

// para llamar los parqueaderos de residentes y colocar los
// datos en los items
export async function parkingsResident(info) {
  try {
    const Parkings = await api.get('/Parking/Resident/'+info.IdNeighborhood)
    return new Success(Parkings, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}


// para llamar los parqueaderos de VISITANTES y colocar los
// datos en los items
export async function parkingsVisitant (info) {
  try {
    const Parkings = await api.get('/Parking/Visitant/'+info.IdNeighborhood)
    // console.log(list_R.data);
    return new Success(Parkings, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}

// Crear un nuevo parqueadero
export async function NewParking (info) {
  try {
    const Parking = await api.post('/Parking/'+info.IdNeighborhood  , {
      parkingName: info.parkingName,
      vehicleType: info.vehicleType,
      personType: info.personType
    })
    return new Success(Parking, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}


// para EL MODAL mas info del un parqueadero
// residente o visitante  
export async function getMoreInfoParking(info) {
  try {
    const Parking = await api.get('/Parking/MoreInfo/'+info)
    
    return new Success(Parking, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}


