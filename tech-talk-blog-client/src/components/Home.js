import React from "react"
import ArticleList from "./ArticleList"
import useFetch from "../hooks/useFetch"

function Home(){
    const {data: articles, isPending, error} = useFetch('http://localhost:9292/');
    
    return(
        <div className="Home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            <div className="home-display">
                <h2 className="text-3xl text-gray-600 font-bold text-center pb-4 font-sans">
                    All Posts
                </h2>
                <ArticleList articles={articles}/>
            </div>
        </div>
    );
    
}


export default Home;