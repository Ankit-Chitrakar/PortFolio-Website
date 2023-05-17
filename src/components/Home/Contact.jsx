import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Form from "./Form";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="contact-full-text">
            Feel Free to{" "}
            <strong
              style={{
                color: "rgb(221 133 255)",
                fontWeight: "900",
              }}
            >
              CONTACT ME!
            </strong>
            <br /> I am ready for{" "}
            <strong
              style={{
                color: "rgb(221 133 255)",
                fontWeight: "900",
              }}
            >
              COLLABORATION 🚀
            </strong>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

          <Col md={5} className="home-about-description">
            <Form />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ letterSpacing: "3px" }}>FIND ME ON👀</h1>
            <p style={{ letterSpacing: "3px" }}>
              Feel free to <span className="purple">connect </span>with me on
              social media
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ankit-Chitrakar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ankit.chitrakar.18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankit-chitrakar-84ba79224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chitrakarankit8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
