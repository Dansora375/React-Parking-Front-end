import * as services from '../../services/group.service';

// constants
const groups = {

    towers: []

}

// types
const GET_TOWERS_SUCCESS = 'GET_TOWERS_SUCCESS';
const GET_TOWERS_ERROR = 'GET_TOWERS_ERROR';

// Reducer
export default function groupReducer(state = groups, action) {
    switch (action.type) {

        case GET_TOWERS_SUCCESS:
            return {...state, towers:action.payload}
        case GET_TOWERS_ERROR:
            return {...state, error:action.payload}
        default:
            return state
    }
}

// Actions

export const getTowersAction=(info)=> async (dispatch, getState)=>{

    try {
      const res = await services.TowersorHouses(info)
      if (res.completed) {
        dispatch({
          type:GET_TOWERS_SUCCESS,
          payload:res.data.data
        })
      }else if(res.completed===false) {
        dispatch({
          type:GET_TOWERS_ERROR,
          payload:res.error
        })
      } 
    } catch (error) {
      dispatch({
          type:GET_TOWERS_ERROR,
          payload: `ha ocurrido un error al obtener las 
          torres del conjunto: ${error}` 
        })
    }
  
  }