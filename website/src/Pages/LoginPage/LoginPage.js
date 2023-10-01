
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./LoginPage.css"

export default function LoginPage() {
  return (

    <div className="page-container">
    <div className="content-wrap">
          <Navbar/>
          <form action="" className='login'>
            <h2>Login</h2>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <button>Login</button>
          </form>
      </div>
      <Footer/>
    </div>
  );
}