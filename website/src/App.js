import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/AboutPage/HomePage';
import AboutPage from "./Pages/AboutPage/AboutPage"
import { UserContextProvider } from './UserContext';
import './App.css';

function App() {
  return (
    <>
    
      <div>
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage/>} />
              <Route path="/about" index element={<AboutPage/>} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
        
    </div>
    </>
  );
}

export default App;
