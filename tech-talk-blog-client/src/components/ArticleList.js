import { Link } from "react-router-dom";
import React from "react";
const ArticleList = ({ articles }) => {
  return (
    <div className="p-8  divide-x divide-y grid grid-cols-4 gap-4">
      {articles.map((article) => (
        <div className="p-8 " key={article.id}>
          <h3 className="article-category">Category: {article.category}</h3>
          <Link to={`/articles/${article.id}`}>
            <h2 className="font-sans text-2xl text-gray-600 font-bold">
              {article.title}
            </h2>
          </Link>
          <h4>Written by {article.user_id}</h4>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
