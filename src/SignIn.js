import React, { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [showPassword, setShowPassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
  
    // Validate form inputs
    const validateForm = (email, password) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      
      const isValid = emailPattern.test(email) && password.length > 0;
      setIsFormValid(isValid);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      validateForm(e.target.value, password);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      validateForm(email, e.target.value);
    };
  
  return (
    <div className="page-container">
        <div className='form-container'>
            <form className='signin-form'>
                <label>Email</label>
                <input type="email" 
                       className="email" 
                       placeholder="jameson@gmail.com" 
                       pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                       value={email}
                       onChange={handleEmailChange}
                       required/>
                <label>Password</label>
                <input type="text" 
                       className="password" 
                       placeholder="**************" 
                       value={password}
                       onChange={handlePasswordChange}
                       required/>
                <span>Forgot Password?</span>
               <Link to='/success'><button className='signinbtn' 
                                            disabled={!isFormValid}
                                            style={{ 
                                                opacity: isFormValid ? 1: 0.5,
                                                cursor: isFormValid ? 'pointer' : 'not-allowed'
                                                }}
                                                >Sign In
                                    </button></Link>
            </form>
            <p>Lincense not activated yet?</p>
        <Link to="/license" className='sign'>Activate License</Link>

        </div>


        
    </div>
  )
}

export default SignIn