import {useRef} from "react";
import {FaBars, FaTimes, FaGraduationCap, FaAws} from "react-icons/fa";
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
                        <h1>About Aleksa</h1>

                            <div class="profile">
                                <img
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
                                        <p>Started with Deloitte September 2021</p>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </div>     
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>

           
           

    );
}

export default About;