import React from "react";
import Planner from "../../assets/images/day-planner.PNG";
import Tracker from "../../assets/images/employee-tracker.PNG";
import Weather from "../../assets/images/weatherChecker.PNG";
import Password from "../../assets/images/passwordGenerator.PNG";
import Farmer from "../../assets/images/blue-sky-farmers.jpg";
import Jate from "../../assets/images/jate.PNG";
import Container from "react-bootstrap/Container";

function Projects() {
  return (
    <div>
      <Container>
        <h2>Workday Planner</h2>
        <a href="https://lischus.github.io/Day-Planner/">
          <img
            src={Planner}
            alt="Workday Planner"
            className="project-picture"
          ></img>
        </a>
        <h2>Employee Tracker</h2>
        <a href="https://github.com/Lischus/Employee-Tracker">
          <img
            src={Tracker}
            alt="Employee Tracker"
            className="project-picture"
          ></img>
        </a>
        <h2>Weather Checker</h2>
        <a href="https://lischus.github.io/WeatherChecker/">
          <img
            src={Weather}
            alt="Weather Checker"
            className="project-picture"
          ></img>
        </a>
        <h2>Password Generator</h2>
        <a href="https://lischus.github.io/PasswordGenerator/">
          <img
            src={Password}
            alt="Password Generator"
            className="project-picture"
          ></img>
        </a>
        <h2>Blue Sky Farmers Matchmaker</h2>
        <a href="https://radiant-caverns-76977.herokuapp.com/">
          <img src={Farmer} alt="Matchmaker" className="project-picture"></img>
        </a>
        <h2>Text Editor</h2>
        <a href="https://secure-citadel-32557.herokuapp.com/">
          <img src={Jate} alt="Text Editor" className="project-picture"></img>
        </a>
        <h2>Repositories</h2>
        <ul>
          <li>
            <a href="https://github.com/Lischus/Day-Planner">Day Planner</a>
          </li>
          <li>
            <a href="https://github.com/Lischus/Employee-Tracker">
              Employee Tracker
            </a>
          </li>
          <li>
            <a href="https://github.com/Lischus/WeatherChecker">
              Weather Checker
            </a>
          </li>
          <li>
            <a href="https://github.com/Lischus/PasswordGenerator">
              Password Generator
            </a>
          </li>
          <li>
            <a href="https://github.com/Lischus/Blue-Sky-Farmers">
              Blue Sky Farmer's Matchmaker
            </a>
          </li>
          <li>
            <a href="https://github.com/Lischus/Text-Editor">Text Editor</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Projects;
