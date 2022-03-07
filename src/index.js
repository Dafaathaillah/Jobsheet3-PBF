import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';
import ListImage from './component/ListImage';

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));
// ReactDOM.render(<ListImage />, document.getElementById('root'));
// ReactDOM.render(<HeaderFooter />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
