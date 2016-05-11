import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import styles from './sass/styles.scss';
import WebFonts from './web-fonts';
import App from './components/App';

// Provider is a required top-level component wrapper for Redux with React.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
