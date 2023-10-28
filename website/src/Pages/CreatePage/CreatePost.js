
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ReactQuill from "react-quill";
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
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className="content-wrap">
            <Navbar/>
            <form>
                <input type="title" placeholder={"Title"}/>
                <input type="summary" placeholder={"Summary"}/>
                <ReactQuill value={content} modules={modules} formats={formats} style={{marginBottpm:'50px'}}/>
                <button style={{marginTop:'5px'}}>Create Post</button>
            </form>
        </div>
    );
}