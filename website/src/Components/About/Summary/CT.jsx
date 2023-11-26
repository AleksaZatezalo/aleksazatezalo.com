import React from 'react'
import CV from "../profile.jpg"
import "./header.css"
const CT = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}

export default CT