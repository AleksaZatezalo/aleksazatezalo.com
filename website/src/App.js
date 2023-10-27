import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogPage from "./Pages/BlogPage/BlogPage"
import HomePage from './Pages/BlogPage/HomePage';
import AboutPage from "./Pages/AboutPage/AboutPage"
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/LoginPage/Register';
import './App.css';

function App() {
  return (
    <>
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/blog" index element={<BlogPage/>} />
            <Route path="/about" index element={<AboutPage/>} />
            <Route path="/login" index element={<LoginPage/>}/>
            <Route path="/register" index element={<RegisterPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
