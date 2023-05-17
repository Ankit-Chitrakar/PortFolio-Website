import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
// import Github from "./Github";
// import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import avatar from "../../assets/Me_about.JPG";
import MoreAboutMe from "./MoreAboutMe";
import TechStacks from "./TechStacks";
// import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              {" "}
              <img src={avatar} alt="about" className="img-fluid" style={{width: '16rem'}} />
            </Tilt>
          </Col>
        </Row>
        <h1
          className="project-heading"
          style={{
            marginTop: "50px",
            letterSpacing: "4px",
            fontSize: "2.2rem",
            marginBottom: "50px",
          }}
        >
          More about <strong className="purple">MYSELF😃 </strong>
        </h1>
        <Row>
          <Col md={10} style={{ margin: "auto", marginBottom: "100px" }}>
            <MoreAboutMe />
          </Col>
        </Row>
        <h1
          className="project-heading"
          style={{
            letterSpacing: "4px",
            fontSize: "2.2rem",
            marginBottom: "50px",
          }}
        >
          <strong className="purple">TECHNOLOGIES</strong> I know😎
        </h1>
        <TechStacks />
      </Container>
    </Container>
  );
}

export default About;
