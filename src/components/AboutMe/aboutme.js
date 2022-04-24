import React from "react";
import Portrait from "../../assets/images/Martin_Corr.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutMe() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <p>
              Hello! My name is Martin Corr, and I'm the developer you want to
              hire! I am currently a student at the University of Pennsylvania
              Coding Bootcamp, set to graduate in May 2022 with training in
              Javascript, MySQL, React and more!
            </p>
          </Col>
          <Col sm={4}>
            <img src={Portrait} alt="Martin Corr" className="portrait"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
