import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import coachn from "../../assets/Projects/coachn.gif";

import Tilt from "react-parallax-tilt";
// import Particle from "../Particle";

function JavaContainer() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={coachn}
                isBlog={false}
                title="Inside Inspiration Academy"
                description="This is a Java-based application project 👀where I used Java, AWT, Swing, JDBC, and Database (MySQL) to properly execute my project🚀. Actually, I am thinking about making a Desktop Application that can track every single activity of a student😀.
                  This Desktop Application can be capable of circulating notes among every student✍, resolving payment issues💲, managing student access👩🏻‍🎓, and inspecting curriculums for all courses which are taught here👀."
                ghLink="https://github.com/Ankit-Chitrakar/Inside-Inspiration-Academy-Management-System"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default JavaContainer;
