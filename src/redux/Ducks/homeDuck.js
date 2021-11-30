import * as services from '../../services/home.service';

// Constants
const homes = {

    apartmentByTower: []

}

// Types
const GET_APTO_TOWER_SUCCESS = 'GET_APTO_TOWER_SUCCESS';
const GET_APTO_TOWER_ERROR = 'GET_APTO_TOWER_ERROR';

// Reducer
export default function homeReducer(state = homes, action) {
    switch (action.type) {

        case GET_APTO_TOWER_SUCCESS:
            return {...state, apartmentByTower:action.payload}
        case GET_APTO_TOWER_ERROR:
            return {...state, error:action.payload}
        default:
            return state
    }
}

// Actions

export const getApartmentByTowerAction=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.apartmentofTower(info)
      if (res.completed) {
        dispatch({
          type:GET_APTO_TOWER_SUCCESS,
          payload:res.data.data
        })
      }else if(res.completed===false) {
        dispatch({
          type:GET_APTO_TOWER_ERROR,
          payload:res.error
        })
      } 
    } catch (error) {
      dispatch({
          type:GET_APTO_TOWER_ERROR,
          payload: `ha ocurrido un error al obtener los 
          apartamentos filtrados por torre: ${error}` 
        })
    }
  
  }