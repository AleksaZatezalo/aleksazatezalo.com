import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export default function BlogPage() {
  return (

    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <h1>Blog</h1>
      </div>
      <Footer/>
    </div>
  );
}