import React from 'react'

import LogoIcon from '../../components/icons/LogoIcon.svg'

import { Box } from '@mui/system';
import { TextField, Typography, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import './login.css'

// importacion de objetos para el formulario
import { useForm } from "react-hook-form";

//importacion de objetos para el redux
import { useDispatch, useSelector } from 'react-redux';
import { loginWithUserAction } from '../../redux/Ducks/authDuck'

// creando el form con algunos estilos predefinidos
const Formulario = styled('form')(({ theme }) => ({
  display: 'flex',
  width: '25%',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  // component: 'form',
}))

const Login = () => {

  const { register, handleSubmit } = useForm()

  //variables para uso del redux
  const dispatch = useDispatch()

  const loginSubmit = (data) => {
    dispatch(loginWithUserAction(data))
  }
  return (
    <Box sx={{display:  'block', padding: 0}}>
      <Typography variant='h1' align='center'>
        REACTPARKING SYSTEM
      </Typography>
      {/* <h1 >REACTPARKING SYSTEM</h1> */}
      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <div className = 'login-logo-div'>
          <img src={LogoIcon} className="login-logo" alt="logo" />
          {/* <img src={Logo} className="login-logo1" alt="logo" /> */}
        </div>

        <Formulario onSubmit={handleSubmit(loginSubmit)}>
          <TextField 
              label= 'Nombre de usuario'
              variant='standard'
              {...register('username')}
            />
            <TextField 
              variant='standard'
              label= 'Contraseña'
              type= 'password'
              {...register('password')}
            />
            <Button variant="contained" type='submit' >
              Confirmar
            </Button>
        </Formulario>
       
        {/* <Box
          sx={{
            display: 'flex',
            width: '25%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            component: 'form',
            onsu
          }}>
          <span/>
          <TextField 
            label= 'Nombre de usuario'
            variant='standard'
          />
          <TextField 
            variant='standard'
            label= 'Contraseña'
            type= 'password'
          />
          <Button variant="contained">
            Confirmar
          </Button>
          <span/>
        </Box> */}
      </Box>
      
    </Box>
    // <div className="App">
    //   <header className="App-header">
        
    //     <img src={ReactLogo} className="App-logo" alt="logo" />
    //     <img src={Logo} className="App-logo1" alt="logo" />
    //     {/* <div className="container">
    //         <Formu />
    //     </div> */}
    //   </header>
    // </div>
  )
}

export default Login
