import "./Post.css"
export default function Post(){
    return(
        <div className='post'>
      
        <div className='texts'>
          <h2>Mow your god damn lawn</h2>
          <p className='info'>
            <a className='author'>Aleksa Zatezalo</a>
            <time>2023-09</time>
          </p>
          <p className='summary'>Hello. This is a post about mowing your lawn. Do it for the wamen.</p>
        </div>
      </div>
    );
}