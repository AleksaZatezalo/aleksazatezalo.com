import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {formatISO9075} from "date-fns"


export default function PostPage(){
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
            });
        });
    }, []);

    if (!postInfo) return '';

    return (
    <div className="page-container">
        <div className="content-wrap">
            <Navbar/>
            <div className="post-page">
                <h1>{postInfo.title}</h1>
                <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
                <div style={{paddingLeft:'10rem'}} className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
            </div>
        </div>
        <Footer/>
    </div>
    
        
    );
}