import React from 'react'
import logo from './images/logo.png';
import github from './images/github.png';
import './App.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='footer'>
      <div className='logo'>
            <img src={logo} alt="IHUB Logo" className='dlogo'/> NFTs Hub
      </div>

    <span>The new home for your digital goods</span>
   <Link to='https://github.com/JessicaBanini/nft_ecommerce' ><button className='followbtn' >
      <img src={github} alt="github" className="githubicon"/>Follow
    </button>
    </Link>
 

    
    <section className='other'>    
    <div> 
      <a href='/'>Product Hub</a>
      <a href='https://github.com/JessicaBanini/nft_ecommerce'>Git hub</a>
      <a href='/'>Explore</a>
      <a href=''>LinkedIn</a>
    </div>

    <div>
      <a>Account</a>
      <a href='/membership'>Activate Membership</a>
      <a href='/signin'>Sign in</a>
      <a href='/license'>Activate License</a>
    </div>

    <div className='mailing'>
      <p className='join'>Join our mailing list </p>
      <p>Get notified about new products as soon as they drop</p> 

       <div className='mail'>
        <input className='mailaddress' type="search" placeholder='Email Address'/>   
       <button  className='mailbtn'><Link to='mailto:jessiemefa@gmail.com'>Subscribe</Link></button> 
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



