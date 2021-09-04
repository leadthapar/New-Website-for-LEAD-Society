import {Container} from 'react-bootstrap'
import FlipCard from './FlipCard';
import Sponsor from './ConstDataSponsors';
function Resume() {


  return (
    <div style={{
      paddingTop: '70px'
  }}> 
  <h1 className="my-5 text-light font-weight-bold">Our Sponsors</h1>
  <Container className="my-5 text-light">
  <div className="row">
  {
    Sponsor.map((elem)=>{
      return (
        <FlipCard
          name={elem.name}
          desc={elem.desc}
          image={elem.image}
        />
      )
    })
  }
   
   
    </div>
    
  </Container>
  </div>
  );
}

export default Resume;
