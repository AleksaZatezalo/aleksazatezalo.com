import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BlogPage from "./Pages/BlogPage/BlogPage"
import HomePage from './Pages/BlogPage/HomePage';
import AboutPage from "./Pages/AboutPage/AboutPage"
import LoginPage from './Pages/LoginPage/LoginPage';
import EditPost from './Pages/EditPage/EditPage';
import RegisterPage from './Pages/LoginPage/Register';
import CreatePost from './Pages/CreatePage/CreatePost';
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
              <Route path="/register" index element={<RegisterPage/>}/>
              <Route path="/create" index element={<CreatePost/>}/>
              <Route path="/post/:id" index element={<PostPage/>}/>
              <Route path="/edit/:id" index element={<EditPost/>}/>
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
        
    </div>
    </>
  );
}

export default App;
