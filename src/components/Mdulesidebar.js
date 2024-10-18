import React from 'react';

const modules = [
  { name: 'Time Management', icon: '⏰' },
  { name: 'Travel Management', icon: '🚗' },
  { name: 'Task Management', icon: '📋' },
  { name: 'Purchase Request', icon: '💳' },
  { name: 'Expense Reimbursement', icon: '💰' },
  { name: 'Employee Central', icon: '👤' },
];

function Sidebar({ onSelectModule }) {
  return (
    <div style={{ width: '250px', backgroundColor: '#333', color: 'white', padding: '1rem', marginRight: '20px' }}>
      {modules.map((module, index) => (
        <button
          key={index}
          onClick={() => onSelectModule(module.name)}
          style={{ 
            display: 'block', 
            width: '100%', 
            textAlign: 'left', 
            margin: '0.5rem 0', 
            padding: '0.5rem',
            backgroundColor: '#444',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          {module.icon} {module.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;