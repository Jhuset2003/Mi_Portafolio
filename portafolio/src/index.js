import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Rou } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Rou>
      <App />
    </Rou>
  </React.StrictMode>,
  document.getElementById('root')
);

