import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import"./Navbar.css";

function Navbar() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Welcome to Aleksa's Site</h3>
            <nav ref={navRef}>
                <a href ="/#">Home</a>
                <a href ="/#">Blog</a>
                <a href ="/#">Aleksa's Work</a>
                <a href ="/#">About Aleksa</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;
