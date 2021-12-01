import LogoIcon from '../../components/icons/LogoIcon.svg'


import Form from './Formu'


// importaciones de mui
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


import { useDispatch, useSelector } from 'react-redux';

import { listNBHAction } from '../../redux/Ducks/neighborhoodDuck';



const Register = ()=> {
  
  // datos de conjuntos
	const dispatch = useDispatch()
  dispatch(listNBHAction())

  return (
    <Box sx={{
      display: 'block'
    }}>
      <Typography variant='h1' align='center' color= 'primary'>
        REACTPARKING SYSTEM
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
        <img src={LogoIcon}  alt="logo" />
        {/* <img src={logo1} className="App-logo1" alt="logo" /> */}
        
        <Form />
        
      </Box>
      <header className="App-header">
        
        
      </header>
    </Box>
    // <div className="App">
      
    // </div>
  );
}

export default Register;
