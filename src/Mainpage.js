import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import FilteredImages from './FilteredImages';

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

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter images based on search query
  const filteredImages = images.filter(image =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
     
    <section className='mainpage'>
    <section className='top'>
      <div className='wordings'>
        <p className='membership'>MEMBERSHIP REQUIRED  </p> 
        <h1>Meet the new home for your digital goods</h1>
        <p className='tagline'>Sell exclusive access to digital goods all in your Image Product Hub</p> 
        <input className='search' 
               type="search" 
               placeholder='Search 3D assets...'
               value={searchQuery}
               onChange={handleSearchChange}
          />   
        <div className='types'>
        <li className={activeCategory === 'all' ? 'active' : ''} onClick={() => handleCategoryClick('all')}>
              <Link to="/images/all">All</Link>
            </li>
            <li className={activeCategory === 'alien' ? 'active' : ''} onClick={() => handleCategoryClick('alien')}>
              <Link to="/images/alien">Aliens</Link>
            </li>
            <li className={activeCategory === 'animal' ? 'active' : ''} onClick={() => handleCategoryClick('animal')}>
              <Link to="/images/animal">Animals</Link>
            </li>
            <li className={activeCategory === 'monster' ? 'active' : ''} onClick={() => handleCategoryClick('monster')}>
              <Link to="/images/monster">Monsters</Link>
            </li>
            
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
            {filteredImages.length > 0 ? (
              
              images.map((image, index) => (
                <div key={index} className="carousel-item-inner">
                  <img
                    src={image.src}
                    alt={image.name}
                  />
                </div>
              ))
            ) : (
              <p>No images found</p>
            )}
          </Carousel>
        </div>
       
      </section>
    </section>
  );
  
}

export default Mainpage