import React from 'react'
import logo from './images/logo.png';
import github from './images/github.png';
import './App.css';

function Footer() {
  return (
    <section className='footer'>
      <div className='logo'>
            <img src={logo} alt="IHUB Logo" className='dlogo'/> NFTs Hub
      </div>

    <span>The new home for your digital goods</span>
    <button className='followbtn'>
      <img src={github} alt="github" className="githubicon"/>Follow
    </button>


    
    <section className='other'>    
    <div> 
      <a>Product Hub</a>
      <a>Git hub</a>
      <a>Explore</a>
      <a>Free Remix</a>
    </div>

    <div>
      <a>Account</a>
      <a>Activate Membership</a>
      <a>Sign in</a>
      <a>Reset Password</a>
    </div>

    <div className='mailing'>
      <p className='join'>Join our mailing list </p>
      <p>Get notified about new products as soon as they drop</p> 

       <div className='mail'>
        <input className='mailaddress' type="search" placeholder='Email Address'/>   
        <button className='mailbtn'>Subscribe</button>
       </div>
      
    </div>
    </section>

    <div className='creators'>
      <p>Created by Jessica Emefa Torgbenu-Banini </p>
      <p>Design by Danny Sapio</p>
    </div>
    
    
    </section>
    
  )
}

export default Footer



