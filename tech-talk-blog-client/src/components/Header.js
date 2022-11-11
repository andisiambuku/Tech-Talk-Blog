import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="Header">
        <h1 className="Logo">Tech Talk Blog</h1>
        <div className="Links">
          <NavLink className={"home"} to="/">
            Home
          </NavLink>
          <NavLink className={"about"} to="/about">
            About
          </NavLink>
          <NavLink className={"addnewpost"} to="/addnewpost">
            Add New Post
          </NavLink>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src={require("./tech.jpeg")} alt=".." />
        </div>
        <div class="column">
          <img src={require("./talk.jpeg")} alt=".." />
        </div>
        <div class="column">
          <img src={require("./languages.png")} alt=".." />
        </div>
      </div>

      {/* <div className="image">
        <img src={require("./tec.jpg")} className="image" alt="..." />
      </div> */}
      <br></br>
      <br></br>
    </div>
  );
}
export default Header;
