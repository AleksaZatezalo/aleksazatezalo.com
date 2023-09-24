import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import"./About.css";
import profile from "./profile.jpg";

function About() {
    return (
        <div>
            <h1>About Me</h1>
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
        </div>
        
        
    );
}

export default About;