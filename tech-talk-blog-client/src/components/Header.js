import React from "react";
import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header(){
    return(
        <div className="Header">
            <h1 className="Logo">Tech Talk Blog</h1>
            <div className="Links">
            <NavLink className={"home"} to="/">Home</NavLink>
            <NavLink className={"about"} to="/about">About</NavLink>
            <NavLink className={"addnewpost"} to="/addnewpost">Add New Post</NavLink>
            </div>
        </div>
    );
}
export default Header;