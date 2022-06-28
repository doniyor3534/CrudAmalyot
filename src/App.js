
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';


function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
