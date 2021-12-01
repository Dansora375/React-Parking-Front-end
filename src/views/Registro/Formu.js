import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './FormStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

import { FormHelperText } from  '@mui/material'

import {Select, MenuItem} from '@mui/material';
import { Box } from '@mui/system';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useForm,FormProvider } from 'react-hook-form';
import { Link as link, useHistory } from 'react-router-dom';
import { Link, Alert } from '@mui/material';

import { registerAction } from '../../redux/Ducks/authDuck';

import store from '../../redux/createdStore'
import watch from 'redux-watch';

import { listNBHAction } from '../../redux/Ducks/neighborhoodDuck';


const Formu = () => {
	const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [correo2, cambiarCorreo2] = useState({campo: '', valido: null});
	const [cedula, cambiarCedula] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	// const [ neighborhood, setNeighborhood] = useState('')




	// variables de manejo de validacion por Cristian Ramirez
	const [errorMessage, setErrorMessage] = useState('')
	const [hasError, setHasError] = useState(false)

	// redux action
	const dispatch = useDispatch()
	


	const methods=useForm({})
	const { register, handleSubmit ,errors } = methods;

	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,20}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{8,14}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		cedula: /^\d{7,10}$/ // 7 a 14 numeros.
	}
	const validarCorreo2 = () => {
		if(correo.campo.length > 0){
			if(correo.campo !== correo2.campo){
				cambiarCorreo2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarCorreo2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}
	const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}
	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	// datos de conjuntos
	
	// dispatch(listNBHAction())
	// useEffect(()=> {
		
	// },[])
  
	const submitRegister = (data) => {
		console.log(data)
		const validation = validarRegister(data)
		if(validation){
			dispatch(registerAction(data))
		}
	}


	
  const NBH = useSelector(state =>state.neighborhood.NBHList)

	const validarRegister = (data) => {
		try{
			if(data.correo != data.correo2){
				setErrorMessage('Los correos deben coincidir')
				setHasError(true)
				return false;
			}
			if(data.password != data.password2){
				setErrorMessage('Las contraseñas deben coincidir')
				setHasError(true)
				return false;
			}

			setErrorMessage('')
			setHasError(false)
			return true
		}catch(error){
			return false
		}
	}

	const history = useHistory()
  const watchUserData = watch(store.getState,'authentication.userData')

	store.subscribe(watchUserData((newVal, oldVal, pathObject)=>{
    if(newVal){
      // si entro un nuevo valor, al userData, se procedera al login
      history.push('/')
    }
  }))

	return (
		<main>
			<>
				{
					hasError &&
					<Alert severity='error'>{errorMessage}</Alert>
				}
			</>

			<FormProvider {...methods}>
				<Formulario onSubmit={handleSubmit(submitRegister)}>
					{/* //numero de identificacion */}
					<Input
						estado={cedula}
						// cambiarEstado={cambiarCedula}
						tipo="text"
						label=""
						placeholder="Numero de Identificacion"
						name="cedula"
						// registry ={...register('identification')}
						
						leyendaError="El cedula solo puede contener numeros y el maximo son 10 dígitos y minimo 7."
						expresionRegular={expresiones.cedula}

						validaciones={{required:'Es obligatorio el numero de identificacion'}}
					/>

					

					{/* //nombre */}
					<Input
						estado={nombre}
						// cambiarEstado={cambiarNombre}
						tipo="text"
						label=""
						placeholder="Nombre"
						name="usuario"
						{...register('name')}
						
						leyendaError="El nombre solo puede contener letras y espacios."
						expresionRegular={expresiones.nombre}


						validaciones={{required:'Es obligatorio el nombre'}}
					/>
					{/* usuario */}
					<Input
						estado={usuario}
						// cambiarEstado={cambiarUsuario}
						tipo="text"
						label=""
						placeholder="Usuario"
						name="usuario"
						{...register('username')}
						leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
						expresionRegular={expresiones.usuario}

						validaciones= {{required: 'El nombre de usuario es obligatorio'}}
					/>
					
					<Input
						estado={correo}
						// cambiarEstado={cambiarCorreo}
						tipo="email"
						label=""
						placeholder="Correo Electrónico"
						name="correo"
						// {...register('email')}
						validaciones= {{required: 'email is required', pattern:{value:/^\S+@\S+$/i,message:'This is not valid email'}}}
						leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
						expresionRegular={expresiones.correo}
					/>
					<Input
						estado={correo2}
						// cambiarEstado={cambiarCorreo2}
						tipo="email"
						label=""
						placeholder="Repetir Correo Electrónico"
						name="correo2"
						
						leyendaError="Ambos correos deben ser iguales."
						funcion={validarCorreo2}
					/>

					<Input
						estado={password}
						// cambiarEstado={cambiarPassword}
						tipo="password"
						label=""
						placeholder="Contraseña"
						
						name="password"
						leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
						expresionRegular={expresiones.password}


						validaciones={{required:'El dato de la contraseña es obligatorio', minLength:{
							value: 6,
							message: 'La contraseña debe tener minimo 6 caracteres	'
						}}}
						// error ={
						// 	// console.log(errors)
						// 	errors.password && <p>{errors.password.message}</p>
						// }
					/>
					
					<Input
						estado={password2}
						// cambiarEstado={cambiarPassword2}
						tipo="password"
						label=""
						placeholder="Repetir Contraseña"
						name="password2"
						leyendaError="Ambas contraseñas deben ser iguales."
						funcion={validarPassword2}

						validaciones={{
							required:'Debe proporcionarse la segunda contraseña para poder validar los datos'
						}}
					/>

					<FormHelperText>
						Escoja el barrio al cual pertenece
					</FormHelperText>
					<Select
						// value={neighborhood}
						{...register('neighborhood', {required: 'el conjunto es obligatorio'})}
						// onChange={changeNeighborhood}
					>
						{ NBH && NBH.map((barrio, index) => (
							<MenuItem key={index} value={barrio._id}> {barrio.name}</MenuItem>
						))}
					</Select>



					<ContenedorTerminos>
						<Label>
							<input 
								className="checkbox"
								type="checkbox"
								name="terminos"
								id="terminos"
								for='checkbox'
								checked={terminos} 
								onChange={onChangeTerminos}	
							/>
							Acepto los Terminos y Condiciones
						</Label>
					</ContenedorTerminos>
					{formularioValido === false && <MensajeError>
						<p>
							<FontAwesomeIcon icon={faExclamationTriangle}/>
							<b>Error:</b> Por favor rellena el formulario correctamente.
						</p>
					</MensajeError>}
					<ContenedorBotonCentrado>
						<Boton>Enviar</Boton>
						{formularioValido && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
					</ContenedorBotonCentrado>
				</Formulario>
				<div>
					Ya tienes una cuenta?  
					<Link to={"/register"}  component={link} sx={{maxWidth: '100%'}}>{' Ingresa aqui'}</Link>
				</div>
			</FormProvider>
		</main>
	)
}

export default Formu
