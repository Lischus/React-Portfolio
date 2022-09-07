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
              I am a Front End Web Developer. I recently earned a certificate in
              Full Stack Development from the University of Pennsylvania, where
              I developed skills in JavaScript, CSS, React.js, responsive web
              design, and more An innovative problem-solver passionate about
              developing apps, my current focus is on mobile-first design and
              development. I bring the following to every project:
              <ul>
                <li>Problem-solving skills</li>
                <li>Dedication to teamwork</li>
                <li>
                  A foundational knowledge of agile software development
                  principles
                </li>
                <li>A basic understanding of UX/UI principles</li>
              </ul>
              I'm excited to leverage my skills as part of a fast-paced,
              quality-driven team.
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
