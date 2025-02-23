import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import download from './images/download.png';
import Mainpage from './Mainpage';


function FilteredImages({ images}) {
  const handleDownload = async () => {
    try {
      const response = await fetch(images.src);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${images.name}.png`; // Correct file name
      document.body.appendChild(link);
  
      setTimeout(() => {
        link.click(); // Auto-triggers "Save As"
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl); // Free memory
      }, 100);
  
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  
  
  

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
            <button onClick={handleDownload} className='downloadbtn'>
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