import {useRef} from "react";
import"./Navbar.css";

function Navbar() {
    const navRef = useRef();

    return (
        <header>
            <h3>Welcome to Aleksa's Blog</h3>
            <nav ref={navRef}>
                <a href ="/#">Blog</a>
                <a href ="/#">About Aleksa</a>
            </nav>
            
        </header>
    );
}

export default Navbar;
