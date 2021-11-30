import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// importacion de los distintos modulos Reduce del store redux
import authReducer from './Ducks/authDuck'
import resReducer from './Ducks/residenteDuck'
import parkingReducer from './Ducks/parkingDuck'
import groupReducer from './Ducks/groupDuck'
import homeReducer from './Ducks/homeDuck'
import entradasReducer from './Ducks/entradaDuck'

const rootReducer = combineReducers({
    // Agregando los modulos al store
    authentication: authReducer,
    residentes: resReducer,
    groups: groupReducer,
    homes: homeReducer,
    entradas: entradasReducer,
    Parkings:parkingReducer

})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}