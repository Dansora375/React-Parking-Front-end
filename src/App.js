import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
// import {Hogares} from './views/Hogares/Hogares.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <BrowserRouter>
          <Link to='/hogares' 
            className="App-link" 
            target="_blank" 
            rel="noopener noreferrer">
              Hogares
          </Link>
        </BrowserRouter>

        <Routes>
          <Route path='/hogares'>
            <Hogares/>
          </Route>
        </Routes> */}

      </header>
    </div>
  );
}

export default App;
