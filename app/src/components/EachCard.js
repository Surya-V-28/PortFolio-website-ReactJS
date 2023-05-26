
import React, { Component } from 'react'
import './WorkCardStyle.css'
class EachCard extends Component {
    render () {
  return (
    <div className='Project-each-container'>
    <div className='Project-card-container'>
            <div  className='project-each-image'>
                <img src='/ProjectImg.png' className='project-image-class' alt=''></img> 
            </div>
            <h3> {this.props.heading}</h3>
            <p>{this.props.description}</p>
            <div className='project-each-controllers'>
                <div className='project-each-view'>
                   <p>  view</p>
                </div>
                <div className='project-each-source'>
                   <p>source</p> 
                </div>
                
            </div>
    </div>
    </div>
  )
}
}

export default EachCard