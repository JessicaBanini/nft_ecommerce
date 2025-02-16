import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="page-container">
        <div className='form-container'>
            <form className='signin-form'>
                <label>Email</label>
                <input type="text" className="email" placeholder="jameson@gmail.com" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required/>
                <label>Password</label>
                <input type="text" className="password" placeholder="**************" required/>
                <span>Forgot Password?</span>
                <button className='signinbtn'>Sign In</button>
            </form>
            <p>Lincense not activated yet?</p>
        <Link to="/license" className='sign'>Activate License</Link>

        </div>


        
    </div>
  )
}

export default SignIn