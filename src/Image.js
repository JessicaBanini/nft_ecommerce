import React from 'react';
import './App.css';
import download from './images/download.png';

function Image(props) {

  return (
    <>
    <section className='nft-container'>
        <div className='nft'>
            <img src={props.src} alt={props.alt} />
            <p className='name'>{props.name}</p>
            <p className='price'>${props.price}.99 value</p>
            <button>
              <img src={download} alt="Download" className="downloadicon"/>
            </button>

            
        </div>
    </section>
    </>
    
  )
}

export default Image