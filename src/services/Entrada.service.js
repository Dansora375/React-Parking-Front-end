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
export async function entradasResident(info) {
  try {
    const Entradas = await api.get('/list-entry-resident/:IdNeighborhood/'+info.IdNeighborhood)
    return new Success(Entradas, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}


// para llamar los parqueaderos de VISITANTES y colocar los
// datos en los items
export async function entradasVisitant (info) {
  try {
    const Entradas = await api.get('/list-entry-visitant/'+info.IdNeighborhood)
    // console.log(list_R.data);
    return new Success(Entradas, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}

export async function NewEntrada (info) {
  try {
    const Entrada = await api.post('/Parking/'+info.IdNeighborhood  , {
      parkingName: info.parkingName,
      vehicleType: info.vehicleType,
      personType: info.personType
    })
    return new Success(Entrada, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}