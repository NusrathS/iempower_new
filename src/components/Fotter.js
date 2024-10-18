import React from 'react';
import './Fotter.css';

const DashboardComponent = () => {
  return (
    <div className="dashboard3">
      <header className="header3">
        <div className="header-left3">
          <h1>Join US or <br/>Book a Demo....</h1>
          <button className="book-demo-btn3">Book a Demo</button>
        </div>
        <div className="header-right3">
          <div className="logo3">
            <img src="logo.png" alt="iEmpPower logo3" className="logo-img3" />
            <span className="logo-text3">iEmpPower</span>
          </div>
          <div className="search-bar3">
            <input type="text" placeholder="Searchlist" className="search-input3" />
          </div>
          <button className="search-btn3">Search</button>
        </div>
      </header>
      <main className="main-content3"> 
        <div className="top-section3">
          <span className="compare-text3">Compare with other Products</span>
          <button className="view-more-btn3">View More</button>
        </div>
        <div className="menu-grid3">
          <div className="menu-column0">
           
            <ul>
            <li>Platform</li>
              <li>Plans & Pricing</li>
              <li>Contact US</li>
              <li>AI Business</li>
            </ul>
          </div>
          <div className="menu-column0">
           
            <ul>
            <li>Company</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div className="menu-column0">
           
            <ul>
            <li>Resources</li>
              <li>Documentation</li>
              <li>Papers</li>
              <li>Product Details</li>
            </ul>
          </div>
          <div className="menu-column3">
          
            <ul>
            <li>Trip Information</li>
              <li>Trip Data/Totals</li>
              <li>Receipts, Receipts Without Plan</li>
              <li>Cost Assignment</li>
              <li>Financial Aspects</li>
              <li>FI Payment Date</li>
              <li>Income Related Expenses</li>
              <li>Income Tax recovery</li>
            </ul>
          </div>
          <div className="menu-column3">
           
            <ul>
            <li>Employee Management</li>
              <li>Employee Master Data</li>
              <li>Planned Time Data</li>
              <li>Payroll & Compensation</li>
              <li>Payroll Data (One-time, Recurring)</li>
              <li>Payslips & Form 16</li>
              <li>Income Tax Declaration</li>
              <li>Flexible Benefits</li>
            </ul>
          </div>
          <div className="menu-column3">
            
            <ul>
            <li>Planned Time</li>
              <li>Shift Planning</li>
              <li>Holiday Calendar</li>
              <li>Actual Time</li>
              <li>Time and Attendance</li>
              <li>leaves and Quotas</li>
              <li>Punch In / Out Status</li>
            </ul>
          </div>
          <div className="menu-column3">
           
            <ul>
            <li>Leave Management</li>
              <li>Quotas and Acurals</li>
              <li>Leave Applications</li>
              <li>Timesheets</li>
              <li>To Be Approved</li>
              <li>Pending</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="footer3">
        <div className="footer-content3">
          <div className="footer-left3">
            <p>© 2024 iEmpPower.com</p>
          </div>
          <div className="footer-right3">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default DashboardComponent;