import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Preloader from "../../Components/Preloader/Preloader"
import './BlogPost.css'
export default function BlogPage() {
  return (
    <>
    <Preloader/>
    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <h1>Aleksa Zatezalo's Blog</h1>
      <div className='post'>
      
        <div className='texts'>
          <h2>Mow your god damn lawn</h2>
          <p className='info'>
            <a className='author'>Aleksa Zatezalo</a>
            <time>2023-09</time>
          </p>
          <p className='summary'>Hello. This is a post about mowing your lawn. Do it for the wamen.</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}