import * as services from '../../services/residente.service';

// constantes
const dataRes={
    residentes: [],
    residenteswithparking: []

}

const OBTENER_RESIDENTES_EXITO="OBTENER_RESIDENTES_EXITO"
const OBTENER_RESIDENTES_ERROR="OBTENER_RESIDENTES_ERROR"

const GET_RES_WITH_PARKING_SUCCESS = 'GET_RES_WITH_PARKING_SUCCESS';
const GET_RES_WITH_PARKING_ERROR = 'GET_RES_WITH_PARKING_ERROR';

const NEW_OWNER_SUCCESS = 'NEW_OWNER_SUCCESS';
const NEW_OWNER_ERROR = 'NEW_OWNER_ERROR';
//Reducer

export default function resReducer(state=dataRes,action) {
    switch (action.type) {

        case OBTENER_RESIDENTES_EXITO:
            return {...state, residentes:action.payload}
        case OBTENER_RESIDENTES_ERROR:
            return {...state, error:action.payload}
        case GET_RES_WITH_PARKING_SUCCESS:
            return {...state, residenteswithparking:action.payload}
        case GET_RES_WITH_PARKING_ERROR:
            return {...state, error:action.payload}
        case NEW_OWNER_SUCCESS:
            return state
        case NEW_OWNER_ERROR:
            return {...state, error:action.payload}
        default:
            return state
    }
}

//Acciones

export const GetResiwhitparkingAction=(info) =>async(dispatch,getState)=>{
    try{
    const res= await services.ResidentwithParking(info)

    if (res.completed) {

        dispatch({
            type: GET_RES_WITH_PARKING_SUCCESS,
            payload:res.data.data
    
        })

    } else if (res.complete===false) {

        dispatch({
            type: GET_RES_WITH_PARKING_ERROR,
            payload:res.error
    
        })

    }

    } catch (error) {

        dispatch({
        type: GET_RES_WITH_PARKING_ERROR,
        payload: `ha ocurrido un error ${error}` 
      })

    }
}

export const GetResidentsAction=(info) =>async(dispatch,getState)=>{
    try{
    const res= await services.Residents(info)

    if (res.completed) {

        dispatch({
            type: OBTENER_RESIDENTES_EXITO,
            payload:res.data.data
    
        })

    } else if (res.complete===false) {

        dispatch({
            type: OBTENER_RESIDENTES_ERROR,
            payload:res.error
    
        })

    }

    } catch (error) {

        dispatch({
        type: OBTENER_RESIDENTES_ERROR,
        payload: `ha ocurrido un error ${error}` 
      })

    }
}


export const NewOwner=(info) => async (dispatch, getState)=>{

      
    try {
        await services.NewOwner(info)
        
        
      } catch (error) {
          dispatch({
            type:NEW_OWNER_ERROR,
            payload: `ha ocurrido un error al ingresar un residente a un parqueadero : ${error}`
            
          })
      }
  }