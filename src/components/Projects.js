import React from "react";
import "./Projects.css"
import calculatorApp from "./data/projects/calculatorApp.png"
import Resume1 from "./data/projects/Resume1.png"
import Resume2 from "./data/projects/Resume2.png"
import Resume3 from "./data/projects/Resume3.png"
import RecipeManager from "./data/projects/RecipeManager.png"


export default function projects() {
    return (
      <section id="projects">
        <div>
          <div>
            <h1 id="ProjectsH">
              Projects:
              </h1>
             <h3 id="ProjectsH">These are some of the projects I've worked on in the past:</h3>
            <p> During my time as a Wake Tech student I have completed several projects
              to demonstrate my coding abilities. Here are a few that I would like to share
              with you.
            </p>
            <div>
                <h1 id="calculator-app-heading">
                  Calculator App made with react and node:
                </h1>
                <img id="calculatorApp" src={calculatorApp}></img>
            <p>
              This is a fully functional calculator I made for Web215 at 
              Wake Tech using react and node.
            </p>
            <h1>
              Resume Generator 
            </h1>
            <img id="Resume1" src={Resume1}></img>

            <br />
            <img id="Resume2" src={Resume2}></img>
            <br />
            <img id="Resume3" src={Resume3}></img>

            <p>This is a resume builder I created using Javascript, HTML and CSS 
              for Web 115 at Wake Tech.
            </p>
            <div>
            <h1>Recipe Manager</h1>
            <img id="RecipeManager" src={RecipeManager}></img>
            <p id="recipe">
              This was a small project made with node and react to build a recipe webpage
              for my Web 215 class. The goal of this assignment was to build familiarity and
              comfort with Node and React for more advanced projects in the future.
            </p>
            </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </section>
    );
  }