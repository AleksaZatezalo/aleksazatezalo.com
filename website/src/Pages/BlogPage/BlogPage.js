import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Post from '../../Components/Post/Post';
import Pagenation from '../../Components/Pagenation/Pagenation'
import './BlogPost.css'

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const sleep = ms => new Promise(r => setTimeout(r, ms));


  // Change page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="page-container">
    <div className="content-wrap">
      <Navbar/>
      <h1>Aleksa Zatezalo's Blog</h1>
      {currentPosts.length > 0 && currentPosts.map(post => (
        <Post {...post}/>
      ))}
              
      </div>
      <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      <Footer/>
    </div>

  );
}