import api from '../api/api'


export async function IngresoResidente(info){
  try {
    const ingresores= await api.post('/entries/new-entry-resident/'+info.IdNeighborhood +'/'+ info.HomeId)
    return { data:ingresores, completed:true}
  } catch (error) {
    return {error: `${error}`, completed:false}
  }

}