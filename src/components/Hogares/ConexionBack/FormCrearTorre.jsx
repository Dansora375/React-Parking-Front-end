import axios from 'axios';
import Swal from 'sweetalert2'

export function submitTorre (towerName, capacity) {

    const newTower = {
        name: towerName,
        capacity: capacity,
    }

    try {

        axios.post('http://localhost:4000/api/Group/61959890772790f8d28c7026', newTower)
        .then(res => console.log(res.data));

        Swal.fire({
            icon: 'success',
            title: 'La torre fue creada',
        })
        
    } catch (error) {
        console.log('ocurrio un error, ' + error)
    }

}