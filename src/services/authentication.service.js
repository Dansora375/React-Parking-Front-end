import api from '../api/api'


export default {
  loguinWithUser: async (data) => {
    const {
      username,
      password
    } = data

    if(!username || !password)
      return { message: 'Debe proporcionar el usuario y la contraseña'}
    try {
      const loginConsulta = await api.post('/authentication/signin',{
        username,
        password
      })

      return { completeAuth: true, data: loginConsulta}
    } catch (error) {
      return { message: 'Ha ocurrido un error en la ejecucion de la consulta', error}
    }
  },
  register: async (data) => {
    try{
      const registerConsulta = await api.post('/authentication/signup',data)
      // console.log(registerConsulta.data)
      return registerConsulta.data
    } catch(error) {
      return {message: 'Ha ocurrido un error en la ejecucion de la consulta', error}
    }
  }
}