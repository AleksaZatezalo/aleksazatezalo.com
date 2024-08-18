import"./Navbar.css";
import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../../UserContext";

function Navbar() {
    const navRef = useRef();

    return (
        <header>
            <h3>Welcome to Aleksa's Website</h3>
            <nav ref={navRef}>
                <a href ="/about">About Aleksa</a> 
            </nav>
            
        </header>
    );
}

export default Navbar;
