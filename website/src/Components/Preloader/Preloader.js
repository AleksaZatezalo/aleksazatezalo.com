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
            <span>Aleksa Zatezalo: Hacker, Developer, Researcher</span>
        </div>
    </div>
  )
}

export default Preloader