import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Register from './Register';



//Routes of App
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
          <Route path="/home" element={<App />} > </Route>
          <Route path="*" element={<Register />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
