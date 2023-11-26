import React from 'react'
import "./header.css"
import CT from "./CT"
import ME from "../profile.jpg"
import HeaderSocials from './SummarySocials'
const Top = () => {
  return (
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aleksa Zatezalo</h1>
        <CT/>
        <div >
        <HeaderSocials/>

        </div>
      </div>
  )
}

export default Top