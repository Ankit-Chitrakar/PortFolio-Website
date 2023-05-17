import Nav from "react-bootstrap/Nav";
import { Container, Col, Row } from "react-bootstrap";
import WebContainer from "./WebContainer";
import { useState } from "react";
import JavaContainer from "./JavaContainer";
import VideoContainer from "./VideoContainer";

function Project() {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <Container fluid className="project-section">
      <Row
        style={{
          justifyContent: "center",
          padding: "10px",
          marginTop: "85px",
        }}
      >
        <Col
          md={10}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
          }}
        >
          <h1
            className="project-heading"
            style={{ color: "white", letterSpacing: "4px", fontSize: "2.2rem" }}
          >
            My Recent <strong className="purple">WORKS👩🏻‍💻 </strong>
          </h1>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Col
          md={8}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <Nav fill variant="tabs" defaultActiveKey="#Web_Development">
            <Nav.Item>
              <Nav.Link
                href="#Web_Development"
                style={{ color: "#c770f0", letterSpacing: "1.4px" }}
                onClick={() => updateToggle(1)}
              >
                Website Design & Development
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#Core_Java"
                style={{ color: "#c770f0", letterSpacing: "1.4px" }}
                onClick={() => updateToggle(2)}
              >
                Core Java
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#Video_Editing"
                style={{ color: "#c770f0", letterSpacing: "1.4px" }}
                onClick={() => updateToggle(3)}
              >
                Video Editing
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {/* Content */}
      <Row
        style={{
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Col
          md={10}
          style={{
            justifyContent: "center",

            paddingBottom: "50px",
          }}
        >
          <div className={toggle === 1 ? "show-content" : "content"}>
            <WebContainer />
          </div>
          <div className={toggle === 2 ? "show-content" : "content"}>
            <JavaContainer />
          </div>
          <div className={toggle === 3 ? "show-content" : "content"}>
            <VideoContainer />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
