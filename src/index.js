import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Login from './Login';
import Register from './Register';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />} > </Route>
          <Route path="/home" element={<App />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
