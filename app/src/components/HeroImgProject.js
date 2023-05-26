


import React, { Component } from 'react'
import './HeroImgProjectStyle.css'
class HeroImgProject extends Component {
   render () {
  return (
    <div className='HeroProject-Container'>
    <div className='HeroProject'>
        <div className='Mask-Background-Img'>
            <img src='/laptop-smartphone-desk-wallpaper-1680x1050_5.jpg' alt='Project-BackGround'></img>
        </div>
        <div className='HeroProject-Content-on-top-background'>
        <h className='HeroProject-title'>{this.props.heading}</h>
        <p> {this.props.textcontext}</p>
        </div>
    </div>
    </div>
  )
}
}

export default HeroImgProject