import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

// hooks react redux
// import {useDispatch, useSelector} from 'react-redux'



// importamos la acción
// import { loguinWithEmailAction } from './redux/Ducks/authDuck'



import MiniDrawer from './components/Drawer';

import { Hogares } from './views/Hogares/Hogares';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
    <div>
      {/* <ResponsiveDrawer></ResponsiveDrawer> */}

      <Router>
        
        <MiniDrawer contenido={
          <Switch>
            <Route path='/hogares'>
              <Hogares/>
            </Route>
          </Switch>
        }></MiniDrawer>

        
      </Router>
      
    </div>
    

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
