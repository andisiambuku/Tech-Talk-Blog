import React from "react";
import "./AddNewPost.css"
function AddNewPost(){
    return(
        <div className="wrapper">
            <card>
                <cardBody>
                <h3 className="cardTitle">Add New Post</h3>
                <form>
                    <div className="articleTitle">
                        <label className="articleTitleHead">Article Title:</label>
                        <input type="text"
                                id="title"
                                placeholder="Article Title"
                                className="inputArticle"
                                name="title"/>
                    </div>
                    <div className="articleAuthor">
                        <label className="authorHead">Article Author:</label>
                        <input type="text"
                                id="title"
                                placeholder="Article Author"
                                className="inputAuthor"
                                name="title"/>
                    </div>
                    <div className="articleBody">
                        <label className="articleBodyHead">Article Body:</label>
                        <input type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="inputBody"/>
                    </div>
                    <container>
                        <button type="submit" className="addBlog">Add Blog</button>
                    </container>

                </form>
                </cardBody>
            </card>
        </div>
    );
}
export default AddNewPost;