import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    
    // function handleLinkClick(e) {
    //     e.preventDefault()
    //     onChangePage(e.target.pathname)
    // }
    
    return (
        <nav>
            <NavLink to="/" exact>Personal Information</NavLink>
            <NavLink to="/education" exact>Education Details</NavLink>
            <NavLink to="/skills" exact>Skills</NavLink>
            <NavLink to="/projects" exact>Projects</NavLink>
            <NavLink to="/languages" exact>Languages</NavLink>
        </nav>
    );
}

export default NavBar;