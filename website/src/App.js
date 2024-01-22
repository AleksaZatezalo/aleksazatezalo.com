import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogPage from "./Pages/BlogPage/BlogPage"
import HomePage from './Pages/AboutPage/HomePage';
import AboutPage from "./Pages/AboutPage/AboutPage"
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/LoginPage/Register';
import CreatePost from './Pages/CreatePage/CreatePost';
import EditPost from './Pages/EditPost/EditPost';
import { UserContextProvider } from './UserContext';
import './App.css';
import PostPage from './Pages/PostPage/PostPage';

function App() {
  return (
    <>
    
      <div>
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage/>} />
              <Route path="/blog" index element={<BlogPage/>} />
              <Route path="/about" index element={<AboutPage/>} />
              <Route path="/login" index element={<LoginPage/>}/>
              <Route path="/create" index element={<CreatePost/>}/>
              <Route path="/post/:id" index element={<PostPage/>}/>
              <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
        
    </div>
    </>
  );
}

export default App;
