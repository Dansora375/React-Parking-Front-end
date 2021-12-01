import * as services from '../../services/parking.service'

// constants
const initialParkings={
  parkingsResi:[

  ],
  parkingsVisi:[

  ],
  parkingsResiMoreInfo:{

  },
  parkingsVisiMoreInfo:{

  },
  errors: {
    parkingsResi:"",
    parkingsVisi:""
  }
  
}

// types

// Obterner datos parkigns
const GET_RESI_PARKINGS_TO_ITEM_SUCCESS='GET_RESI_PARKINGS_TO_ITEM_SUCCESS'
const GET_VISI_PARKINGS_TO_ITEM_SUCCESS='GET_VISI_PARKINGS_TO_ITEM_SUCCESS'
const GET_RESI_PARKING_PARKINGS_ERROR='GET_RESI_PARKING_PARKINGS_ERROR'
const GET_VISI_PARKING_PARKINGS_ERROR='GET_VISI_PARKING_PARKINGS_ERROR'
// Crear parking
const CRAETE_NEW_PARKING_SUCCESS='CRAETE_NEW_PARKING_SUCCESS'
const CRAETE_NEW_PARKING_ERROR='CRAETE_NEW_PARKING_ERROR'
// Obterner mas info parkings
const GET_MORE_INF_PARKING_RESI_SUCCESS='GET_MORE_INF_PARKING_RESI_SUCCESS'
const GET_MORE_INF_PARKING_VISI_SUCCESS='GET_MORE_INF_PARKING_VISI_SUCCESS'


// reducer
export default function parkingReducer(state =initialParkings, action){

  switch(action.type){
    case GET_RESI_PARKINGS_TO_ITEM_SUCCESS:
      return {...state, parkingsResi:action.payload }

    case GET_RESI_PARKING_PARKINGS_ERROR:
       const ErrorrResi = {...state.errors, parkingsResi:action.payload.message}
      return {...state, parkingsResi:action.payload.error, errors:ErrorrResi}

    case GET_VISI_PARKINGS_TO_ITEM_SUCCESS:
      return {...state, parkingsVisi:action.payload }

    case GET_VISI_PARKING_PARKINGS_ERROR:
      const ErrorVisi = {...state.errors, parkingsVisi:action.payload.message}
      return {...state, parkingsVisi:action.payload.error, errors:ErrorVisi}

    case CRAETE_NEW_PARKING_SUCCESS:
      if(action.payload.type==='Residente'){
        return {...state, parkingsResi:action.payload.data}
      }else if(action.payload.type==='Visitante'){
        return {...state, parkingsVisi:action.payload.data}
      }else{
        break
      }
      case CRAETE_NEW_PARKING_ERROR:
        return {...state.errors, newParkingError:action.payload, }
        
      case GET_MORE_INF_PARKING_RESI_SUCCESS:
        return {...state, parkingsResiMoreInfo:action.payload }
        
      case GET_MORE_INF_PARKING_VISI_SUCCESS:
        return {...state, parkingsVisiMoreInfo:action.payload }

    default:
      return state
  }
}
// actions

// Obterner datos parkigns
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
        type:GET_RESI_PARKING_PARKINGS_ERROR,
        payload:{
          error:"error",
          message:res.error
        }
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_RESI_PARKING_PARKINGS_ERROR,
        payload:{
          error:"error",
          message: `ha ocurrido un error al obtener los 
          parquederos de residentes: ${error}` 
        }
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
        type:GET_VISI_PARKING_PARKINGS_ERROR,
        payload:{
          error:"error",
          message:res.error
        }
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_VISI_PARKING_PARKINGS_ERROR,
        payload: {
          error:"error",
          message: `ha ocurrido un error al obtener los 
          parquederos de visitantes: ${error}`
        }
      })
  }
}

// Create parking Visi or Resi

export const CreateParking=(info)=> async (dispatch, getState)=>{

  try {
    const res = await services.NewParking(info)
    if (res.completed) {
      // console.log('paso')
      if(res.data.data.personType==='Residente'){
        const newState=JSON.parse(JSON.stringify(getState().Parkings.parkingsResi))
        newState.push(res.data.data)  
        // console.log(getState())
        // console.log(newState)
        dispatch({
          type:CRAETE_NEW_PARKING_SUCCESS,
          payload:{
            data:newState,
            type:'Residente'
          }
        })
      }else if(res.data.data.personType==='Visitante'){
        const newState=JSON.parse(JSON.stringify(getState().Parkings.parkingsVisi))
        newState.push(res.data.data) 
         // console.log(getState())
        // console.log(newState)
        dispatch({
          type:CRAETE_NEW_PARKING_SUCCESS,
          payload:{
            data:newState,
            type:'Visitante'
          }
        })
      }
    }else if(res.completed===false) {
      dispatch({
        type:CRAETE_NEW_PARKING_ERROR,
        payload:res.error  
      })
    } 
  } catch (error) {
      dispatch({
        type:CRAETE_NEW_PARKING_ERROR,
        payload: `ha ocurrido un error al crear un parqueadero : ${error}`
        
      })
  }
}

// Obterner more info
export const getMoreInfoPkngResiAction=(info)=> async (dispatch, getState)=>{
  try {
    const res = await services.getMoreInfoParking(info)
    if (res.completed) {
      dispatch({
        type:GET_MORE_INF_PARKING_RESI_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_RESI_PARKING_PARKINGS_ERROR,
        payload:{
          error:"error",
          message:res.error
        }
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_RESI_PARKING_PARKINGS_ERROR,
        payload:{
          error:"error",
          message: `ha ocurrido un error al obtener el
          parquedero de residente: ${error}` 
        }
      })
  }

}



export const getMoreInfoPkngVisiAction=(info)=> async (dispatch, getState)=>{
  try {
    const res = await services.getMoreInfoParking(info)
    if (res.completed) {
      dispatch({
        type:GET_MORE_INF_PARKING_VISI_SUCCESS,
        payload:res.data.data
      })
    }else if(res.completed===false) {
      dispatch({
        type:GET_RESI_PARKING_PARKINGS_ERROR,
        payload:{
          error:"error",
          message:res.error
        }
      })
    } 
  } catch (error) {
    dispatch({
        type:GET_RESI_PARKING_PARKINGS_ERROR,
        payload:{
          error:"error",
          message: `ha ocurrido un error al obtener el
          parquedero de visitante: ${error}` 
        }
      })
  }

}
