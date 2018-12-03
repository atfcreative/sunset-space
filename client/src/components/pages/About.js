import React, { Component } from 'react';
import img1 from './images/slide1.jpg';
import img2 from './images/slide2.jpg';
import img3 from './images/slide3.jpg';

class About extends Component {
    render() { 
        return (
           

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="first-slide" src={img1} alt="First slide" />
                  <div className="container">
                    <div className="carousel-caption text-left">
                      <h1>About this place...</h1>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p className="btn btn-lg btn-primary" role="button">Sign up today</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="second-slide" src={img2} alt="Second slide" />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Another example headline.</h1>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p className="btn btn-lg btn-primary" role="button">Learn more</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="third-slide" src={img3} alt="Third slide" />
                  <div className="container">
                    <div className="carousel-caption text-right">
                      <h1>One more for good measure.</h1>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p className="btn btn-lg btn-primary" role="button">Browse gallery</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </p>
              <p className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </p>
            </div>
            
        
      
        );
    }
}
 
export default About;