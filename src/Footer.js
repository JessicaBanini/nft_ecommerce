import React from 'react'
import logo from './images/logo.png';
import github from './images/github.png';
import './App.css';

function Footer() {
  return (
    <section className='footer'>
      <div className='logo'>
            <img src={logo} alt="IHUB Logo" className='dlogo'/> Image Hub
      </div>

    <p>The new home for your digital goods</p>
    <button className='followbtn'>
      <img src={github} alt="github" className="githubicon"/>Follow
    </button>


    
    <section className='other'>    
    <div className='batch1'> 
      <p>Product Hub</p>
      <p>Git hub</p>
      <p>Explore</p>
      <p>Free Remix</p>
    </div>

    <div className='batch2'>
      <p>Account</p>
      <p>Activate Membership</p>
      <p>Sign in</p>
      <p>Reset Password</p>
    </div>
  
    </section>

    <p>Create by Jessica Emefa orgbenu-banini </p>
    <p>design  by Danny Sapio</p>
    <p>Join our mailing FileListGet noitified about new products as soon as they drop </p>
    
    </section>
    
  )
}

export default Footer



