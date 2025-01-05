import React from 'react'
import logo from './images/logo.png';

function Navbar() {
  return (
    <section className='navbar'>
        <div className='logo'>
            <img src={logo} alt="IHUB Logo"/> Image Hub
        </div>

        <div className='pages'>
            {/* <ul> */}
                <li><a href="#">Explore</a></li>
                <li><a href="#">Activate License</a></li>
                <li><a href="#">Free Remix</a></li>
                <li><button className='signin' href="#">Sign In</button></li>
                <li><button className='member' href="#">Become a Member</button></li>
            {/* </ul> */}
        </div>

    </section>
  )
}

export default Navbar