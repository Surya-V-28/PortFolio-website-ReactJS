
import React from 'react'
import './WorkCardStyle.css'
import EachCard from './EachCard'
const WorkCard = () => {
  return (
    <div className='Work-Card-Container'>

       <EachCard heading='Second card' description='next second card'
        ></EachCard>
        <EachCard heading='Second card1' description='next 3second card'
        ></EachCard>
        <EachCard heading='Second card2' description='next 2second card'
        ></EachCard>
        <EachCard heading='Second card3' description='next 4second card'
        ></EachCard>
        
        
    </div>
  )
}

export default WorkCard