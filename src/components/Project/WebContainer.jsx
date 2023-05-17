import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import weather from "../../assets/Projects/Weather.gif";
import sorting from "../../assets/Projects/Sorting.gif";
import college from "../../assets/Projects/CollegeFest.gif";
import dictionary from "../../assets/Projects/Dictionary.gif";
import language from "../../assets/Projects/LanguageTranltr.gif";
import qrcode from "../../assets/Projects/QRCode.gif";
import regro from "../../assets/Projects/regro.gif";
import Tilt from "react-parallax-tilt";
// import Particle from "../Particle";

function ProjectContainer() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={weather}
                isBlog={false}
                title="Weather App"
                description="This is a real-time weather application🚀🚀 previewing the current weather☁ of any city worldwide🌍, displaying local time⏲, date of that particular city, current user location🗺, and also hourly as well as 3 days forecast also. In this build, I have used React JS, Day JS (Date and Time), React-Toastify (Notification), Weather-API (API call), and Firebase (Hosting)."
                ghLink="https://github.com/Ankit-Chitrakar/weather-application"
                demoLink="https://weather-app-d27b0.web.app/"
              />
            </Tilt>
          </Col>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={sorting}
                isBlog={false}
                title="Algorithm Visualizer"
                description="This is an HTML, CSS, JavaScript-based website named Algorithm-Visualizer!! where we demonstrate Sorting Algorithms and Searching Algorithms visually🤩👀. As we all know, if you visualize something along with its theoretical definitions then it will keep in your mind for a long time⏲ and you can easily understand this too⌛. That's why we think of making this project👩🏻‍💻."
                ghLink="https://github.com/Ankit-Chitrakar/Algorithm-Visualizer"
                demoLink="https://ankit-chitrakar.github.io/Algorithm-Visualizer/"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={language}
                isBlog={false}
                title="Language Translator"
                description="This is a Language Translator app built with HTML, CSS, Javascript🚀🚀. A translator, is responsible for using their knowledge of two or more languages and cultural meanings to translate texts from one language to another👀🌍 so that I built this project for say no language barrier😃 this time!!
                View Desktop mode in Mobile is preferrable😃.."
                ghLink="https://github.com/Ankit-Chitrakar/Lang2Lang-Translator"
                demoLink="https://ankit-chitrakar.github.io/Lang2Lang-Translator/"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={qrcode}
                isBlog={false}
                title="QR Code Generator"
                description="This is a QR Code Generator Web Application🤩 built with HTML, CSS, Javascript. You can get QR Code according to URL or Text as your wish👀 
                Visit our website link on your PC/Laptop (preferable) or Desktop Mode in Android📱."
                ghLink="https://github.com/Ankit-Chitrakar/QR-CodeGenerator"
                demoLink="https://ankit-chitrakar.github.io/QR-CodeGenerator/"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={dictionary}
                isBlog={false}
                title="Broford Dictionary"
                description="This is a Dictionary Web Application👀 built with HTML, CSS, Javascript!! I used to built this project as my starting of web developer journey to get proper word meaning🚀, synonyms as well as example also and this will help me a lot in english 
                pronunciation⌛ through out my college life till date😃. use Desktop mode for better experience in 📱"
                ghLink="https://github.com/Ankit-Chitrakar/Broford-Dictionary"
                demoLink="https://ankit-chitrakar.github.io/Broford-Dictionary/"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={college}
                isBlog={false}
                title="Navodaya"
                description="Navodaya is the annual cultural fest of Narula Institute of Technology😎.. Me and my two friends (Sayantan Bose & Pradip Sarkar) made this website for college fest in 2022🔥 and it gaves a immense excitement as well as information😍 about the fest show timings and other details also👀. This website is completely responsive for mobile, tablet as well as desktop🤩 "
                ghLink="https://github.com/Ankit-Chitrakar/Navodaya"
                demoLink="http://annualfestnit.in/novodaya/index.html"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={regro}
                isBlog={false}
                title="Regromedia.com"
                description="Regro media is the website of an amazon fba seller, entrepreneur and youtuber👀..Me and my team migrate this website from WordPress to Svelte js and this gives more audience increase by 20% and more sales increases by the owner😍👩🏻‍💻"
                ghLink="https://github.com/Ankit-Chitrakar/Regromedia.com"
                demoLink="https://regromedia.com/"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectContainer;
