import React from "react";
import ArticleList from "./ArticleList";
import useFetch from "../hooks/useFetch";
import Cards from "./Cards";
import { useEffect, useState } from "react";

function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:9292/");

  const [languages, setLanguages] = useState([]);

  const baseUrl = "https://guarded-fjord-13649.herokuapp.com/tech";

  const productFetcher = () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLanguages(data);
      });
  };

  useEffect(productFetcher, []);

  let cards = languages.map((language) => (
    <Cards
      image={language.image}
      title={language.title}
      category={language.category}
      description={language.description}
      key={language.id}
    />
  ));

  //   const allTech = setTech.map((techObject) => {
  //     return <Cards key={techObject.id} tech={techObject} />;
  //   });

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="home-display">
        <h2 className="title">All Posts</h2>
        <ArticleList articles={articles} />
      </div>
      <div className="row">{cards}</div>
    </div>
  );
}

export default Home;
