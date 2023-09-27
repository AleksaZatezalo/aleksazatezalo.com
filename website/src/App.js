import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogPage from "./Pages/BlogPage"
import AboutPage from "./Pages/AboutPage"
import './App.css';

function App() {
  return (
    <>
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<BlogPage/>} />
            <Route path="/about" index element={<AboutPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
