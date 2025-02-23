import React from 'react'
import success from './images/success.png';
import { Link } from 'react-router-dom';

function Membership() {
  return (
    <div className="card-page">
        <h2>Get Unlimited Access</h2>
        <p className='tag'>Access hundreds of pro 3D asset with a subscription</p>
  <section className='card-container'>
  <div className='card'>
    <div className='card-head'>Monthly 
        <p>Pro</p>
    </div>

    <h2>$9.99</h2>
    <span>per month </span>
    <Link to='https://producthubtemplate.lemonsqueezy.com/buy/7eb4f0d8-b846-4860-ab4f-ce01ce84c319'><button className='purchase'>Test Pusrchase for Free</button></Link>
    <p className='bill'>Billing monthly, cancel anytime</p>

    <div className='mini'>
        <div  className='tick-head'>
            <img src={success} alt="success" className="successicon"/>Free Downloads
        </div>
        <p>Get free access to new pro assests added on a monthly basis</p>
    </div>  

    <div className='mini'>
        <div  className='tick-head'>
            <img src={success} alt="success" className="successicon"/>Premium Downloads
        </div>
        <p>Get access to premium designed 3D assets</p>
    </div>

    <div className='mini'>
        <div  className='tick-head'>
            <img src={success} alt="success" className="successicon"/>Unlimited Downloads
        </div>
        <p>    Download files as often as you want with no extra fees
        </p>
    </div> 

    
  </div>
  <div className='card'>
  <div className='card-head'>Yearly
        <p>Pro</p>
    </div>

    <h2>$59.99</h2>
    <span>per year </span>
    <Link to='https://producthubtemplate.lemonsqueezy.com/buy/7eb4f0d8-b846-4860-ab4f-ce01ce84c319'><button className='purchase'>Test Pusrchase for Free</button></Link>
    <p className='bill'>Billing yearly, cancel anytime</p>

    <div className='mini'>
        <div  className='tick-head'>
            <img src={success} alt="success" className="successicon"/>Free Downloads
        </div>
        <p>Get free access to new pro assests added on a monthly basis</p>
    </div>  

    <div className='mini'>
        <div  className='tick-head'>
            <img src={success} alt="success" className="successicon"/>Premium Downloads
        </div>
        <p>Get access to premium designed 3D assets</p>
    </div>

    <div className='mini'>
        <div  className='tick-head'>
            <img src={success} alt="success" className="successicon"/>Unlimited Downloads
        </div>
        <p>    Download files as often as you want with no extra fees
        </p>
    </div> 

  </div>
  
  </section>
    
       
 <p className='bottom'>Already Purchased?
    
    <span><Link to='/license'> Activate </Link> | <Link to='/signin'>Sign In</Link></span></p> 
    </div>


  )
}

export default Membership