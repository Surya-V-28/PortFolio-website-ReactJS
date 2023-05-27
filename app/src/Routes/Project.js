import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject'
import WorkCard from '../components/WorkCard'
const Project = () => {
  return (
    <>
      <NavBar />
      <HeroImgProject  heading="projects." textcontext="projects i recently worked on"/>
      <WorkCard></WorkCard>
      <Footer></Footer>
    </>
  )
}

export default Project