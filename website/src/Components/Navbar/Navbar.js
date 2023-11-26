import"./Navbar.css";
import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../../UserContext";

function Navbar() {
    const navRef = useRef();
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
            setUserInfo(userInfo);
            });
        });
    }, []);

function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
  }

  const username = userInfo?.username;

    return (
        <header>
            <h3>Welcome to Aleksa's Website</h3>
            <nav ref={navRef}>
                <a href ="/about">About Aleksa</a> 
                <a href ="/blog">Blog</a>
                <a href ="/media">Media</a>
                {!username && (
                    <>
                        <a href ="/login">Login</a>
                    </>
                )}
                {username && (
                    <>
                        <a href ="/create">Add Post</a>
                        <a href ="/create">Add Media</a>
                        <a href ="/create">Add Stats</a>
                        <a href="/blog" onClick={logout}>Logout</a>
                    </>
                )}
                
            </nav>
            
        </header>
    );
}

export default Navbar;
