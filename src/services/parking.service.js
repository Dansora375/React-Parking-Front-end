import api from '../api/api'

// para llamar los parqueaderos de residentes y colocar los
// datos en los items
export async function parkingsResident(info) {
  try {
    const Parkings = await api.get('/Parking/Resident/'+info.IdNeighborhood)
    return {data:Parkings, completed:true}
  } catch (error) {
    return { error: `${error}`, completed: false }
  }
}


// para llamar los parqueaderos de VISITANTES y colocar los
// datos en los items
export async function parkingsVisitant () {
  try {
    const listR = await api.get('/viewParqueadero/Visitant')
    // console.log(list_R.data);
    return listR.data
  } catch (e) {
    return console.log(e.response)
  }
}