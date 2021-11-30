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
      vehicleType: info.vehicleType
    })
    return {data:ingresovis, completed:true}
  } catch (error) {
    return { error: `${error}`, completed: false }
  }
}