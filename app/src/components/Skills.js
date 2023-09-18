


import React from 'react'
import './Skills.css'
import HeroImg from './HeroImg'
import Footer from './Footer'
import Herocard from './herocard'
const Skills = () => {
  return (
    <div className='containter-background'>
    <div className="parallax-container">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div className='main-content'>
    <div   className="title">
      <HeroImg></HeroImg>
    </div>
    <div className='herocard-in-main'>
      <Herocard></Herocard>
      </div>
    
    </div>
  </div>
  <Footer></Footer>
  </div>

  )
}

export default Skills