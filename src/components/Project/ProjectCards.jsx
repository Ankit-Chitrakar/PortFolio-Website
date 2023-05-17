import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ width: "100%" }}
      />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "1.5rem",
            letterSpacing: "3px",
            fontWeight: "600",
            color: "rgb(109 26 148)",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          style={{ marginBottom: "10px" }}
        >
          {props.isBlog ? (
            "Video Preview"
          ) : (
            <>
              <BsGithub /> GitHub
            </>
          )}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "2px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
