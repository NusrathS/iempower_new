import React from 'react';
import './JoinUs.css';

const JoinUs = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-left">
          <h1> or <br/>Book a Demo....</h1>
          <button className="book-demo-btn">Book a Demo</button>
        </div>
        <div className="header-right">
          <div className="logo">
            <img src="/api/placeholder/40/40" alt="iEmpPower logo" className="logo-img" />
            <span className="logo-text">iEmpPower</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Searchlist" className="search-input" />
          </div>
          <button className="search-btn">Search</button>
        </div>
      </header>
      <main className="main-content">
        <div className="top-section">
          <span className="compare-text">Compare with other Products</span>
          <button className="view-more-btn1">View More</button>
        </div>
        <div className="menu-grid">
          <div className="menu-column">
            <h3>Platform</h3>
            <ul>
              <li>Plans & Pricing</li>
              <li>Contact US</li>
              <li>AI Business</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Company</h3>
            <ul>
              <li>Blog</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Resources</h3>
            <ul>
              <li>Documentation</li>
              <li>Papers</li>
              <li>Product Details</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Trip Information</h3>
            <ul>
              <li>Trip Data/Totals</li>
              <li>Receipts, Receipts Without Plan</li>
              <li>Cost Assignment</li>
              <li>Financial Aspects</li>
              <li>FI Payment Date</li>
              <li>Income Related Expenses</li>
              <li>Income Tax recovery</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Employee Management</h3>
            <ul>
              <li>Employee Master Data</li>
              <li>Planned Time Data</li>
              <li>Payroll & Compensation</li>
              <li>Payroll Data (One-time, Recurring)</li>
              <li>Payslips & Form 16</li>
              <li>Income Tax Declaration</li>
              <li>Flexible Benefits</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Planned Time</h3>
            <ul>
              <li>Shift Planning</li>
              <li>Holiday Calendar</li>
              <li>Actual Time</li>
              <li>Time and Attendance</li>
              <li>leaves and Quotas</li>
              <li>Punch In / Out Status</li>
            </ul>
          </div>
          <div className="menu-column">
            <h3>Leave Management</h3>
            <ul>
              <li>Quotas and Acurals</li>
              <li>Leave Applications</li>
              <li>Timesheets</li>
              <li>To Be Approved</li>
              <li>Pending</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JoinUs;