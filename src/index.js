import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import { render } from 'react-dom';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
 );
