import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import download from './images/download.png';
import Mainpage from './Mainpage';


function FilteredImages({ images }) {
  const { type } = useParams();
  const filteredImages = !type || type === 'all' ? images : images.filter(image => image.type === type);
//   console.log('Filtered images:', filteredImages); // Log the filtered images

  return (<>
    <Mainpage/>

    <div className='nft-container'>
      {filteredImages.length > 0 ? (
        filteredImages.map(image => (
          <div className='nft' key={image.id}>
            <img src={image.src} alt={image.alt} />
            <p className='name'>{image.name}</p>
            <p className='price'>${image.price}.99 value</p>
            <button>
              <img src={download} alt="Download" className="downloadicon"/>
            </button>

          </div>
        ))
      ) : (
        <p>No images found for this category.</p>
      )}
    </div>
    </>
  );
}

export default FilteredImages;