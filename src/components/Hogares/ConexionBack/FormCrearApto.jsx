import axios from 'axios';
import Swal from 'sweetalert2'

//const Swal = require('sweetalert2')
// Fase de prueba
export function submitApto (numeroApto, torre) {

    const newApto = {
        name: numeroApto,
        group: torre,
    }
    
    try {

        axios.post('http://localhost:4000/api/Home/619cc7d78011c2969719fedd', newApto)
        .then(res => console.log(res.data));

        Swal.fire({
            icon: 'success',
            title: 'El apartamento fue creado',
        })
        
    } catch (error) {
        console.log('ocurrio un error, ' + error)
    }

}