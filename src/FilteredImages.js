import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import download from './images/download.png';
import Mainpage from './Mainpage';


function FilteredImages({ images}) {
  const [searchQuery, setSearchQuery] = useState("");  // Manage search state here
  const { type } = useParams();
  const filteredImages = images
  .filter(image => !type || type === 'all' || image.type === type)
  .filter(image => image.name.toLowerCase().includes(searchQuery.toLowerCase()));
//   console.log('Filtered images:', filteredImages); // Log the filtered images

  return (<>
     <Mainpage 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
      />

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