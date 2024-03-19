import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
// import Register from './Components/Register';
import Front from './Components/Front';
import Inventions from './Components/Inventions';
import Add from './Components/Add';

function App() {
  return (
    <div>
    <Add/>
    <Inventions />
    </div>
  );
}

export default App;
