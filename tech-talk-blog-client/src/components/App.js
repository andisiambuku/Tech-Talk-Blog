import React from "react";
import Home from "./Home.js"
import About from "./About.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import AddNewPost from "./AddNewPost.js"
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={< Header />} />
        <Route path="/about" element={< About />} />
        <Route path="/addnew" element={<AddNewPost />} /> 
        <Route path="/footer" element={<Footer />} /> 
        {/* <Route path="articles/:id" element={<Article />} /> */}

      </Routes>
      <Footer />
    </div>
      
  );
}

export default App;
