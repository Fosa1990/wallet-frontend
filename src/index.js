import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components';
import Global from './globalStyles';
import './index.css';
// import './stylesheet/base.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
