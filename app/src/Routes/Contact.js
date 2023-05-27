import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject'
import Form from '../components/Form'

const Contact = () => {
  

  return (
    <>
    <NavBar></NavBar>
      <HeroImgProject heading="Contact." textcontext="Lets Have A Chat"></HeroImgProject>
      <Form></Form>
     <Footer/>
   
    </>
   
  )
}

export default Contact