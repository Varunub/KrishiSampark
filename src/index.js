import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {  
  BrowserRouter as Router
}   
from 'react-router-dom';  
import { Stateprovider } from './components/context/StateProvider';
import { initialState } from './components/context/initialState';
import reducer from './components/context/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Stateprovider initialState={initialState} reducer={reducer}>
      <App></App>
    </Stateprovider>
    </Router>
);


