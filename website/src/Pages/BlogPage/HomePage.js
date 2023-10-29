import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Preloader from "../../Components/Preloader/Preloader"
import Post from '../../Components/Post/Post';
import './BlogPost.css'
export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);
  
  return (
    <>
    <Preloader/>
    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <h1>Aleksa Zatezalo's Blog</h1>
      {posts.length > 0 && posts.map(post => (
        <Post {...post}/>
      ))}
      </div>
      <Footer/>
    </div>
    </>
  );
}