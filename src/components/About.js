import React from "react";
import "./About.css";
import headshot from "./data/headshot.png";

export default function About() {
    return (
      <section id="about">
        <div id="introduction">
          <div>
            <h1 id="DBG">
              Diego B. Guijarro
            </h1>
            <h3>
              Web Content Specialist
            </h3>
            <div>
            <img id="face" src={headshot}></img>
          </div>
          <h5>
            About me
          </h5>
            <p id="Greetings">
              Greetings, reader! My name is Diego B. Guijarro. 
              I am enrolled in the web developer program at Wake Tech. 
              I graduated from NC State University with a major in Communication and a 
              minor in Spanish language. Currently I work for the NC State Department
              of Natural and Cultural Resources as a web content specialist. I also work 
              part time at Beth Meyer Synagogue as a production assistant. I am passionate
              for learning about web design, coding, history, and cultures. 
            </p>
            <div id= "SeeMy">
              <a
                href="#contact"
                >
                Contact me
              </a>
              <br />
              <a 
                href="#projects">
                See My Past Work
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }
  