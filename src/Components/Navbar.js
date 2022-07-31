import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    
    return (
        <nav>
            {/* <NavLink to="/" >Home</NavLink> */}
            <NavLink to="/personalinformation" >Personal Information</NavLink>
            <NavLink to="/education" >Education Details</NavLink>
            <NavLink to="/skills" >Skills</NavLink>
            <NavLink to="/projects" >Projects</NavLink>
            <NavLink to="/languages" >Languages</NavLink>
        </nav>
    );
}

export default NavBar;