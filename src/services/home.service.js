import api from '../api/api';

// Mostrar los apartamentos de la torre seleccionada
export async function apartmentofTower(info) {
    try {
      const apartments = await api.get('/Home/Group/' + info.IdGroup)
      return {data:apartments, completed:true}
    } catch (error) {
      return { error: `${error}`, completed: false }
    }
  }