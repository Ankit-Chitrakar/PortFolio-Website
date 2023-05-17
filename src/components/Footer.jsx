import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ankit Chitrakar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Ankit-Chitrakar"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ankit.chitrakar.18"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ankit-chitrakar-84ba79224/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/chitrakarankit8/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
