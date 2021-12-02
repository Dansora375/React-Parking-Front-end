import api from '../../../api/api';
import Swal from 'sweetalert2'

//const Swal = require('sweetalert2')
// Fase de prueba
export function submitApto (numeroApto, torre, neighborhood) {

    const newApto = {
        name: numeroApto,
        IdGroup: torre,
    }
    
    try {

        api.post(`/Home/${neighborhood}`, newApto)
        .then(res => console.log(res.data));

        Swal.fire({
            icon: 'success',
            title: 'El apartamento fue creado',
        })
        
    } catch (error) {
        console.log('ocurrio un error, ' + error)
    }

}