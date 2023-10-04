
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import {useState} from "react";
import "./LoginPage.css"

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(ev) {
    ev.preventDefault();
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
    })
  }

  return (
    <div className="page-container" onSubmit={login}>
    <div className="content-wrap">
          <Navbar/>
          <form action="" className='login'>
            <h2>Login</h2>
            <input type='text'  placeholder='username' 
                                value={username} 
                                onChange={ev => setUsername(ev.target.value)}/>
            <input type='password'  placeholder='password' 
                                    value={password}
                                    onChange={ev => setPassword(ev.target.value)}/>
            <button>Login</button>
          </form>
      </div>
      <Footer/>
    </div>
  );
}