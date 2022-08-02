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
        <h3>Description</h3>
        <p>
          An application to help organize your workday! Type in each box what
          you have to do for the hour! As time passes the boxes will change
          color accordingly just to make organization that little bit easier!
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>Javascript</li>
        </ul>
        <h3>Repository</h3>
        <a href="https://github.com/Lischus/Day-Planner">Day Planner</a>
        <h2>Employee Tracker</h2>
        <a href="https://github.com/Lischus/Employee-Tracker">
          <img
            src={Tracker}
            alt="Employee Tracker"
            className="project-picture"
          ></img>
        </a>
        <h3>Description</h3>
        <p>
          An application to help organize your employees! Organize your
          employees based on their department, salary, and other factors as
          well!
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>MySQL</li>
        </ul>
        <h3>Repository</h3>
        <a href="https://github.com/Lischus/Employee-Tracker">
          Employee Tracker
        </a>
        <h2>Weather Checker</h2>
        <a href="https://lischus.github.io/WeatherChecker/">
          <img
            src={Weather}
            alt="Weather Checker"
            className="project-picture"
          ></img>
        </a>
        <h3>Description</h3>
        <p>
          An application to check the weather! Type in your desired city and
          you'll get information such as temperature, climate, wind speed and
          more for the current day as well as a five-day forecast!
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>Javascript</li>
        </ul>
        <h3>Repository</h3>
        <a href="https://github.com/Lischus/WeatherChecker">Weather Checker</a>
        <h2>Password Generator</h2>
        <a href="https://lischus.github.io/PasswordGenerator/">
          <img
            src={Password}
            alt="Password Generator"
            className="project-picture"
          ></img>
        </a>
        <h3>Description</h3>
        <p>
          An application to give you strong passwords! To use it just hit the
          generate button and answer the questions given to you!
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>Javascript</li>
        </ul>
        <h3>Repository</h3>
        <a href="https://github.com/Lischus/PasswordGenerator">
          Password Generator
        </a>
        <h2>Blue Sky Farmers Matchmaker</h2>
        <a href="https://radiant-caverns-76977.herokuapp.com/">
          <img src={Farmer} alt="Matchmaker" className="project-picture"></img>
        </a>
        <h3>Description</h3>
        <p>
          An application to help start relationships, wheather they be platonic
          or romantic! After making an account feel free to take our personality
          assessment or just hop right into the chatroom!
        </p>
        <h3>Technologies</h3>
        <ul>
          <li>Javascript</li>
          <li>Handlebars</li>
          <li>Node.js</li>
          <li>Socket.io</li>
        </ul>
        <h3>Repository</h3>
        <a href="https://github.com/Lischus/Blue-Sky-Farmers">
          Blue Sky Farmer's Matchmaker
        </a>
        <h2>Text Editor</h2>
        <a href="https://secure-citadel-32557.herokuapp.com/">
          <img src={Jate} alt="Text Editor" className="project-picture"></img>
        </a>
        <h3>Description</h3>
        <p>An application to help edit text!</p>
        <h3>Technologies</h3>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
        </ul>
        <h3>Repository</h3>
        <a href="https://github.com/Lischus/Text-Editor">Text Editor</a>
      </Container>
    </div>
  );
}

export default Projects;
