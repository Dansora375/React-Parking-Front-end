import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '././../../views/Registro/FormStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '././../../views/Registro/Input';

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

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
			nombre.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true' &&
			correo2.valido === 'true' &&
			cedula.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarUsuario({campo: '', valido: ''});
			cambiarNombre({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});
			cambiarCorreo({campo: '', valido: null});
			cambiarCorreo2({campo: '', valido: null});
			cambiarCedula({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>
			{/* //numero de identificacion */}
			<Input
					estado={cedula}
					cambiarEstado={cambiarCedula}
					tipo="text"
					label=""
					placeholder="Numero de Identificacion"
					name="cedula"
					leyendaError="El cedula solo puede contener numeros y el maximo son 10 dígitos y minimo 7."
					expresionRegular={expresiones.cedula}
				/>
			{/* //nombre */}
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label=""
					placeholder="Nombre"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
			{/* usuario */}
				<Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label=""
					placeholder="Usuario"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.usuario}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label=""
					placeholder="Correo Electrónico"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={correo2}
					cambiarEstado={cambiarCorreo2}
					tipo="email"
					label=""
					placeholder="Repetir Correo Electrónico"
					name="correo2"
					leyendaError="Ambos correos deben ser iguales."
					funcion={validarCorreo2}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label=""
					placeholder="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					tipo="password"
					label=""
					placeholder="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>



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
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	)
}

export default Formu
