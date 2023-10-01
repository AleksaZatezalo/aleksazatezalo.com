
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';
import Footer from '../../Components/Footer/Footer';

export default function LoginPage() {
  return (

    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <h1>Login</h1>
      </div>
      <Footer/>
    </div>
  );
}