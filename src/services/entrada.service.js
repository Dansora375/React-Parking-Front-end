import api from '../api/api';

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

// Mostrar los parqueaderos de visitantes que no estan en uso
export async function EmptyVisitParking (info) {
    try {
      const Emptyviparkings = await api.get('/Parking/Entry/Visitant/' + info.IdNeighborhood)
      return {data:Emptyviparkings, completed:true}
    } catch (error) {
      return { error: `${error}`, completed: false }
    }
  }

// Registrar el ingreso de un visitante
export async function IngresoVisitante (info) {
  try {
    const ingresovis = await api.post('/entries/new-entry-visitant/' + info.IdNeighborhood + '/' + info.ParkingId , {
      name: info.name,
      identification: info.identification,
      group: info.group,
      homeName: info.homeName,
      plate: info.plate,
      vehicleType: info.vehicleType,
      extra: info.extra
    })
    return {data:ingresovis, completed:true}
  } catch (error) {
    return { error: `${error}`, completed: false }
  }
}

// Registrar el ingreso de un residente
export async function IngresoResidente (info) {
  try {
    const ingresores = await api.post('/entries/new-entry-resident/' + info.IdNeighborhood + '/' + info.HomeId)
    return {data:ingresores, completed:true}
  } catch (error) {
    return { error: `${error}`, completed: false }
  }
}

// para llamar los parqueaderos de residentes y colocar los
// datos en los items
export async function entradasResident(info) {
  try {
    const Entradas = await api.get('/Entries/list-entry-resident/'+info.IdNeighborhood)
    return new Success(Entradas, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}


// para llamar los parqueaderos de VISITANTES y colocar los
// datos en los items
export async function entradasVisitant (info) {
  try {
    const Entradas = await api.get('/Entries/list-entry-visitant/'+info.IdNeighborhood)
    // console.log(list_R.data);
    return new Success(Entradas, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}
// para EL MODAL mas info del un entrada
// residente o visitante  
export async function getMoreInfoEntrada(info) {
  try {
    const Entrada = await api.get('/Entries/more-info-entry-visitant/'+info)
    
    return new Success(Entrada, true)
  } catch (error) {
    return new Error(`${error}`, false) 
  }
}