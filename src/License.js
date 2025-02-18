import React, { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function License() {
  const [licenseKey, setLicenseKey] = useState('');
  // const [showLicense, setShowLicense] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLicenseChange = (e) => {
    const value = e.target.value;
    setLicenseKey(value);
     // Validate against the pattern
     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     setIsFormValid(pattern.test(value));
   };
  

  return (
    <div className="page-container">
    <div className='license-container'>
    <h1>Activate License & Sign Up</h1>
    <p>Please enter the license key from your Lemon Squeezy order to access member-only content
    </p>

    <span>
    License key
    <input type="text" 
           className="licenseno" 
           placeholder="Enter license key" 
           value={licenseKey}
           onChange={handleLicenseChange}
           pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" required/>
    <Link to='/success' ><button className="licensebtn" 
                                disabled={!isFormValid}
                                
                                style={{ 
                                opacity: isFormValid ? 1 : 0.9,
                                cursor: isFormValid ? 'pointer' : 'not-allowed',
                                // color: isFormValid ? '#000000 ' : '#ffffff',  // Add this line
                                // color: !isFormValid ? '#000000' : '#AD1FFF',
                                // background:isFormValid? '#007bff' : '#cccccc'  
                                }}>Continue</button></Link>
    </span>
    

    <span className='req'>
    <p>License Requirements</p>
     8 characters, 1 uppercase letter, 1 lowercase letter, at least one digit, at least one special character eg. Abc123!@
    </span>

  <Link to='/membership'><button className='be-amem'>Become a member</button></Link>
  <Link to="/signin" className='sign'>Sign In</Link>

    
   </div>
   </div>


  )

}

export default License