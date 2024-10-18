import React from 'react';
import './Dashboard.css'; // Make sure to create and update this CSS file

function Dashboard() {
  return (
    <div className="landing-page">
      <div className="dashboard-preview">
        <img 
          src="/Background.png" 
          alt="iEmpPower Dashboard" 
          style={{ width: '1200px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Dashboard;