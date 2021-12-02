import api from '../api/api'

// Traer a todos los residentes que tienen parqueadero
export async function ResidentwithParking(info) {
  try {
    const Residentes = await api.get('/Owner/Select/' + info.IdNeighborhood)
    return {data:Residentes, completed:true}
    
  } catch (error) {
    return { error: `${error}`, completed: false }
  }
}

// Obtener todos los residentes de la base de datos
export async function Residents(info) {
  try {
    const Residentes = await api.get('/Owner/' + info.IdNeighborhood)
    return {data:Residentes, completed:true}
    
  } catch (error) {
    return { error: `${error}`, completed: false }
  }
}

// Crear un nuevo residente
export async function NewOwner (info) {
  try {
    const Owner = await api.post('/Owner/' + info.IdNeighborhood  , {
      name: info.name,
      identification: info.identification,
      telephone: info.telephone,
      homeId: info.homeId
    })
    return {data:Owner, completed:true}
  } catch (error) {
    return { error: `${error}`, completed: false }
  }
}