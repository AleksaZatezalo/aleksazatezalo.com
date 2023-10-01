
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./RegisterPage.css"

export default function RegisterPage() {
  return (

    <div className="page-container">
    <div className="content-wrap">
          <Navbar/>
          <form className="register" action="">
            <h2>Register</h2>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <button>Register</button>
          </form>
      </div>
      <Footer/>
    </div>
  );
}