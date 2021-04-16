import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import {FireContext} from './context/fireContext';



ReactDOM.render(
  <>
  <FireContext value={firebase}>
    <GlobalStyles />
    <App />
  </FireContext>
  </>,
  document.getElementById('root')
);


