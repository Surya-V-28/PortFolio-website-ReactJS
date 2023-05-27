
import { NavLink } from 'react-router-dom'
import './AboutContentStyle.css'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='About-Page-Container'> 
    <div className='About-page-parent-container'>
    <div className='About-left-info'>
     <h1> Who am I ? </h1>
     <p > 
     Surya, a computer science and mathematics graduate from Christ University . Passionate about AI, ML, 
     and software development. Eager to apply my skills and knowledge to create innovative solutions.
      Committed to making a positive impact in the field of technology through continuous learning and development.
     </p>
     <NavLink  to='/contact' className='Hover-effect-in-about-page'>
     <div className='About-Left-Controller-to-contact'>
       Contact 
     </div>
     </NavLink>
    </div>
    <div className='About-Right-image-stack'>
        <div className='About-stack-image-parent'>
            <img src='/mobile.jpeg' alt='imageone' className='image-one'>
            </img>
            <img  src='/AiandMi.jpeg'  className='image-two' alt='imagetwo'></img>
             <img src='/clodimg.jpeg' alt='' className='imagethree'></img>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AboutContent