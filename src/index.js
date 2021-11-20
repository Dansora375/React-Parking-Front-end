import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './views/authentication/login';
import {Hogares} from './views/Hogares/Hogares';


import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { createStore } from 'redux';

import generateStore from './redux/store'

const store = generateStore()

ReactDOM.render(

  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
      </Switch>
    </Router>
    
  </Provider>,
  document.getElementById('root')
);
