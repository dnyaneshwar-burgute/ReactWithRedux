import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import { render } from 'react-dom';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);
