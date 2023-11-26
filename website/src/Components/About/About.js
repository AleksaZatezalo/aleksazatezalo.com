import {useRef} from "react";
import {FaBars, FaTimes, FaGraduationCap, FaAws, FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi"
import {GiConwayLifeGlider} from "react-icons/gi"
import {faTwitter, faMedium, faGithub, faGooglePlay, faLinkedinIn, faYoutube, faSpotify} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css'
import"./About.css";
import ME from "./profile.jpg";
import {VscFolderLibrary} from "react-icons/vsc"
import Experiance from "../Experiance/Experiance";
import Services from "./servises/Services"
import Contact from "./contact/Contact"
import Top from "./Header/Header"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
    return (
        <div>
            <Top/>

            <div className='container'>
            <section id="about">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
                <div className='container about__container'>
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="About Me" className="profile"/>
                        </div>
                    </div>
                    <div className='about__contnet'>
                        <div className="about__cards">
                            <article className='about__card'>
                                <FaAward className='about__icon'/>
                                <h5>Experiance:</h5>
                                <small>1+ Years</small>
                            </article>
                            <article className='about__card'>
                                <FiUsers className='about__icon'/>
                                <h5>Clients:</h5>
                                <small>2</small>
                            </article>
                            <article className='about__card'>
                                <VscFolderLibrary className='about__icon'/>
                                <h5>Projects:</h5>
                                <small>2</small>
                            </article>
                        </div>
                        <p>Aleksa is a Cloud Security Consultant. He has  a passion for Penetration Testing, Web and Mobile Development, and Secure Software Architecture. In his spare time he enjoys CTF Challanges, and trying to creating nerual networks that will secure Web Applications in the cloud.</p>
                            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                    </div>
                </div>
                <Experiance/>
            </section>
                    
                </div>
                <Services/>
                <Contact/>
            </div>

           
           

    );
}

export default About;