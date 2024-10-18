import React from 'react';
import './Product.css';

const CompareProducts = () => {
  return (
    <div className="compare-products-container">
      <div className="header-content">
        <div className="text-content">
        <h1 className="title">Compare <span className='color'>with Other Products</span></h1>
          <p  className="subtitle"> Start for free and upgrade to unlock more features.</p>
        </div>
        <button className="view-more-btn2">
          View more...
          <span className="arrow-icon1">↗</span>
        </button>
      </div>
      <div className="other-products">
        <h2>Other Products</h2>
        <div className="logo-container">
          <img src="/logo.png" alt="iEmpPower logo1" className="footer-logo-img" />
          <span className="logo-text">iEmpPower</span>
        </div>
      </div>
    </div>
  );
};

export default CompareProducts;