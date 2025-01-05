import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FuzzySlim from './images/FuzzySlim.png';
import Cyndor from './images/Cyndor.png';
import Gorilla from './images/Gorilla.png';
import CodeRed from './images/CodeRed.png';

function Mainpage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:1   // Show 3 items at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const images = [
    { src: Cyndor, name: 'Cyndor' },
    { src: FuzzySlim, name: 'FuzzySlim' },
    { src: Gorilla, name: 'Gorilla' },
    { src: CodeRed, name: 'CodeRed' }
    // Add more image paths as needed
  ];

  return (
    <section className='mainpage'>
    <section className='top'>
      <div className='wordings'>
        <p className='membership'>MEMBERSHIP REQUIRED  </p> 
        <h1>Meet the new home for your digital goods</h1>
        <p className='tagline'>Sell exclusive access to digital goods all in your Image Product Hub</p> 
        <input className='search' type="search" placeholder='Search 3D assets...'/>   
        <div className='types'>
            {/* <ul> */}
                <li><a href="#">  All</a></li>
                <li><a href="#">Aliens</a></li>
                <li><a href="#">Animals</a></li>
                <li><a href="#">Monsters</a></li>
                
            
        </div>
      </div>

        <div className='carousel-wrapper'>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
  
            showDots={false}
            arrows={false}
            itemClass="carousel-item"
            containerClass="carousel-container"
            // transitionDuration={800}
            customTransition="transform 2000ms ease-in-out"
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-item-inner">
                <img
                  src={image.src}
                  alt={image.name}
                />
              </div>
            ))}
          </Carousel>
        </div>
        
      </section>
    </section>
  );
}

export default Mainpage