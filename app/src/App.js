
import './App.css';
import './index.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from './Routes/Home';
import About from './Routes/About.js';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import Skills from './components/Skills';
import GlowButton from './components/GlowButton';
import SlideNavBar from './components/SlideNavBar';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element ={<SlideNavBar
          />} />
          <Route excat path="/about" element ={<About/>} />
          <Route exact path="/project" element ={<Project/>}  />
          <Route excat path= "/contact" element = {<Contact />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
