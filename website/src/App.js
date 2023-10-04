import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogPage from "./Pages/BlogPage/BlogPage"
import AboutPage from "./Pages/AboutPage/AboutPage"
import LoginPage from './Pages/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <>
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<BlogPage/>} />
            <Route path="/about" index element={<AboutPage/>} />
            <Route path="/login" index element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
