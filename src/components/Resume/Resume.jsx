import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import sammy from "../../assets/Resume.png"

function Resume() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            margin: "120px 150px 40px 150px",
          }}
        >
          <img
            src={sammy}
            alt=""
            id="resume"
            style={{ objectFit: "contain", minWidth: "400px" }}
          />
        </Row>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            margin: "50px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
