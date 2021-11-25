import * as services from '../../services/parking.service'

// constants
const initialParkings={
  parkingsResi:[

  ],
  parkingsVisi:[

  ]
}
// types
const GET_RESI_PARKINGS_TO_ITEM_SUCCESS='GET_PARKINGS_TO_ITEM_SUCCESS'
const GET_RESI_PARKINGS_TO_ITEM_ERROR='GET_PARKINGS_TO_ITEM_ERROR'
const GET_VISI_PARKINGS_TO_ITEM_SUCCESS='GET_VISI_PARKINGS_TO_ITEM_SUCCESS'
const GET_VISI_PARKINGS_TO_ITEM_ERROR='GET_VISI_PARKINGS_TO_ITEM_ERROR'

// reducer
export default function parkingReducer(state =initialParkings, action){

  switch(action.type){
    case GET_RESI_PARKINGS_TO_ITEM_SUCCESS:
      return {...state, parkingsResi:action.payload }
    case GET_RESI_PARKINGS_TO_ITEM_ERROR:
      return {...state, parkingsResi:{error:action.payload} }
    case GET_VISI_PARKINGS_TO_ITEM_SUCCESS:
      return {...state, parkingsVisi:action.payload }
    case GET_VISI_PARKINGS_TO_ITEM_ERROR:
      return {...state, parkingsVisi:{error:action.payload} }
    default:
      return state
  }
}
// actions
export const getParkingsResiAction=(info)=> async (dispatch, getState)=>{

  try {
    const res = await services.parkingsResident(info)
    if (res.completed) {
      dispatch({
        type:GET_RESI_PARKINGS_TO_ITEM_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_RESI_PARKINGS_TO_ITEM_ERROR,
        payload:res.error
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_RESI_PARKINGS_TO_ITEM_ERROR,
        payload: `ha ocurrido un error al obtener los 
        parquederos de residentes: ${error}` 
      })
  }

}


export const getParkingsVisiAction=(info)=> async (dispatch, getState)=>{

  try {
    const res = await services.parkingsVisitant(info)
    if (res.completed) {
      dispatch({
        type:GET_VISI_PARKINGS_TO_ITEM_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_VISI_PARKINGS_TO_ITEM_ERROR,
        payload:res.error
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_VISI_PARKINGS_TO_ITEM_ERROR,
        payload: `ha ocurrido un error al obtener los 
        parquederos de visitantes: ${error}` 
      })
  }

}