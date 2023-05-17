import "../../Styles.css";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/school.svg";

import timelineElements from "../About/MoreAbout";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function MoreAboutMe() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <VerticalTimeline>
      {timelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";

        return (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{
                color: "rgb(15, 17, 67)",
                letterSpacing: "1.6px",
                fontSize: "1.3rem",
              }}
            >
              {element.title}
            </h3>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{
                color: "rgb(199, 112, 240)",
                letterSpacing: "1.3px",
                fontSize: "1rem",
              }}
            >
              {element.location}
            </h5>
            <p
              id="description"
              style={{
                color: "black",
                letterSpacing: "1px",
                fontSize: "1.1rem",
              }}
            >
              {element.description}
            </p>
            {showButton && (
              <a
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }`}
                href="https://drive.google.com/file/d/1bjxwZRb22q3TI0UhFJ3LNQRweZ6jp5YR/view?usp=sharing"
                target="_blank"
              >
                {element.buttonText}
              </a>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default MoreAboutMe;
