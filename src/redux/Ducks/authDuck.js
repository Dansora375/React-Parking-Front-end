import authService from "../../services/authentication.service"
// constantes

const data = {
  
}

// tipos de acciones
const LOGUIN_WITH_EMAIL_SUCCESS = 'LOGUIN_WITH_EMAIL_SUCCESS'
const LOGUIN_WITH_EMAIL_FAIL = 'LOGUIN_WITH_EMAIL_FAIL'

const LOGIN_WITH_USER_SUCCESS = 'LOGIN_WITH_USER_SUCCESS'
const LOGIN_WITH_USER_FAIL = 'LOGIN_WITH_USER_FAIL'


// reducer, encargado de interactuar con los datos del reduc
export default function authReducer(state = data, action){
  switch (action.type) {
    case LOGUIN_WITH_EMAIL_SUCCESS:
      // console.log(action)
      return {...state,userData: {message: action.payload}}
    case LOGIN_WITH_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload // cargando los resultados al state
      }
    case LOGIN_WITH_USER_FAIL:
      return {
        ...state,
        loginFailM: action.message,
        error: action.error // si no se envia error, sera un valor undefined por lo que no existira
      }
    default:
      return state
  }
}


// acciones, estas son las que ejecutaran el reducer, y son las que se importan en cada zona del proyecto para ejecutar algun cambio o funcion

export const loginWithUserAction = (data) => async (dispatch, getState) => {
  try {
    const dataResult = await authService.loguinWithUser(data)
    const objectDispatch = {}
    // validando los resultados del service
    if(!dataResult.completeAuth){
      objectDispatch.type = LOGIN_WITH_USER_FAIL;
      objectDispatch.message = dataResult.message
      if(dataResult.error)
        objectDispatch.error = dataResult.error
    }else {
      objectDispatch.type = LOGIN_WITH_USER_SUCCESS;
      objectDispatch.payload = dataResult.data; // en data se guarda el resultado de la consulta
    }
    console.log(dataResult)

    // pasando el objeto al dispatch para que lo procese en el reducer
    dispatch(objectDispatch)

  } catch (error) {
    dispatch({
      type: LOGIN_WITH_USER_FAIL,
      error,
      message: 'Se presento un error en la ejecucion del action'
    })
    
  }
}

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