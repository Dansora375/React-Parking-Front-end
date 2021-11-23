import React from 'react'

import ReactLogo from '../../components/icons/logo.svg'
import Logo from '../../components/icons/car_logo.svg'
// import { display } from '@mui/system';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

const login = () => {
  return (
    <Box sx={{display:  'block'}}>
      <h1>REACTPARKING SYSTEM</h1>
      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <img src={ReactLogo} className="App-logo" alt="logo" />
          <img src={Logo} className="App-logo1" alt="logo" />
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            component: 'form'
          }}>
          <TextField variant='outlined'></TextField>
        </Box>
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

export default login
