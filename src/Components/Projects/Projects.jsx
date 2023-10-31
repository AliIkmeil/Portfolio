import React from 'react'
import "./Projects.css"
import WashMyRide  from "./WashMyRide imoji.png"
import KhalekBdarak from "./Supermarket-E-Logo.webp"
import { useNavigate } from 'react-router-dom'
const Projects = () => {
const navigate = useNavigate()
  return ( <div class="slider">
  <span id="slide-1"></span>
  <span id="slide-2"></span>
  <div class="image-container">
    

    <img src="https://cdn.dribbble.com/users/479967/screenshots/2838999/comp_1_9.gif" className="slide washMyRide" onClick={()=>{navigate("/washMyRide")}}/>
    
    <img src={KhalekBdarak} className="slide khallekBdarak" onClick={()=>{navigate("/khalekBdarak")}} />
  </div>
  <div class="buttons">
    <a href="#slide-1"></a>
    <a href="#slide-2"></a>
  </div>
</div>
  )
}

export default Projects