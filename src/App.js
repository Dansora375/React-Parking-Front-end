// import './App.css';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

// hooks react redux y su manejo
import {useDispatch, useSelector} from 'react-redux'
import watch from 'redux-watch'
import store from './redux/createdStore'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider} from '@mui/material/styles'
import themes from './themes/themes'
import {darkTheme} from './themes/muiThemes'
import MiniDrawer from './components/Drawer';

import { Hogares } from './views/Hogares/Hogares';
// importamos la acción
// import { loguinWithEmailAction } from './redux/Ducks/authDuck'

import MiniDrawer from './components/layout/Drawer';
import { Hogares } from './views/Hogares/Hogares';
import { Residentes } from './views/Residentes/Residentes';
import {Entrada} from './views/Entrada/Entrada';
// import {Register} from './views/Registro/Register';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import themes from './themes/themes';
import {darkTheme} from './themes/muiThemes';
import Parking from './views/Parking/Parking';

// import {Register} from './views/Registro/Register';

import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

import { useEffect } from 'react'
import Parking from './views/Parking/Parking';

function App() {
  // iniciando las variables de history y location para navegacion programatica
  const location = useLocation()
  const history = useHistory()
  const userData = useSelector(state => state.authentication.userData)
  useEffect(()=>{
    // validando que el usuario esta logueado
    if(!userData){
      history.push('/login')
    }
    console.log('hola')
  },[location])

  
  const watchUserData = watch(store.getState,'authentication.userData')

  store.subscribe(watchUserData((newVal, oldVal, pathObject)=>{
    if(newVal){
      // si entro un nuevo valor, al userData, se procedera al login
      history.push('/')
    }
  }))

  // const dispatch = useDispatch()

  // const authentication = useSelector(store=>store.authentication.userData)
  return (
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> 
    //     {/* <button onClick={()=> dispatch(loguinWithEmailAction("Hey"))}>
    //       {authentication.message}
    //     </button> */}
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     {/* <BrowserRouter>
    //       <Link to='/hogares' 
    //         className="App-link" 
    //         target="_blank" 
    //         rel="noopener noreferrer">
    //           Hogares
    //       </Link>
    //     </BrowserRouter>

    //     <Routes>
    //       <Route path='/hogares'>
    //         <Hogares/>
    //       </Route>
    //     </Routes> */}

    //   </header>
    // </div>
    <>
      {/* <ResponsiveDrawer></ResponsiveDrawer> */}

      <Router>

        
        
        <MiniDrawer contenido={
          <MuiThemeProvider theme={darkTheme}>
          <ThemeProvider theme={themes['dark']}>
            <Switch>
              <Route path='/hogares'>
                <Hogares/>
              </Route>
              <Route path='/residentes'>
                <Residentes/>
              </Route>
              <Route path='/entradas'>
                <Entrada/>
              </Route>
              <Route path='/Parqueadero'>
                <Parking/>
              </Route>
              <Route path='/entrada'>
                <Parking/>
              </Route>
            </Switch>
          </ThemeProvider>
          </MuiThemeProvider>
        }></MiniDrawer>
        
      </Router>
      
    </>
    

    // <Router>
    //   <Link to='/hogares'>
    //     hogares
    //   </Link>

    //   <Switch>
    //       <Route path="/hogares" exact>
    //         <Hogares />
    //       </Route>
          
    //     </Switch>
    // </Router>
  );
}

export default App;
