import React from 'react'
import "./experiance.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experiance = () => {
    return (
        
        <section id='experiance'>
            <h5>What Skills I Have</h5>
            <h2>My Experiance</h2>
            <div className='container experiance__container'>
                <div className='experiance__cloudSec'>
                    <h3> Cloud Security</h3>
                    <div className="experiance__content">
                       
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>DevSecOps</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                            
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>Security Strategy</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                            
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>Zero Trust</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                           
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>Penetration Testing</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                            
                        </article>
                    </div>

                </div>
                <div className='experiance__backend'>
                <h3> Backend Development</h3>

                <div className="experiance__content">
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>Microsoft Azure</h4>
                                <small className='text-light'>Experainced</small>
                            </div>
                            
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>GCP</h4>
                                <small className='text-light'>Experainced</small>
                            </div>
                            
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>AWS</h4>
                                <small className='text-light'>Experainced</small>
                            </div>
                            
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>Android Application Dev</h4>
                                <small className='text-light'>Experainced</small>
                            </div>
                            
                        </article>
                       
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>Full Stack Web Dev</h4>
                                <small className='text-light'>Experainced</small>
                            </div>
                            
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details-icon '/>
                            <div>
                                <h4>Artificial Intelligence</h4>
                                <small className='text-light'>Begginer</small>
                            </div>
                        </article>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Experiance