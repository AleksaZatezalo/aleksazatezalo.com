import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Preloader from "../../Components/Preloader/Preloader"
import Post from '../../Components/Post/Post';
import './BlogPost.css'
export default function HomePage() {
  return (
    <>
    <Preloader/>
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