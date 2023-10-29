import {formatISO9075} from "date-fns"
import "./Post.css"
export default function Post({title, summary,createdAt,content, author}){
    return(
        <div className='post'>
      
        <div className='texts'>
          <h2>{title}</h2>
          <p className='info'>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className='summary'>{summary}</p>
        </div>
      </div>
    );
}