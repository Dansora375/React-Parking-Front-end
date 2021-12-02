import * as services from '../../services/entrada.service';

// constants
const entradas = {

    emptyviparkings: [],

    entradasResi:[],

    entradasVisi:[],

    entradasResiMoreInfo:{

    },
    entradasVisiMoreInfo:{
  
    },
    errors: {
      entradasResi:"",
      entradasVisi:""
    }

}

// types
const GET_EMPTYVISP_SUCCESS = 'GET_EMPTYVISP_SUCCESS';
const GET_EMPTYVISP_ERROR = 'GET_EMPTYVISP_ERROR';

const NEW_ENTRY_VISIT_SUCCESS='NEW_ENTRY_VISIT_SUCCESS';
const NEW_ENTRY_VISIT_ERROR='NEW_ENTRY_VISIT_ERROR';

const NEW_ENTRY_RESIDENT_SUCCESS='NEW_ENTRY_RESIDENT_SUCCESS';
const NEW_ENTRY_RESIDENT_ERROR='NEW_ENTRY_RESIDENT_ERROR';

const GET_RESI_ENTRADAS_TO_ITEM_SUCCESS='GET_ENTRADAS_TO_ITEM_SUCCESS'
const GET_RESI_ENTRADAS_TO_ITEM_ERROR='GET_ENTRADAS_TO_ITEM_ERROR'
const GET_VISI_ENTRADAS_TO_ITEM_SUCCESS='GET_VISI_ENTRADAS_TO_ITEM_SUCCESS'
const GET_VISI_ENTRADAS_TO_ITEM_ERROR='GET_VISI_ENTRADAS_TO_ITEM_ERROR'
const GET_RESI_ENTRADA_ENTRADAS_ERROR='GET_RESI_ENTRADA_ENTRADAS_ERROR'
const GET_VISI_ENTRADA_ENTRADAS_ERROR='GET_VISI_ENTRADA_ENTRADAS_ERROR'

// Obterner mas info entradas
const GET_MORE_INF_ENTRADA_RESI_SUCCESS='GET_MORE_INF_ENTRADA_RESI_SUCCESS'
const GET_MORE_INF_ENTRADA_VISI_SUCCESS='GET_MORE_INF_ENTRADA_VISI_SUCCESS'
// Reducer
export default function entradasReducer(state = entradas, action) {
    switch (action.type) {

        case GET_EMPTYVISP_SUCCESS:
            return {...state, emptyviparkings:action.payload}
        case GET_EMPTYVISP_ERROR:
            return {...state, error:action.payload}
        case NEW_ENTRY_VISIT_SUCCESS:
            return {...state, entradasVisi:action.payload.data}
        case NEW_ENTRY_VISIT_ERROR:
            return {...state.errors, error:action.payload, }
        case NEW_ENTRY_RESIDENT_SUCCESS:
            return {...state, entradasResi:action.payload.data}
        case NEW_ENTRY_RESIDENT_ERROR:
            return {...state.errors, error:action.payload, }
        case GET_RESI_ENTRADAS_TO_ITEM_SUCCESS:
          return {...state, entradasResi:action.payload }
        case GET_RESI_ENTRADAS_TO_ITEM_ERROR:
          return {...state, error:action.payload }
        case GET_VISI_ENTRADAS_TO_ITEM_SUCCESS:
          return {...state, entradasVisi:action.payload }
        case GET_VISI_ENTRADAS_TO_ITEM_ERROR:
          return {...state, error:action.payload }
        case GET_MORE_INF_ENTRADA_RESI_SUCCESS:
          return {...state, entradasResiMoreInfo:action.payload }
        case GET_MORE_INF_ENTRADA_VISI_SUCCESS:
          return {...state, entradasVisiMoreInfo:action.payload }
        default:
            return state
    }
}

// Actions

export const getEmptyVisParkingAction=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.EmptyVisitParking(info)
      if (res.completed) {
        dispatch({
          type:GET_EMPTYVISP_SUCCESS,
          payload:res.data.data
        })
      }else if(res.completed===false) {
        dispatch({
          type:GET_EMPTYVISP_ERROR,
          payload:res.error
        })
      } 
    } catch (error) {
      dispatch({
          type:GET_EMPTYVISP_ERROR,
          payload: `ha ocurrido un error al obtener los 
          parqueaderos vacios para visitantes: ${error}` 
        })
    }
  
  }


export const NewEntryVisit=(info)=> async (dispatch, getState)=>{

    try {
      await services.IngresoVisitante(info)
      
    } catch (error) {
        dispatch({
          type:NEW_ENTRY_VISIT_ERROR,
          payload: `ha ocurrido un error al ingresar un visitante a un parqueadero : ${error}`
          
        })
    }
  }

export const NewEntryResident=(info)=> async (dispatch, getState)=>{

    try {
      await services.IngresoResidente(info)
      
    } catch (error) {
        dispatch({
          type:NEW_ENTRY_RESIDENT_ERROR,
          payload: `ha ocurrido un error al ingresar un residente a un parqueadero : ${error}`
          
        })
    }
  }

export const getEntradasResiAction=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.entradasResident(info)
      if (res.completed) {
        dispatch({
          type:GET_RESI_ENTRADAS_TO_ITEM_SUCCESS,
          payload:res.data.data.list
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
          payload:res.data.data.list
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

// Obterner more info
export const getMoreInfoEntradaResiAction=(info)=> async (dispatch, getState)=>{
  try {
    const res = await services.getMoreInfoEntrada(info)
    if (res.completed) {
      dispatch({
        type:GET_MORE_INF_ENTRADA_RESI_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_RESI_ENTRADA_ENTRADAS_ERROR,
        payload:{
          error:"error",
          message:res.error
        }
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_RESI_ENTRADA_ENTRADAS_ERROR,
        payload:{
          error:"error",
          message: `ha ocurrido un error al obtener el
          parquedero de residente: ${error}` 
        }
      })
  }

}



export const getMoreInfoEntradaVisiAction=(info)=> async (dispatch, getState)=>{
  try {
    const res = await services.getMoreInfoEntrada(info)
    if (res.completed) {
      dispatch({
        type:GET_MORE_INF_ENTRADA_VISI_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_RESI_ENTRADA_ENTRADAS_ERROR,
        payload:{
          error:"error",
          message:res.error
        }
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_RESI_ENTRADA_ENTRADAS_ERROR,
        payload:{
          error:"error",
          message: `ha ocurrido un error al obtener el
          parquedero de visitante: ${error}` 
        }
      })
  }

}