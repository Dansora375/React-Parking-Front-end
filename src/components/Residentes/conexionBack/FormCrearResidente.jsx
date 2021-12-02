import api from '../../../api/api';
import Swal from 'sweetalert2'

//const Swal = require('sweetalert2')
// Fase de prueba
export default function submitOwner (Name, Cedula, telefono, Home, neighborhood) {

    const newApto = {
        name: Name,
        identification: Cedula,
        telephone: telefono,
        homeId: Home
    }
    
    try {

        api.post(`/Owner/${neighborhood}`, newApto)
        .then(res => console.log(res.data))
        .catch(
            reason => console.log(reason)
        );

        Swal.fire({
            icon: 'success',
            title: 'El Residente fue creado',
        })
        
    } catch (error) {
        console.log('ocurrio un error, ' + error)
    }

}