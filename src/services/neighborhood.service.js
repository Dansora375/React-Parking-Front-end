import api from '../api/api'

export default {
  listNeighborhoods: async () => {
    try {
      const conjuntos = await api.get('/Neighborhood/list');
      return { conjuntos, completed: true}
    } catch (error) {
      return { error }
    }
    

  }
}