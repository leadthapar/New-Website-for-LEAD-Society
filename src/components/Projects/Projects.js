import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/flutterworkshops.png";
import emotion from "../../Assets/Projects/anotherevent.png";
import editor from "../../Assets/Projects/websetgo.png";
import chatify from "../../Assets/Projects/workshops.png";
import suicide from "../../Assets/Projects/Askmeanything.png";
import bitsOfCode from "../../Assets/Projects/shoonya.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          We at <strong className="purple">LEAD </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aspire to inspire
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="WORKSHOPS"
              description="We at LEAD believe in creating an impact thorugh knowledge.To keep up with this,LEAD conducted weekly workshops for its members, Where expersts from various fields shared their experience in fields like graphic designing,content writing etc"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FLUTTER WORKSHOP"
              description="Another mind-boggling workshop was organized by LEAD on 14th and 15th January 2020,with a motive to enhance technical skills and promote app development among young minds.Participants were given insights to Flutter enviorment setups."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ALUMNI TALKS"
              description="Web Set Go was concluded with 2 days of information interaction with some of the most prestigious alumni of Thapar and some external guests.They shared their life experiences in various Technical(web dev, app dev, programming) and Non-Technical (leadership, public speaking, presentation) skills"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SHOONYA"
              description="The most exciting and captivating event, 'SHOONYA 2.0' was hosted by LEAD.It was a week-long event which involved a series of events that tested one's technical,non-technical and reasoning skills. It was a flagship event, and has always been looked fowrad by the audience "
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ASK ME ANYTHING"
              description="LEAD conducted an AMA session with one of the leading industrialists and college seniors where they imparted their experience and knowledge related to the field and interacted with the attendees resolving their queries and doubts."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="THE WEBBIES"
              description="The most awaited journey into the wide realms of webdevelopment started with a three-day workshop on web
              development from scratch. The event started with an enlightening HTML+CSS and JavaScript workshop
              followed by it's implementation in a mini-project."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
