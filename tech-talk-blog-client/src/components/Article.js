import React,{ useState}  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';



function Article() {
    const [likeCount,setLikeCount] = useState(50);
    const [dislikeCount,setDislikeCount] = useState(50);
    const [activeBtn, setActiveBtn] = useState("none");
    
    const { id } = useParams();
   
    const { data: article,error,isPending } = useFetch(`http://localhost:9292/post/${id}`);
    const navigate = useNavigate();
    console.log(id)
    console.log(article)
    console.log(error)


    const handleClick = () =>{
        console.log(id)
        fetch('http://localhost:9292/post/' + id,{
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
            
                <h3 className="article-category">Category: { article.category }</h3>
                <h2 className="article-title">{ article.title }</h2>
                <h3 className="article-time">Created On: { article.created_at }</h3>

                {/* <p className='article-author'>Written by { article.author }</p> */}
                <div className='article-body'>{ article.content }</div>

                <button className="delete-button" onClick={handleClick}>Delete Article</button>
            </article>
            <div className="container">
  <div className="btn-container">
    <button
      className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
      onClick={handleLikeClick}
    >
      <span className="material-symbols-rounded">thumb_up</span>
      Like {likeCount}
    </button>
 
    <button
      className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
      onClick={handleDisikeClick}
    >
      <span className="material-symbols-rounded">thumb_down</span>
      Dislike {dislikeCount}
    </button>
  </div>
</div>;

        </div>
    );


}

export default Article;


