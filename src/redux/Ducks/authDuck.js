// constantes

const data = {
  userData : { message: 'hola mundo'}
}

// tipos de acciones
const LOGUIN_WITH_EMAIL_SUCCESS = 'LOGUIN_WITH_EMAIL_SUCCESS'
const LOGUIN_WITH_EMAIL_FAIL = 'LOGUIN_WITH_EMAIL_FAIL'


// reducer, encargado de interactuar con los datos del reduc
export default function authReducer(state = data, action){
  switch (action.type) {
    case LOGUIN_WITH_EMAIL_SUCCESS:
      // console.log(action)
      return {...state,userData: {message: action.payload}}
    default:
      return state
  }
}


// acciones, estas son las que ejecutaran el reducer, y son las que se importan en cada zona del proyecto para ejecutar algun cambio o funcion
export const loguinWithEmailAction = (data) => async (dispatch, getState) => {
  // esta funcion no esta completa, porfavor
  try {
    // console.log(data)
    dispatch({
      type: LOGUIN_WITH_EMAIL_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.error(`${error}`)
  }
}