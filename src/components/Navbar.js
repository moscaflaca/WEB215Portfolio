import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div id="NavbarName">
      <nav id="navbar">

          <a href="#about">
            Diego B. Guijarro
          </a>
          &nbsp;
          &nbsp;  

          <a href="#projects">
            Past Work
             </a>
             &nbsp;
             &nbsp;  

          <a href="#skills">
            Skills      
             </a>
             &nbsp;
             &nbsp;  
              <a
                href="#contact"
                >
                Contact me
                </a>
              </nav>
      </div>
    </header>
  );
}