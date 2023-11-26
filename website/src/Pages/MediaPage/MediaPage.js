import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Post from '../../Components/Post/Post';
export default function MediaPage() {
  return (
    <>
    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <h1>Aleksa's Media Work</h1>
      <h5>Add Cards Resume function</h5>
      <h5>Resume Upload function</h5>
      </div>
      <Footer/>
    </div>
    </>
  );
}