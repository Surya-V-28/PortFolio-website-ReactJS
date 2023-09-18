import React from 'react'
import { FaGithub,FaGoogle,FaLinkedin,FaHackerrank } from'react-icons/fa'

import './SocialMedia.css'
const SocialMedia = () => {
  return (
    <div>
        <div class="wrapper">
        <div class="twitter holder">
            <span class="icon"><FaLinkedin></FaLinkedin></span>
            <span class="tooltip">Twitter</span>
        </div>
        <div class="github holder">
            <span class="icon"><FaGithub ></ FaGithub></span>
            <span class="tooltip">Github</span>
        </div>
        <div class="reddit holder">
            <span class="icon"><FaGoogle></FaGoogle></span>
            <span class="tooltip">Google</span>
        </div>
        <div class="facebook holder">
            <span class="icon"><FaHackerrank></FaHackerrank></span>
            <span class="tooltip">LeetCode</span>
        </div>
    </div>

    </div>
  )
}

export default SocialMedia