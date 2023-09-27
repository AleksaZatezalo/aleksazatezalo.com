import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../../Animations';

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, []);
  return (
    <div className='preloader'>
        <div className='text-container'>
            <span>Aleksa Zatezalo: </span>
            <span>Hacker, </span>
            <span>Developer, </span>
            <span>Consultant.</span>
        </div>
    </div>
  )
}

export default Preloader