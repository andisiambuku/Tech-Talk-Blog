import React, { useState } from 'react';
import "./AddNewPost.css"
import { useNavigate } from 'react-router-dom';


function AddNewPost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending,setisPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) =>  {
        e.preventDefault();
        const article ={ title, body, author };
        setisPending(true);

        fetch('http://localhost:9292/post',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(article)
        })
        .then((res)=> res.json())
        .then(()=>{
            setAuthor('');
            setBody('');
            setTitle('');
            setisPending(false);
            navigate('/');
        })
    }


    return(
        <div className="wrapper">


                <h3 className="cardTitle">Add New Post</h3>
                <form onSubmit={handleSubmit}>
                    <div className="articleTitle">
                        <label className="articleTitleHead">Article Title:</label>
                        <input type="text"
                                id="title"
                                placeholder="Article Title"
                                className="inputArticle"
                                name="title"

                                onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="articleAuthor">
                        <label className="authorHead">Article Author:</label>
                        <input type="text"
                                id="title"
                                placeholder="Article Author"
                                className="inputAuthor"
                                name="title"
                                onChange={(e)=>setAuthor(e.target.value)}
                                />
                    </div>
                    <div className="articleBody">
                        <label className="articleBodyHead">Article Body:</label>
                        <input type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="inputBody"
                                onChange={(e) => setBody(e.target.value)}

                                />
                    </div>
                    <container>
                        <button type="submit" className="addBlog">Add Blog</button>
                    </container>

                </form>

        </div>
    );
}
export default AddNewPost;
