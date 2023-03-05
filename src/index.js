import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { firebaseConnection } from './lib/firebase.prod';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
