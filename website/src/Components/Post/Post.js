import {formatISO9075} from "date-fns"
import {Link} from "react-router-dom";

import "./Post.css"
export default function Post({title, summary,createdAt,content, _id}){
    return(
        <div className='post'>
      
        <div className='texts'>
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className='info'>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className='summary'>{summary}</p>
        </div>
      </div>
    );
}