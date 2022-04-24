import React from "react";
import myResume from "../../assets/resume/Resume.pdf";

function Resume() {
  return (
    <div>
      <p>
        Download My
        <a href={myResume} download="Martin Corr Resume">
          Resume
        </a>
        !
      </p>
    </div>
  );
}

export default Resume;
