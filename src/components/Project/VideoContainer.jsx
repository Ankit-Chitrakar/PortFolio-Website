import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import sammy1 from "../../assets/sammy1.jpg";
import sammy2 from "../../assets/sammy2.jpg";
import sammy3 from "../../assets/sammy3.jpg";
import ali1 from "../../assets/ali1.jpg";
import ali2 from "../../assets/ali2.jpg";
import Tilt from "react-parallax-tilt";
// import Particle from "../Particle";

function VideoContainer() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={sammy1}
                isBlog={true}
                title="Sammy Akthar"
                description="Case Study 👀💲"
                ghLink="https://www.youtube.com/watch?v=qhrQXQr-VLM&t=31s"
              />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={sammy2}
                isBlog={true}
                title="Sammy Akthar"
                description="Case Study 👀💲"
                ghLink="https://www.youtube.com/watch?v=rQXI75zaTys&t=49s"
              />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={sammy3}
                isBlog={true}
                title="Sammy Akthar"
                description="Case Study 👀💲"
                ghLink="https://www.youtube.com/watch?v=T5rSoUR5c-I&t=135s"
              />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={ali1}
                isBlog={true}
                title="Ali Kawser - The Mentor"
                description="Career Counselling👩🏻‍🎓😍"
                ghLink="https://www.youtube.com/watch?v=m5wNhM45R3A&t=28s"
              />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={ali2}
                isBlog={true}
                title="Ali Kawser - The Mentor"
                description="Career Counselling👩🏻‍🎓😍"
                ghLink="https://www.youtube.com/watch?v=sYRjlDiOiI0&t=212s"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default VideoContainer;
