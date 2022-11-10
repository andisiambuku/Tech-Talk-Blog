import React,{ useState}  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';




function Article() {
    const [likeCount,setLikeCount] = useState(1);
    const [dislikeCount,setDislikeCount] = useState(0);
    const [activeBtn, setActiveBtn] = useState("none");
    
    const { id } = useParams();
   
    const { data: article,error,isPending } = useFetch(`http://localhost:9292/post/${id}`);
    const navigate = useNavigate();
    console.log(id)
    console.log(article)
    console.log(error)


    const handleClick = () =>{
        console.log(id)
        fetch('http://localhost:9292/posts/' + id,{
            method:'DELETE'
        })
        .then((res)=> res.json())
        .then(() => {
            navigate('/');
        })
    }
    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setLikeCount(likeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };
      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
          setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };
    
    return(
        <div className='article-detail'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article className='p-8'>
            
                <h3 className="text-1xl  text-gray-600 font-bold">Category: { article.category }</h3>
                <button className="bg-red-600 p-2 border border-gray-400 rounded-full text-white" onClick={handleClick}>Delete Article</button>
                <h2 className="text-3xl text-gray-600 font-bold text-center pb-4 font-sans">{ article.title }</h2>
                <h3 className="text-1xl text-gray-600 font-bold">Created On: { article.created_at }</h3>

                <p className='article-author'>Written by { article.user_id }</p>
                <div className='font-sans text-gray-600 pb-4'>{ article.content }</div>
          
               
  <div className="btn-container">
    <button
      className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
      onClick={handleLikeClick}
    >
      {likeCount} <span className="bg-gray-600 p-2 border border-gray-400 rounded-full mx-4 text-white">Like</span>
       
    </button>
 
    <button
      className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
      onClick={handleDisikeClick}
    >
      {dislikeCount}<span className="bg-pink-600 p-2 mx-4 border border-gray-400 rounded-full text-white">Dislike</span>
       
    </button>
  </div>
            </article>
            

        </div>
        
    );


}

export default Article;


