import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Front from './Components/Front';
import Inventions from './Components/Inventions';
import Add from './Components/Add';
import SignUp from './Components/SignUp';
import './App.css';
import Filter from './Components/Filter';

import SignIn from './Components/SignIn';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Front />} />
    //       <Route path="/Inventions" element={<Inventions />} />
    //       <Route path="/Add" element={<Add />} />
    //       <Route path="/Signup" element={<SignUp />} />
    //       <Route path="/SignIn" element={<SignIn />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      <Add/>
      <Filter/>
    </div>
  );
}

export default App;
