import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    
    <div className="pricing-container">
      <h1 className="pricing-title">
        <span className="purple-text">Site</span> Pricing
      </h1>
      <h2 className="pricing-header">Start for free and upgrade to unlock more features.</h2>
      <div className="pricing-plans">
        <div className="pricing-plan pricing-basic-free">
          <h3>Basic</h3>
          <p className="pricing-price">FREE</p>
          <p className="pricing-duration">Forever</p>
          <ul className="pricing-features">
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
                      <button className='pricing-button'>Get Site Plan</button>
          </ul>

        </div>
        <div className="pricing-plan pricing-basic-paid">
          <h3>Basic</h3>
          <p className="pricing-price">$225</p>
          <p className="pricing-duration">per site per month</p>
          <ul className="pricing-features">
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <button className='pricing-button'>Get Site Plan</button>
          </ul>

        </div>
        <div className="pricing-plan pricing-pro">
          <h3>Pro</h3>
          <p className="pricing-price">$395</p>
          <p className="pricing-duration">per site per month</p>
          <ul className="pricing-features">
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum plansdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <button className='pricing-button'>Get Site Plan</button>
          </ul>

        </div>
        <div className="pricing-plan pricing-enterprise">
          <h3>Enterprise</h3>
          <p className="pricing-price">$699</p>
          <p className="pricing-duration">per site per month</p>
          <ul className="pricing-features">
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <li className="pricing-feature">Lorem ipsum sdaem</li>
            <button className='pricing-button'>Get Site Plan</button>
          </ul>

        </div>
      </div>
      <div className="add-ons-section">
        <div className="add-ons-content">
          <p>For Add Ons and Upgrades for<br/> your pro site......</p>
        </div>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default Pricing;