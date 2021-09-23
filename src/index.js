import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
// import { alerts, accordion, badge, breadcrumb, buttons, buttonGroup, cards, carousel, dropdowns, forms, inputGroup, images, figures, jumbotron, listGroup, modal, navs, navbar, overlays, pagination, popovers, progress, spinners, table, tables, tooltips, toasts } from 'bootstrap'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
