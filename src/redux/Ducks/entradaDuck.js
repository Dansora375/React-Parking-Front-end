import * as services from '../../services/entrada.service';

// constants
const entradas = {

    emptyviparkings: [],

    entradasvis: [],

    entradares: []

}

// types
const GET_EMPTYVISP_SUCCESS = 'GET_EMPTYVISP_SUCCESS';
const GET_EMPTYVISP_ERROR = 'GET_EMPTYVISP_ERROR';

const NEW_ENTRY_VISIT_SUCCESS='NEW_ENTRY_VISIT_SUCCESS';
const NEW_ENTRY_VISIT_ERROR='NEW_ENTRY_VISIT_ERROR';

const NEW_ENTRY_RESIDENT_SUCCESS='NEW_ENTRY_RESIDENT_SUCCESS';
const NEW_ENTRY_RESIDENT_ERROR='NEW_ENTRY_RESIDENT_ERROR';

// Reducer
export default function entradasReducer(state = entradas, action) {
    switch (action.type) {

        case GET_EMPTYVISP_SUCCESS:
            return {...state, emptyviparkings:action.payload}
        case GET_EMPTYVISP_ERROR:
            return {...state, error:action.payload}
        case NEW_ENTRY_VISIT_SUCCESS:
            return {...state, entradasvis:action.payload.data}
        case NEW_ENTRY_VISIT_ERROR:
            return {...state.errors, error:action.payload, }
        case NEW_ENTRY_RESIDENT_SUCCESS:
            return {...state, entradasvis:action.payload.data}
        case NEW_ENTRY_RESIDENT_ERROR:
            return {...state.errors, error:action.payload, }
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