
import React, { Component } from 'react'
import './WorkCardStyle.css'
class EachCard extends Component {
    render () {
  return (
    <div className='Project-each-container'>
    <div className='Project-card-container'>
            <div  className='project-each-image'>
                <img src={this.props.imgs} className='project-image-class' alt=''></img> 
            </div>
            <h3> {this.props.heading}</h3>
            <p className='project-description-p-style'>{this.props.description}</p>
            <div className='project-each-controllers'>
             
                <div className='project-each-view-controller'>
                <a href={this.props.linkveiw}  className="project-each-veiw-link" target="blank" style={{color:'black'}}>
                     view
                     </a>
                </div>
                
                
                <div className='project-each-source-controller'>
                <a href={this.props.sourceCode} target="blank" className="project-each-source-link" style={{color:'black'}}>
                   source
                   </a>
                </div>
                
                
            </div>
    </div>
    </div>
  )
}
}

export default EachCard