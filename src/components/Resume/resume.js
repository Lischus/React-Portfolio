import React from "react";
import myResume from "../../assets/resume/Resume.pdf";

function Resume() {
  return (
    <div>
      <h2>My Resume</h2>
      <p>
        Download My
        <a href={myResume} download="Martin Corr Resume">
          Resume
        </a>
        !
      </p>
      <br></br>
      <h2>My Proficiencies</h2>
      <ul>
        <li>Javascript</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default Resume;
