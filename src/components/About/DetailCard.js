import {Card,Container} from 'react-bootstrap';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillMail,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";


const DetailCard = (props)=>{
return (
    <>
    
    <Card style={{ width: '18rem' }} className="mx-4 my-5 bg-transparent text-light rounded">
    <Container className="bg-dark">
  <Card.Img variant="top" style={{ display:'block'}} src={props.img} />
  <Card.Body>
    <Card.Title ><h3 className="font-weight-bold">{props.name}</h3></Card.Title>
    <Card.Text>
     {props.position}
    </Card.Text>
    <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={props.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href={props.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={props.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
  </Card.Body>
  </Container>
</Card>
    </>
)


}

export default DetailCard;