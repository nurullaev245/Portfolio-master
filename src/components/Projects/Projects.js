import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Tapcoin_Design.png"
              isBlog={false}
              title="TapCoin"
              description="If you need to open this project in chrome you must write in terminal (npm run dev)"
              ghLink="https://github.com/nurullaev245/tap-coin.git"
              style={{ position: "relative", minHeight: "350px" }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Website.png"
              isBlog={false}
              title="Portfolio Website"
              description="If you need to open this project in chrome you must write in terminal (npm start)"
              ghLink="https://github.com/nurullaev245/Portfolio-master.git"
              style={{ position: "relative", minHeight: "350px", paddingBottom: "10px"}}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
