

import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
    <>
    <NavBar></NavBar>
    <HeroImgProject heading="About." textcontext="Tech is my soul's fuel."></HeroImgProject>
    <AboutContent></AboutContent>
    <Footer />
    </>
  )
}

export default About