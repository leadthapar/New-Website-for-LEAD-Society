import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pp.jpg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section"  id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" style={{marginTop:'60px'}}>
            <h1 style={{ fontSize: "2.6em" }}>
            About<span className="purple"> LEAD </span>
            </h1>
            <p className="home-about-body justify-content" >
            LEAD was formed with the objective of providing students a dynamic platform which feeds their curiosity and develops their technical skills. LEAD aims to create a community of versatile enthusiasts with progressive mindset, promoting development holistically which includes injecting soft skills as well.
              <br /><br/>
              LEAD effectuates it by organizing numerous technologies driven events including tech meetups and Hackathons and promoting team building.
            </p>
          </Col>
          <Col md={4} className="myAvtar ">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{borderRadius:'50px'}} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US</h1>
            <p>
              You can <span className="purple">join</span> us at
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/leadthapar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCim2WWCW16rarkpNHpNXSmg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/lead-tiet/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lead_tiet/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
