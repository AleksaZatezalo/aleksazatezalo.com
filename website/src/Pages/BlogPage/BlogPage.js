import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Post from '../../Components/Post/Post';
import './BlogPost.css'
export default function BlogPage() {
  return (
    <>
    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <h1>Aleksa Zatezalo's Blog</h1>
      <Post/>
      <Post/>
      <Post/>
      </div>
      <Footer/>
    </div>
    </>
  );
}