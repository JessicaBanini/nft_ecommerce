import React from 'react'
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

function Navbar({ toggleSignUp }) { // Accept the toggleSignUp prop
  return (
    <section className='navbar'>
        <Link to='/'><div className='logo'>
           <img src={logo} alt="IHUB Logo"/> NFTs Hub
        </div></Link>

        <div className='pages'>
            {/* <ul> */}
                <li><a href="/">Explore</a></li>
                <li><Link to="/license">Activate License</Link></li>
                <li><a href="https://github.com/EmyBrown">Github</a></li>
                <li><Link to="/signin" button  className='signin'>Sign In</Link></li>
                <li><Link to="/membership"button className='member'>Become a Member</Link></li>
            {/* </ul> */}
        </div>

    </section>
  )
}

export default Navbar