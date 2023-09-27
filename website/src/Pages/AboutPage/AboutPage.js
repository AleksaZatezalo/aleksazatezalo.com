import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';
import Footer from '../../Components/Footer/Footer';

export default function AboutPage() {
  return (

    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <About/>
      </div>
      <Footer/>
    </div>
  );
}