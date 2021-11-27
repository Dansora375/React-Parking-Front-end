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