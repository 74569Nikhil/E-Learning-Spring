import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../image/c1.jpg';
import img2 from '../image/2.jpg';
import img3 from '../image/3.jpg';
import img4 from '../image/4.jpg';

import '../CSS/Home.css'; // Adjust the path accordingly

function Home() {
  return (
    <>
      <Carousel slide={false} className="mb-4">
        <Carousel.Item>
          <img src={img1} alt="img1" className="carousel-image" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="img2" className="carousel-image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="img3" className="carousel-image" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img4} alt="img4" className="carousel-image" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
