import React from 'react';

const modules = [
  { name: 'Time Management', icon: '⏰' },
  { name: 'Travel Management', icon: '🚗' },
  { name: 'Task Management', icon: '📋' },
  { name: 'Purchase Request', icon: '💳' },
  { name: 'Expense Reimbursement', icon: '💰' },
  { name: 'Employee Central', icon: '👤' },
];

function MainContent({ selectedModule }) {
  const selectedModuleData = modules.find(module => module.name === selectedModule);

  return (
    <div style={{ 
      flex: 1, 
      backgroundColor: '#444', 
      color: 'white', 
      padding: '1rem', 
      borderRadius: '8px',
      position: 'relative'
    }}>
      <h2>{selectedModule}</h2>
      {selectedModule === 'Time Management' && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Planned and Actual Time</li>
          <li>Leave and Quotas</li>
          <li>Holiday Calendar</li>
          <li>Punch In/Out Details</li>
          <li>Applications and Reports</li>
        </ul>
      )}

      {/* Travel Management Description */}
      {selectedModule === 'Travel Management' && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Trip Details and Data</li>
          <li>Financial Details</li>
          <li>Allotted Itenaries</li>
          <li>Income Tax Recovery</li>
          <li>Cost Estimaion and Exceeded Data</li>
        </ul>
      )}
      {/* Task Management Description */}
      {selectedModule === 'Task Management' && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Active Plans</li>
          <li>Avaliable and Planned Tasks</li>
          <li>Assigned Lists</li>
          <li>Pending and Approved</li>
          <li>Task Reports</li>
        </ul>
      )}
      {/* Purchase Request Description */}
      {selectedModule === 'Purchase Request' && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Opened and Closed PRs</li>
          <li>Pending and Approved</li>
          <li>PR history</li>
          <li>Raise PR</li>
          <li>Ticket Generation and Reports</li>
        </ul>
      )}
      {/* Expense Reimbursement Description */}
      {selectedModule === 'Expense Reimbursement' && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>iExpence Requests</li>
          <li>Pending and Completed</li>
          <li>Reimbursement Details</li>
          <li>Description and Statements</li>
          <li>Expences Reports</li>
        </ul>
      )}  
      {/* Employee Central Description */}
      {selectedModule === 'Employee Central' && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Employee Details and Management</li>
          <li>Payrolls and Compensations</li>
          <li>CTC Reports</li>
          <li>Bank Statements</li>
          <li>Salary Register</li>
        </ul>
      )}  
      <button style={{ 
        backgroundColor: 'white', 
        color: 'black', 
        border: 'none', 
        padding: '0.5rem 1rem', 
        borderRadius: '4px', 
        cursor: 'pointer',
        marginTop: '1rem'
      }}>
        View More
      </button>
      {selectedModuleData && (
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          width: '48px',
          height: '48px',
          backgroundColor: '#6b4ba7',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px'
        }}>
          {selectedModuleData.icon}
        </div>
      )}
    </div>
  );
}

export default MainContent;