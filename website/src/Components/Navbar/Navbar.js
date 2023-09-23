import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    return (
        <header>
            <h3>Logo</h3>
            <nav>
                <a href ="/#">Home</a>
                <a href ="/#">My Work</a>
                <a href ="/#">Blog</a>
                <a href ="/#">About Me</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <FaBars/>
        </header>
    );
}

export default Navbar;
