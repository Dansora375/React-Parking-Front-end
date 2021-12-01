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

// Mostrar los hogares con parqueaderos, propietrio, group y estado vacio
export async function homeToEntryResident(info) {
    try {
      const homestoentry = await api.get('/Home/Select/Entry/Resident/' + info.IdNeighborhood)
      return {data:homestoentry, completed:true}
    } catch (error) {
      return { error: `${error}`, completed: false }
    }
  }