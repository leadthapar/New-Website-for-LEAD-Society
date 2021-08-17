import React,{useState} from "react";
import {Container,Nav,Carousel, CarouselItem} from 'react-bootstrap';
import DetailCard from "./DetailCard";
import {CoreMembers,ExecutiveBoard,Alumni} from './ConstantData';


function createChunks(data){
  let chunk = 3
  let result = []
  var i 
  for (i = 0;i < data.length; i +=chunk) {
    result.push(data.slice(i, i + chunk))}
    return result;

}



function About() {

  
  const [data,setData] = useState({
    tab : "exec",
    result : createChunks(ExecutiveBoard)
          
  })



  return (
      <>
<div style={{
        paddingTop: '70px'
    }}>
      
      <Container className="my-3">
    <Nav variant="tabs" className="bg-warning text-dark rounded" defaultActiveKey={"exec"}>
  <Nav.Item>
    <Nav.Link className="font-weight-bold text-dark h5" eventKey="exec" onClick={()=>{
        setData({
        tab : "exec",
        result : createChunks(ExecutiveBoard)
      })
    }}>Executive Board</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="font-weight-bold text-dark h5" eventKey="core" onClick={()=>{
       setData({
         tab : "core",
         result : createChunks(CoreMembers)
    
         })
         
    }}>Core Members</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  className="font-weight-bold text-dark h5" eventKey="alumni" onClick={()=>{
      setData({
         tab : "alumni",
         result : createChunks(Alumni)
         })
    }}>
     Alumni
    </Nav.Link>
  </Nav.Item>
</Nav>

</Container>

        <Carousel >
        {
          data.result.map((elem)=>{
            return (
              <CarouselItem>
              <Container className="row mx-auto">
                {
                  elem.map((el)=>{
                    return (
                      <div className="col">
                        <DetailCard 
                          name={el.name}
                          position={el.positon}
                          linkedIn= {el.linkedIn}
                          facebook={el.facebook}
                          instagram={el.instagram}
                          img={el.img}
                        />
                      </div>
                    )
                  })
                }
                </Container>
              </CarouselItem>
            )
          })
        }

  
 
    </Carousel>
</div>
        </>
  );
}

export default About;
