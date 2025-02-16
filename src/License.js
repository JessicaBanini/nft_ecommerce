import React from 'react'
import App from './App'
import './App.css';
import { Link } from 'react-router-dom';

function License() {
  return (
    <div className="page-container">
    <div className='license-container'>
    <h1>Activate License & Sign Up</h1>
    <p>Please enter the license key from your Lemon Squeezy order to access member-only content
    </p>

    <span>
    License key
    <input type="text" className="licenseno" placeholder="Enter license key" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" tooltip="crosscheck password format" required/>
    <button className="licensebtn">Continue</button>
    </span>
    

    <span className='req'>
    <p>License Requirements</p>
     8 characters, 1 uppercase letter, 1 lowercase letter, at least one digit, at least one special character eg. Abc123!@
    </span>

  <button className='be-amem'>Become a member</button>
  <Link to="/signin" className='sign'>Sign In</Link>

    
   </div>
   </div>


  )
}

export default License