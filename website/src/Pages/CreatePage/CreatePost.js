import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ReactQuill from "react-quill";
import Footer from '../../Components/Footer/Footer'
import 'react-quill/dist/quill.snow.css'
import {useContext, useState} from "react";
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const modules={  
    toolbar: [    
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  
        ['bold', 'italic', 'underline'],  
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],  
        [{ 'align': [] }],  
        ['link', 'image'],  
        ['clean'],  
        [{ 'color': [] }]

    ]  
  };

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]


export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    async function createNewPost(ev) {
        ev.preventDefault();
         const response = await fetch('http://localhost:4000/post', {
          method: 'POST',
          body: JSON.stringify({title, summary, content}),
          headers: {'Content-Type':'application/json'},
          credentials: 'include',
        });

        if (response.ok) {
            setRedirect(true);
        }
    
      }
    

    // Make Flex box fixed height..... 

    if (redirect) {
        return <Navigate to={'/blog'}/>
    }

    return (

        <div className="page-container">
                <div className="content-wrap">
                <Navbar/>
                    <form onSubmit={createNewPost}>
                        <input type="title" 
                                placeholder={"Title"} 
                                onChange={ev => setTitle(ev.target.value)}/>
                        <input type="summary"
                                placeholder={"Summary"}
                                value={summary}
                                onChange={ev => setSummary(ev.target.value)}/>
                        <ReactQuill value={content} 
                            onChange={newValue => setContent(newValue)} 
                            modules={modules} 
                            formats={formats}
                            />
                        <button style={{marginTop:'5px'}}>Create Post</button>
                    </form>
                </div>
    
            <Footer/>
        </div>
  
    );
}