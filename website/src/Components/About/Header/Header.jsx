import React from 'react'
import "./header.css"
import CT from "./CT"
import ME from "../profile.jpg"
import HeaderSocials from './HeaderSocials'
const Top = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aleksa Zatezalo</h1>
        <h5 className='text-light'>Cloud Security Expert</h5>
        <CT/>
        <HeaderSocials/>
        <div >
          <img src={ME} className='me' alt="me"/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Top