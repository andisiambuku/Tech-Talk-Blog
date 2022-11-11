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
      <br></br>
      <br></br>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" div="images">
            <img src={require("./tec.jpg")} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src={require("./languages.png")}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src={require("./tech.jpeg")} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Header;
