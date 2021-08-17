import {Card} from 'react-bootstrap';
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";


const DetailCard = (props)=>{
return (
    <>
    
    <Card style={{ width: '18rem' }} className="mx-4 my-5 bg-dark text-light rounded">
  <Card.Img variant="top" src={props.img} />
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
                  <AiFillGithub />
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
</Card>
    </>
)


}

export default DetailCard;