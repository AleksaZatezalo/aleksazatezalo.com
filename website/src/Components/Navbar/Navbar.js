import {useRef} from "react";
import"./Navbar.css";

function Navbar() {
    const navRef = useRef();

    return (
        <header>
            <h3>Welcome to Aleksa's Website</h3>
            <nav ref={navRef}>
                <a href ="/">Blog</a>
                <a href ="/about">About Aleksa</a>
                <a href ="/login">Login</a>
            </nav>
            
        </header>
    );
}

export default Navbar;
