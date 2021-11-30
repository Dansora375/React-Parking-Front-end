import Swal from 'sweetalert2';
import api from '../../../api/api';

// Fase de prueba
export function submitTorre (towerName, capacity) {

    const newTower = {
        name: towerName,
        capacity: capacity,
    }

    try {

        api.post('/Group/619cc7d78011c2969719fedd', newTower)
        .then(res => console.log(res.data));

        Swal.fire({
            icon: 'success',
            title: 'La torre fue creada',
        })
        
    } catch (error) {
        console.log('ocurrio un error, ' + error)
    }

}