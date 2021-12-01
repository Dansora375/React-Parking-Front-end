import * as services from '../../services/Entrada.service'

// constants
const initialEntradas={
  entradasResi:[

  ],
  entradasVisi:[
    
  ],
  error:[

  ]
}
// types
const GET_RESI_ENTRADAS_TO_ITEM_SUCCESS='GET_ENTRADAS_TO_ITEM_SUCCESS'
const GET_RESI_ENTRADAS_TO_ITEM_ERROR='GET_ENTRADAS_TO_ITEM_ERROR'
const GET_VISI_ENTRADAS_TO_ITEM_SUCCESS='GET_VISI_ENTRADAS_TO_ITEM_SUCCESS'
const GET_VISI_ENTRADAS_TO_ITEM_ERROR='GET_VISI_ENTRADAS_TO_ITEM_ERROR'

// reducer
export default function entradaReducer(state =initialEntradas, action){

  switch(action.type){
    case GET_RESI_ENTRADAS_TO_ITEM_SUCCESS:
      return {...state, entradasResi:action.payload }
    case GET_RESI_ENTRADAS_TO_ITEM_ERROR:
      return {...state, error:action.payload }
    case GET_VISI_ENTRADAS_TO_ITEM_SUCCESS:
      return {...state, entradasVisi:action.payload }
    case GET_VISI_ENTRADAS_TO_ITEM_ERROR:
      return {...state, error:action.payload }
    default:
      return state
  }
}
// actions
export const getEntradasResiAction=(info)=> async (dispatch, getState)=>{

  try {
    const res = await services.entradasResident(info)
    if (res.completed) {
      dispatch({
        type:GET_RESI_ENTRADAS_TO_ITEM_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_RESI_ENTRADAS_TO_ITEM_ERROR,
        payload:res.error
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_RESI_ENTRADAS_TO_ITEM_ERROR,
        payload: `ha ocurrido un error al obtener los 
        parquederos de residentes: ${error}` 
      })
  }

}


export const getEntradasVisiAction=(info)=> async (dispatch, getState)=>{

  try {
    const res = await services.entradasVisitant(info)
    if (res.completed) {
      dispatch({
        type:GET_VISI_ENTRADAS_TO_ITEM_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_VISI_ENTRADAS_TO_ITEM_ERROR,
        payload:res.error
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_VISI_ENTRADAS_TO_ITEM_ERROR,
        payload: `ha ocurrido un error al obtener los 
        parquederos de visitantes: ${error}` 
      })
  }

}