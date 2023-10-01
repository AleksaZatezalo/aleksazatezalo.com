
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function RegisterPage() {
  return (

    <div className="page-container">
    <div className="content-wrap">
          <Navbar/>
          <form action="">
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <button>Register</button>
          </form>
      </div>
      <Footer/>
    </div>
  );
}