import {useEffect, useRef, useState} from "react";
import"./Navbar.css";

function Navbar() {
    const navRef = useRef();
    const [username, setUsername] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUsername(userInfo.username);
            })
        })
    }, []);

function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
  }


    return (
        <header>
            <h3>Welcome to Aleksa's Website</h3>
            <nav ref={navRef}>
            
                <a href ="/blog">Blog</a>
                <a href ="/about">About Aleksa</a>
                {!username && (
                    <>
                        <a href ="/login">Login</a>
                    </>
                )}
                {username && (
                    <>
                        <a href ="/create">Wright A New Post</a>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                
            </nav>
            
        </header>
    );
}

export default Navbar;
