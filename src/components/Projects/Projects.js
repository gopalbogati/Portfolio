import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="OpenMapWeather API "
              description="OpenMapWeather API implementation using Laravel PHP Framework"
              link="https://github.com/gopalbogati/openweathermaplaravel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Online-poetry system"
              description="This is online-poetry system made in laravel 5.3."
              link="https://github.com/gopalbogati/online-poetry-in-laravel-5.3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PHP framework Symfony News-portal"
              description="PHP framework Symfony based News-portal"
              link="https://github.com/gopalbogati/NewsPaper-Using-Symfony"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
