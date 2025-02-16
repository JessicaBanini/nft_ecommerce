import React from 'react'
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

function Navbar({ toggleSignUp }) { // Accept the toggleSignUp prop
  return (
    <section className='navbar'>
        <div className='logo'>
            <img src={logo} alt="IHUB Logo"/> NFTs Hub
        </div>

        <div className='pages'>
            {/* <ul> */}
                <li><a href="/">Explore</a></li>
                <li><Link to="/license">Activate License</Link></li>
                <li><a href="#">Free Remix</a></li>
                <li><Link to="/signin" button  className='signin'>Sign In</Link></li>
                <li><Link to="/signin"button className='member' onClick={toggleSignUp}>Become a Member</Link></li>
            {/* </ul> */}
        </div>

    </section>
  )
}

export default Navbar