import Swal from 'sweetalert2';
import api from '../../../api/api';

// Fase de prueba
export function submitTorre (towerName, capacity, neighborhood) {

    const newTower = {
        name: towerName,
        capacity: capacity,
    }

    try {

        api.post(`/Group/${neighborhood}`, newTower)
        .then(res => console.log(res.data));

        Swal.fire({
            icon: 'success',
            title: 'La torre fue creada',
        })
        
    } catch (error) {
        console.log('ocurrio un error, ' + error)
    }

}