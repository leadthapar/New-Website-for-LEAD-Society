import React,{useState} from "react";
import {Container,Nav} from 'react-bootstrap';
import DetailCard from "./DetailCard";
import {CoreMembers,ExecutiveBoard,Alumni} from './ConstantData';





function About() {

  
  const [data,setData] = useState({
    tab : "exec",
    result : ExecutiveBoard
          
  })



  return (
      <>
<div style={{
        paddingTop: '70px'
    }}>
      
      <h1 className="my-5 text-light font-weight-bold">Our Hardworking Team </h1>
      <Container className="my-3">
    <Nav variant="tabs" className="bg-warning text-dark rounded" defaultActiveKey={"exec"}>
  <Nav.Item>
    <Nav.Link className="font-weight-bold text-dark h5" eventKey="exec" onClick={()=>{
        setData({
        tab : "exec",
        result : ExecutiveBoard
      })
    }}>Executive Board</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="font-weight-bold text-dark h5" eventKey="core" onClick={()=>{
       setData({
         tab : "core",
         result : CoreMembers
    
         })
         
    }}>Core Members</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  className="font-weight-bold text-dark h5" eventKey="alumni" onClick={()=>{
      setData({
         tab : "alumni",
         result : Alumni
         })
    }}>
     Alumni
    </Nav.Link>
  </Nav.Item>
</Nav>

</Container>

        <div className="row mx-5">
          {
            data.result.map((elem)=>{
              return (
              <DetailCard 
                          name={elem.name}
                          position={elem.positon}
                          linkedIn= {elem.linkedIn}
                          facebook={elem.facebook}
                          instagram={elem.instagram}
                          img={elem.img}
                        />)
            })
          }  
        </div>
   
</div>
        </>
  );
}

export default About;
