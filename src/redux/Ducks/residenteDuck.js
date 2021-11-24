import axios from 'axios'

// constantes
const dataRes={
    residentes:[]

}
const OBTENER_RESIDENTES_EXITO="OBTENER_RESIDENTES_EXITO"
//Reducer

export default function resReducer(state=dataRes,action) {
    switch (action.type) {
        case OBTENER_RESIDENTES_EXITO:
            return {...state,residentes:action.payload}
            
            
    
        default:
            return state
    }
}

//Acciones

export const obtenerResAction=() =>async(dispatch,getState)=>{
    try{
    const res= await axios.get("")

    dispatch({
        type:  OBTENER_RESIDENTES_EXITO,
        payload:res.data.residentes


    })

    } catch (error){
        console.log(error)

    }
}