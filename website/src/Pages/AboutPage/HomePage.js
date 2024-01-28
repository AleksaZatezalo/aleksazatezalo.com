import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Preloader from "../../Components/Preloader/Preloader"
import React from 'react';
import About from '../../Components/About/About';

export default function HomePage() {
  
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