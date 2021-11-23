import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

// hooks react redux
// import {useDispatch, useSelector} from 'react-redux'



// importamos la acción
// import { loguinWithEmailAction } from './redux/Ducks/authDuck'

import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider} from '@mui/material/styles'
import themes from './themes/themes'
import {darkTheme} from './themes/muiThemes'
import MiniDrawer from './components/Drawer';

import { Hogares } from './views/Hogares/Hogares';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Parking from './views/Parking/Parking';

function App() {

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
        <MuiThemeProvider theme={darkTheme}>
        <ThemeProvider theme={themes['dark']}>
        <MiniDrawer contenido={
          <Switch>
            <Route path='/hogares'>
              <Hogares/>
            </Route>
            <Route path='/Parqueadero'>
              <Parking/>
            </Route>
          </Switch>
        }></MiniDrawer>

        </ThemeProvider>
        </MuiThemeProvider>
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
