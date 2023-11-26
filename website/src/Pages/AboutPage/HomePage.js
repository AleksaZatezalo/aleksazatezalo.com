import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Preloader from "../../Components/Preloader/Preloader"
import React from 'react';
import About from '../../Components/About/About';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);
  
  return (
    <>
    <Preloader/>
    <Navbar/>
    <div className="page-container">
      <div className="content-wrap">
        <About/>
      </div>
      <Footer/>
    </div>
    </>
  );
}