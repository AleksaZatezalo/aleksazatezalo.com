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
        <img src='https://cdn.shopify.com/s/files/1/0140/9374/6262/products/LM4_1366x1366_crop_center.png.webp?v=1622761499' alt="" className='featured-img'/>
        <div className='content'>
          <h2>Mow your god damn lawn</h2>
          <p>Hello. This is a post about mowing your lawn. Do it for the wamen.</p>
        </div>
      </div>

      <div className='post'>
        <img src='https://cdn.shopify.com/s/files/1/0140/9374/6262/products/LM4_1366x1366_crop_center.png.webp?v=1622761499' alt="" className='featured-img'/>
        <div className='content'>
          <h2>Mow your god damn lawn</h2>
          <p>Hello. This is a post about mowing your lawn. Do it for the wamen.</p>
        </div>
      </div>

      <div className='post'>
        <img src='https://cdn.shopify.com/s/files/1/0140/9374/6262/products/LM4_1366x1366_crop_center.png.webp?v=1622761499' alt="" className='featured-img'/>
        <div className='content'>
          <h2>Mow your god damn lawn</h2>
          <p>Hello. This is a post about mowing your lawn. Do it for the wamen.</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    </>
  );
}