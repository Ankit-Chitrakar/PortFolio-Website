import React, { useState } from "react";
import { Navbar as Navigation, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ForkRightRoundedIcon from "@mui/icons-material/ForkRightRounded";

import "../Styles.css";

const Navbar = () => {
  const [expand, updateExpand] = useState(false);
  const [navcolour, updateNavbarColour] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
      updateNavbarColour(true);
    } else {
      updateNavbarColour(false);
    }
  });

  return (
    <Navigation
      expanded={expand}
      fixed="top"
      expand="md"
      className={navcolour ? "sticky" : "fixed"}
    >
      <Container>
        <Navigation.Brand href="/" className="d-flex">
          {/* <img src={logo} alt="navlogo" className="img-fluid logo" /> */}
          <img
            src="https://media0.giphy.com/media/Vnk8f29XU6GSZK8uGJ/giphy.gif"
            alt="logo"
            // className="img-fluid logo"
            style={{ height: "4.5rem" }}
          />

          {/* <div
            className="navbar_name"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "5px",
              borderLeft: "2px solid white",
            }}
          >
            <span
              className="first"
              style={{
                fontSize: "17px",
                color: " #d06bff",
                fontWeight: "700",
                letterSpacing: "4px",
                marginLeft: "10px",
              }}
            >
              Ankit
            </span>
            <span
              className="second"
              style={{
                fontSize: "17px",
                color: "white",
                fontWeight: "700",
                letterSpacing: "4px",
                marginLeft: "10px",
              }}
            >
              Chitrakar.
            </span>
          </div> */}
        </Navigation.Brand>
        <Navigation.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navigation.Toggle>
        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  updateExpand(false);
                }}
                style={{fontSize: '1rem'}}
              >
                <HomeRoundedIcon
                  style={{ marginBottom: "2px", fontSize: "1.5rem" }}
                />{" "}
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {
                  updateExpand(false);
                }}
                style={{fontSize: '1rem'}}
              >
                <Person2RoundedIcon
                  style={{ marginBottom: "2px", fontSize: "1.5rem" }}
                />{" "}
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => {
                  updateExpand(false);
                }}
                style={{fontSize: '1rem'}}
              >
                <DvrRoundedIcon
                  style={{ marginBottom: "2px", fontSize: "1.5rem" }}
                />{" "}
                My Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {
                  updateExpand(false);
                }}
                style={{fontSize: '1rem'}}
              >
                <AssignmentRoundedIcon
                  style={{ marginBottom: "2px", fontSize: "1.5rem" }}
                />{" "}
                Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button href="https://github.com/Ankit-Chitrakar/PortFolio-Website" target="_blank" className="fork-btn-inner">
                <ForkRightRoundedIcon style={{ fontSize: "1.2em" }} />{" "}
                <StarRoundedIcon style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navigation.Collapse>
      </Container>
    </Navigation>
  );
};

export default Navbar;
