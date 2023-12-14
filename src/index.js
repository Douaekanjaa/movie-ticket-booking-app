import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './compenants/reducers/store'; 
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename='/movie-ticket-booking-app'>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
