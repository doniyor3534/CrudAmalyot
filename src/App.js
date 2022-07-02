
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About/About'
import Frame8 from './Frame 8/Frame_8'
import Frame9 from './Frame 9/Frame_9'

function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/shop' element={<About/>}></Route>
           <Route path='/frame8' element={<Frame8/>}></Route>
           <Route path='/frame9' element={<Frame9/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
