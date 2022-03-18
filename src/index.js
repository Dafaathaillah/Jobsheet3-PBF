import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';
import ListImage from './component/ListImage';
import Footer from './component/Footer';
import Test from './container/Test';
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogPost from './container/BlogPost/BlogPost'
import ListMahasiswa from './container/Mahasiswa/ListMahasiswa'

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));
// ReactDOM.render(<ListImage />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('content'));
// ReactDOM.render(<Test />, document.getElementById('root'));

//Test Footer and List 
// ReactDOM.render(<Footer />, document.getElementById('root'));
// ReactDOM.render(<ListImage />, document.getElementById('root'));

//Test BlogPost
// ReactDOM.render(<BlogPost />, document.getElementById('content'));

 //Test Tugas
//  ReactDOM.render(<ListMahasiswa />, document.getElementById('content'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
