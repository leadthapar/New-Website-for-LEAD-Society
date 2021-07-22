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
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FLUTTER WORKSHOP"
              description="Another mind-boggling workshop was organized by LEAD on 14th and 15th January 2020,with a motive to enhance technical skills and promote app development among young minds.Participants were given insights to Flutter enviorment setups."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="WEB SET GO"
              description="LEAD organised Web Set Go in December 2020.This was a technical event about web development.The event focused on mentors throwing light upon the basics of web development "
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SHOONYA"
              description="The most exciting and captivating event, 'SHOONYA 2.0' was hosted by LEAD.It was a week-long event which involved a series of events that tested one's technical,non-technical and reasoning skills. It was a flagship event, and has always been looked fowrad by the audience "
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="ASK ME ANYTHING"
              description="LEAD conducted an AMA session with one of the leading industrialists and college seniors where they imparted their experience and knowledge related to the field and interacted with the attendees resolving their queries and doubts."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ANOTHER EVENT"
              description="lorem"
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
