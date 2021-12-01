import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Login from './views/authentication/login';
import Register from './views/Registro/Register'
import NoMatch from './views/NoMatch/NoMatch';
// import {Hogares} from './views/Hogares/Hogares'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider} from '@mui/material/styles'

import themes from './themes/themes'
import {darkTheme} from './themes/muiThemes'



import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import { createStore } from 'redux';

// import generateStore from './redux/store'
import store from './redux/createdStore'

// const store = generateStore()

ReactDOM.render(
  <MuiThemeProvider theme={darkTheme}>
  <ThemeProvider theme={themes['dark']}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path={["/signin","/login"]}>
            <Login />
          </Route>
          <Route path={["/signup", "/register"]}>
            <Register/>
          </Route>
          <Route path='*'>
            <NoMatch/>
          </Route>
        </Switch>
      </Router> 
    </Provider>
  </ThemeProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
