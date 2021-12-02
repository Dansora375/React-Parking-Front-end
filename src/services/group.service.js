import api from '../api/api';

// Mostrar las torres existentes o grupos de casas en dado caso
export async function TowersorHouses(info) {
    try {
      const Towers = await api.get('/Group/' + info.IdNeighborhood)
      return {data:Towers, completed:true}
    } catch (error) {
      return { error: `${error}`, completed: false }
    }
  }