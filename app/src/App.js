
import './App.css';
import './index.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About.js';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element ={<Home />} />
          <Route excat path="/about" element ={<About/>} />
          <Route exact path="/project" element ={<Project/>}  />
          <Route excat path= "/contact" element = {<Contact />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
