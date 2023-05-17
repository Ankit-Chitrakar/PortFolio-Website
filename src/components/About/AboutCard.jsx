import React from "react";
import Card from "react-bootstrap/Card";
import CheckIcon from "@mui/icons-material/Check";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              textAlign: "start",
              letterSpacing: "1.4px",
              fontSize: "1.1rem",
            }}
          >
            Hi Everyone, I am <span className="purple">Ankit Chitrakar👋🏻 </span>
            from <span className="purple"> Kolkata, West Bengal, India🌍.</span>
            <br />
            currently I am pursuing my B.Tech in Electronics & Communication
            Engineering😀.
            <br />
            But I am moreover comfortable with Computer Science like Web
            Development, Java, Data Structures and Algogithm & DBMS 🚀😎.
            <br />
            <br />
            Apart from coding👀, some other activities that I love to do🤩!
          </p>
          <ul>
            <li
              className="about-activity"
              style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
            >
              <CheckIcon /> I am a Proffesional Video Editor and Freelancer👩🏻‍💻
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
            >
              <CheckIcon /> Listening Music🎶
            </li>
            <li
              className="about-activity"
              style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
            >
              <CheckIcon /> Playing Games🏏
            </li>
          </ul>

          <p
            style={{
              fontSize: "1rem",
              letterSpacing: "1.4px",
              color: "rgba(200, 137, 230) ",
            }}
          >
            "Hard work beats talent when Talent does not work hard!!"{" "}
          </p>
          <footer
            className="blockquote-footer"
            style={{ fontSize: "1rem", letterSpacing: "1.4px" }}
          >
            Ankit
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
