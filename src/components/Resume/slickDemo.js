import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";   
import './slickdemo.css';  
export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
            <div class='container' >        
            <div className="row title" style={{marginBottom: "20px"}} >        
            <div class="col-sm-12 btn btn-info">        
            Slick Carousel In React Application     
            </div>        
            </div>    
            </div>  
            <Slider {...settings} >  
              <div className="wdt">  
              <img  className="img" src= {'assets/w5.jpeg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img style={{"height":"40px"}}   src= {'assets/w3.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'src/Assets/about.png'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'src/Assets/logo.png'} className="img"/>  
              </div >  
              <div className="wdt">  
              <img  className="img" src= {'src/Assets/about.png'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'src/Assets/logo.png'} className="img"/>  
              </div>  
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo  