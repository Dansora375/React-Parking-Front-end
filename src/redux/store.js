import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// importacion de los distintos modulos Reduce del store redux
import authReducer from './Ducks/authDuck'
import parkingReducer from './Ducks/parkingDuck'
import entradaReducer from './Ducks/EntradaDuck'

const rootReducer = combineReducers({
    // Agregando los modulos al store
    authentication: authReducer,
    Parkings:parkingReducer,
    Entradas:entradaReducer

})

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}
