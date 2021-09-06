import Sample from '../../Assets/samplesponsor.png';
import {Card} from 'react-bootstrap';



const FlipCard = (props)=>{
    return (
        <>
        <div className="flip-card my-5 mx-3" style={{width:"300px"}}>
  <div className="flip-card-inner">
    <div  className="flip-card-front">
      <img className="cardimg"  src={props.image} alt="Avatar" style={{width:"200px",height:"200px",marginTop:'20px'}}/>
    </div>
    <div className="flip-card-back" >

    <Card style={{height:'15em'}} className="bg-dark text-light rounded">
  <Card.Body>
    <Card.Title><h3 className="font-weight-bold">{props.name}</h3></Card.Title>
    <Card.Text>
     {props.desc}
     
    </Card.Text>
   
    
  </Card.Body>
</Card>
    </div>
  </div>
</div>
        </>
    )
}

export default FlipCard;

