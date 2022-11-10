import React  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';



function Article() {
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
    return(
        <div className='article-detail'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article className='p-8'>
            <button className="delete-button" onClick={handleClick}>Delete Article</button>
                <h3 className="article-category">Category: { article.category }</h3>
                <h2 className="article-title">{ article.title }</h2>
                <h3 className="article-time">Created On: { article.created_at }</h3>

                {/* <p className='article-author'>Written by { article.author }</p> */}
                <div className='article-body'>{ article.content }</div>
                
            </article>

        </div>
    );


}

export default Article;


