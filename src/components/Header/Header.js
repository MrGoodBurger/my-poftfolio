import React from "react";
import "./Header.css"

function Header(){
    return(
        <header className="header-container">
            <nav className="nav-container">
                <p>Home</p>
                <p>About Me</p>
                <p>Projects</p>
                <p>Contact Me</p>
            </nav>
        </header>
    )
};

export default Header;