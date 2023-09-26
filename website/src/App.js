import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

function App() {
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

export default App;
