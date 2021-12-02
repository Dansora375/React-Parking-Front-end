import api from '../api/api';

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