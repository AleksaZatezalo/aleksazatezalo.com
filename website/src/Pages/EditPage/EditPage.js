import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import ReactQuill from "react-quill";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

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


export default function EditPost() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
  
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/post/'+id} />
  }

  return (

    <div className="page-container">
                <div className="content-wrap">
                <Navbar/>
                  <form onSubmit={updatePost}>
                    <input type="title"
                      placeholder={'Title'}
                      value={title}
                      onChange={ev => setTitle(ev.target.value)} />
                    <input type="summary"
                        placeholder={'Summary'}
                        value={summary}
                        onChange={ev => setSummary(ev.target.value)} />
                   <ReactQuill value={content} 
                            onChange={newValue => setContent(newValue)} 
                            modules={modules} 
                            formats={formats}
                            />
                    <button style={{marginTop:'5px'}}>Update post</button>
                  </form>
                </div>
            <Footer/>
        </div>
    
  );
}