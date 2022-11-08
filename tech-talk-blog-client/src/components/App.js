import React from "react";
import Home from "./Home.js"
import About from "/About.js"
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/addnew" element={<AddNew />} /> 
        {/* <Route path="articles/:id" element={<Article />} /> */}

      </Routes>
      <Footer />
    </div>
      
  );
}

export default App;
