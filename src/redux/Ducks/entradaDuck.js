import * as services from '../../services/entrada.service';

// constants
const entradas = {


    entradasvis: [],
    entradasresi: [],
    errors: {
      entradasvis:"",
      entradasresi:""
    }

}

// types
const GET_ENTRY_VISIT_SUCCESS = 'GET_ENTRY_VISIT_SUCCESS';
const GET_ENTRY_RESIT_SUCCESS = 'GET_ENTRY_RESI_SUCCESS';
const GET_ENTRY_VISIT_ERROR = 'GET_ENTRY_VISIT_ERROR';
const GET_ENTRY_RESIT_ERROR = 'GET_ENTRY_RESI_ERROR';

const NEW_ENTRY_VISIT_SUCCESS='NEW_ENTRY_VISIT_SUCCESS';
const NEW_ENTRY_VISIT_ERROR='NEW_ENTRY_VISIT_ERROR';
const NEW_ENTRY_RESIT_SUCCESS='NEW_ENTRY_RESIT_SUCCESS';
const NEW_ENTRY_RESIT_ERROR='NEW_ENTRY_RESIT_ERROR';

// Reducer
export default function entradasReducer(state = entradas, action) {
    switch (action.type) {

        case GET_ENTRY_VISIT_SUCCESS:
            return {...state, entradasvis:action.payload}
        case GET_ENTRY_VISIT_ERROR:
            return {...state, errors:action.payload}
        case GET_ENTRY_RESIT_SUCCESS:
            return {...state, entradasresi:action.payload.data}
        case GET_ENTRY_RESIT_ERROR:
           return {...state, errors:action.payload.data}
        case NEW_ENTRY_VISIT_SUCCESS:
            return {...state, entradasvis:action.payload.data}
        case NEW_ENTRY_VISIT_ERROR:
            return {...state.errors, error:action.payload, }
        case NEW_ENTRY_RESIT_SUCCESS:
            return {...state, entradasresi:action.payload.data}
        case NEW_ENTRY_RESIT_ERROR:
            return {...state.errors, error:action.payload, }
        default:
            return state
    }
}

// Actions

export const getVisitEntryAction=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.GetEntryVisit(info)
      if (res.completed) {
        dispatch({
          type:GET_ENTRY_VISIT_SUCCESS,
          payload:res.data.data
        })
      }else if(res.completed===false) {
        dispatch({
          type:GET_ENTRY_VISIT_ERROR,
          payload:res.error
        })
      } 
    } catch (error) {
      dispatch({
          type:GET_ENTRY_VISIT_ERROR,
          payload: `ha ocurrido un error al obtener los 
          entradas de visitantes: ${error}` 
        })
    }
  
  }

  export const getResiEntryAction=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.GetEntryResit(info)
      if (res.completed) {
        dispatch({
          type:GET_ENTRY_RESIT_SUCCESS,
          payload:res.data.data
        })
      }else if(res.completed===false) {
        dispatch({
          type:GET_ENTRY_RESIT_ERROR,
          payload:res.error
        })
      } 
    } catch (error) {
      dispatch({
          type:GET_ENTRY_RESIT_ERROR,
          payload: `ha ocurrido un error al obtener los 
          entradas de ños residentes: ${error}` 
        })
    }
  
  }



  export const CreateEntryVist=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.IngresoVisitante(info)
  
      // const newData = getState().Parkings.parkingsResi.push(res.data.data)
      // console.log(newData)
      // console.log(getState())
      
      if (res.completed) {
        console.log('paso')
        
          const newState=JSON.parse(JSON.stringify(getState().entradas.entradasvis))
          newState.push(res.data.data)  
          // console.log(getState())
          // console.log(newState)
          dispatch({
            type: NEW_ENTRY_VISIT_SUCCESS,
            payload:{
              data:newState,
              type:'Visitante'
            }
              
          })
        
      }else if(res.completed===false) {
        dispatch({
          type:NEW_ENTRY_VISIT_ERROR,
          payload:res.error
          
        })
      } 
      
    } catch (error) {
        dispatch({
          type:NEW_ENTRY_VISIT_ERROR,
          payload: `ha ocurrido un error al crear entrada visitante : ${error}`
          
        })
    }
  }

  export const CreateEntryResi=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.IngresoResidente(info)
  
      // const newData = getState().Parkings.parkingsResi.push(res.data.data)
      // console.log(newData)
      // console.log(getState())
      
      if (res.completed) {
        console.log('paso')
        
          const newState=JSON.parse(JSON.stringify(getState().entradas.entradasvis))
          newState.push(res.data.data)  
          // console.log(getState())
          // console.log(newState)
          dispatch({
            type: NEW_ENTRY_RESIT_SUCCESS,
            payload:{
              data:newState,
              type:'Residente'
            }
              
          })
        
      }else if(res.completed===false) {
        dispatch({
          type:NEW_ENTRY_RESIT_ERROR,
          payload:res.error
          
        })
      } 
      
    } catch (error) {
        dispatch({
          type:NEW_ENTRY_RESIT_ERROR,
          payload: `ha ocurrido un error al crear entrada de residente : ${error}`
          
        })
    }
  }