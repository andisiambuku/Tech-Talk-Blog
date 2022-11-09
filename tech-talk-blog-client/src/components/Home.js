import React from "react"
// import ArticleList from "./ArticleList"
import useFetch from "../hooks/useFetch"

function Home(){
    // const {data: articles, isPending, error} = useFetch('http://localhost:3001/articles');
    const {data: isPending,error} = useFetch(url);
    return(
        <div className="Home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            <div className="home-display">
                <h2 className="title">
                    All Posts
                </h2>
                {/* <ArticleList articles={articles}/> */}
            </div>
        </div>
    );
    
}


export default Home;