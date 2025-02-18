import React from 'react'
import successicon from './images/success.png';
import { Link } from 'react-router-dom';


function success() {
  return (
    <div className="page-container">
      <div className="success-page">
          <img src={successicon} alt="success" className="successicon"/>
          <p>Successful !</p>
          <Link to='/'> Go back</Link>
      </div>
    </div>
  )
}

export default success