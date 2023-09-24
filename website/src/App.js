import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About
 from './Components/About/About';
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <About/>
    </React.Fragment>
  );
}

export default App;
