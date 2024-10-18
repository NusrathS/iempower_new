import React from 'react';
import './SitePricing.css';

const SitePricing = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-header">Start for free and upgrade to unlock more features.</h2>
      <div className="pricing-plans">
        <div className="plan basic-free">
          <h3>Basic</h3>
          <p className="price">FREE</p>
          <p className="duration">Forever</p>
          <ul>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
          </ul>
          <button className='get-'>Get Site Plan</button>
        </div>
        <div className="plan basic-paid">
          <h3>Basic</h3>
          <p className="price">$225</p>
          <p className="duration">per site per month</p>
          <ul>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
          </ul>
          <button className='get-plan'>Get Site Plan</button>
        </div>
        <div className="plan pro">
          <h3>Pro</h3>
          <p className="price">$395</p>
          <p className="duration">per site per month</p>
          <ul>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum plansdaem</li>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
          </ul>
          <button className='get-plan'>Get Site Plan</button>
        </div>
        <div className="plan enterprise">
          <h3>Enterprise</h3>
          <p className="price">$699</p>
          <p className="duration">per site per month</p>
          <ul>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
            <li>Lorem ipsum sdaem</li>
          </ul>
          <button className='get-plan'>Get Site Plan</button>
        </div>
      </div>
    </div>
  );
};

export default SitePricing;