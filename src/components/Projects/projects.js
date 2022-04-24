import React from "react";
import Planner from "../../assets/images/day-planner.PNG";
import Container from "react-bootstrap/Container";

function Projects() {
  return (
    <div>
      <Container>
        <img src={Planner} alt="Workday Planner"></img>
      </Container>
    </div>
  );
}

export default Projects;
