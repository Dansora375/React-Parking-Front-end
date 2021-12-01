import Service from "../../services/neighborhood.service";


// estado
const data = {

}

//constantes
const LIST_NBH_SUCCESS = 'LIST_NBH_SUCCESS'
const LIST_NBH_FAIL = 'LIST_NBH_FAIL'

//reducer
export default function neighborhoodReducer(state = data, action) {
  switch (action.type) {
    case LIST_NBH_SUCCESS:
      console.log(action.data)
      return {
        ...state,
        message: undefined,
        error: undefined,
        NBHList: action.data
      }
    case LIST_NBH_FAIL:
      return {
        ...state,
        message: action.message,
        error: action.error
      }
    default:
      return state
  }
}


// acciones
export const listNBHAction = () => async (dispatch, getState) => {
  try {
    
    const listaNBH = await Service.listNeighborhoods()
    
    const objectDispatch = {}
    if(!listaNBH.completed){
      objectDispatch.type = LIST_NBH_FAIL
      objectDispatch.message = 'Se presento un error al obtener la lista de conjuntos'
      objectDispatch.error = listaNBH.error
    }else {
      // si llega hasta aqui, los datos se obtuvieron con exito
      objectDispatch.type= LIST_NBH_SUCCESS
      objectDispatch.data = listaNBH.conjuntos.data
    }
    dispatch(objectDispatch)
  } catch (error) {
    dispatch({
      type: LIST_NBH_FAIL,
      error,
      message: 'Se presento un error al obtener la lista de conjuntos'
    })
  }
}