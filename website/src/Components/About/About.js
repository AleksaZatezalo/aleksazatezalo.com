import {useRef} from "react";
import {FaBars, FaTimes, FaGraduationCap, FaAws} from "react-icons/fa";
import"./About.css";
import profile from "./profile.jpg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
    return (
        <div>
            <h1>About Aleksa</h1>

            <div className='container'>
                    <div class="profile center">
                            <img
                                src={profile}
                                alt="Profile">
                            </img>
                        </div>
                            <p className="center">
                                Aleksa Zatezalo is a cyber security reasercher & penetration tester. <br />
                                You can find out about his latest reaserch and security projects here. <br />
                                Outside of cyber security, Aleksa competes in jiu jitsu and enjoys jazz. <br />
                            </p>
                    <div className="experiance center" width='100px'> 
                          <VerticalTimeline lineColor="#000">
                                <VerticalTimelineElement className="vertical-timeline-element--education" 
                                iconStyle={{background:'#000', color:'#fff'}} 
                                icon={<FaGraduationCap
                                date='2016-2021'/>}>
                                    <h3>Computer Science</h3>
                                    <p>The University of Toronto</p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement className="vertical-timeline-element--education" 
                                iconStyle={{background:'#000', color:'#fff'}} 
                                icon={<FaGraduationCap
                                date='2020'/>}>
                                    <h3>Obtained the CEHv10</h3>
                                    <p>EC-Council</p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement className="vertical-timeline-element--education" 
                                iconStyle={{background:'#000', color:'#fff'}} 
                                icon={<FaAws
                                date='2021'/>}>
                                    <h3>Cloud Security Analyst</h3>
                                    <p>Deloitte</p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>     
                </div>
                
            </div>

           
           

    );
}

export default About;