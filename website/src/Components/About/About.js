import {useRef} from "react";
import {FaBars, FaTimes, FaGraduationCap, FaAws} from "react-icons/fa";
import {GiConwayLifeGlider} from "react-icons/gi"
import {faTwitter, faMedium, faGithub, faGooglePlay, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css'
import"./About.css";
import profile from "./profile.jpg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
    return (
        <div>

            <div className='container'>

                    <div className="row">
                        <div className="column">
                        <h1 className>About Aleksa</h1>

                            <div class="profile">
                                <img className="profile"
                                    src={profile}
                                    alt="Profile">
                                </img>
                            </div>
                            <div className="row">
                                
                                <p className>
                                            Aleksa Zatezalo is a cyber security reasercher & penetration tester.
                                            You can find out about his latest reaserch and security projects here.
                                            Outside of cyber security, Aleksa competes in jiu jitsu and enjoys jazz. <br />
                                </p>
                            </div>

                            </div>
                        <div className="column">
                            <div className="experiance" width='100px'> 
                            <VerticalTimeline lineColor="#5767aa">
                                    <VerticalTimelineElement className="vertical-timeline-element--education" 
                                    iconStyle={{background:'#29335C', color:'#fff'}} 
                                    icon={<FaGraduationCap
                                    date='2016-2021'/>}>
                                        <h3>Got a Bacholers of Computer Science </h3>
                                        <p>University of Toronto 2016 to 2021</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement className="vertical-timeline-element--education" 
                                    iconStyle={{background:'#29335C', color:'#fff'}} 
                                    icon={<FaGraduationCap
                                    date='2020'/>}>
                                        <h3>Obtained the CEHv10</h3>
                                        <p>Finished in December 2020</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement className="vertical-timeline-element--education" 
                                    iconStyle={{background:'#29335C', color:'#fff'}} 
                                    icon={<FaAws
                                    date='2021'/>}>
                                        <h3>Became a Cloud Security Analyst</h3>
                                        <p>Started at Deloitte September 2021</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement className="vertical-timeline-element--education" 
                                    iconStyle={{background:'#29335C', color:'#fff'}} 
                                    icon={<GiConwayLifeGlider
                                    date='2022'/>}>
                                        <h3>Started Hacking</h3>
                                        <p>January 2022</p>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </div>     
                        </div>
                    </div>
                    
                </div>
                <div className="singleCol social-media-icons d-flex justify-content-evenly">
                        <a href="https://twitter.com/ZatezaloAleksa">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://aleksazatezalo.medium.com/">
                            <FontAwesomeIcon icon={faMedium} />
                        </a>
                        <a href="https://github.com/AleksaZatezalo">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://play.google.com/store/apps/developer?id=Aleksa+Zatezalo">
                            <FontAwesomeIcon icon={faGooglePlay} />
                        </a>
                        <a href="https://www.linkedin.com/in/aleksa-zatezalo-39a891150/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCs3htMGLR720HXC3jBNWGxA">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                </div>
            </div>

           
           

    );
}

export default About;