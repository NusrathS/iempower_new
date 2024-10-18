import React from 'react';

const experiences = [
  { name: 'Employee Experience', icon: '👤' },
  { name: 'Manager Experience', icon: '👥' },
  { name: 'Admin Experience', icon: '⚙️' },
];

function Experiencesidebar({ selectedExperience, onSelectedExperience }) {
  return (
    <div style={{ width: '250px', backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '8px' }}>
      {experiences.map((exp, index) => (
        <button
          key={index}
          onClick={() => onSelectedExperience(exp.name)}
          style={{ 
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            textAlign: 'left',
            margin: '0.5rem 0',
            padding: '0.75rem 1rem',
            backgroundColor: selectedExperience === exp.name ? '#6b4ba7' : 'transparent',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          <span style={{ marginRight: '10px', fontSize: '1.2em' }}>{exp.icon}</span>
          {exp.name}
        </button>
      ))}
    </div>
  );
}

export default Experiencesidebar;