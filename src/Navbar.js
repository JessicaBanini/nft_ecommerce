import React,{useState} from 'react'
import logo from './images/logo.png';
import { Link, NavLink } from 'react-router-dom';

function Navbar(){ 
  const [menuOpen, setMenuOpen] = useState(false);
 
    return (
      <section className='navbar'>
          <Link to='/'><div className='logo'>
              <img src={logo} alt="IHUB Logo"/> NFTs Hub
          </div>
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>

          <div className={`pages ${menuOpen ? "open" : ""}`}>
              {/* <ul> */}
                  <li><a href="/">Explore</a></li>
                  <li><a href="https://github.com/EmyBrown">Github</a></li>
                  <li><a href="/license">Activate License</a></li>
                  <li><a href="/signin" button className='signin'>Sign In</a ></li>
                  <li><a href="/membership" button className='member'>Become a Member</a></li>
              {/* </ul> */}
          </div>
      </section>
  );
  
}

export default Navbar