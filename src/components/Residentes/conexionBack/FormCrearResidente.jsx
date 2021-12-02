import api from '../../../api/api';
import Swal from 'sweetalert2'

//const Swal = require('sweetalert2')
// Fase de prueba
export default function submitOwner (Name, Cedula, telefono, Home) {

    const newApto = {
        name: Name,
        identification: Cedula,
        telephone: telefono,
        homeId: Home
    }
    
    try {

        api.post('/Owner/619cc7d78011c2969719fedd', newApto)
        .then(res => console.log(res.data));

        Swal.fire({
            icon: 'success',
            title: 'El Residente fue creado',
        })
        
    } catch (error) {
        console.log('ocurrio un error, ' + error)
    }

}