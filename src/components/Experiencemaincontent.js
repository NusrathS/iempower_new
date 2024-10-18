import React from 'react';

const experienceContent = {
  'Employee Experience': {
    description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    icon: '👤'
  },
  'Manager Experience': {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '👥'
  },
  'Admin Experience': {
    description: 'Ipsum lorem dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    icon: '⚙️'
  }
};

function Experiencemaincontent({ selectedExperience }) {
  const content = experienceContent[selectedExperience];

  return (
    <div style={{ 
      flex: 1, 
      padding: '1rem', 
      color: 'white', 
      backgroundColor: '#333', 
      borderRadius: '8px',
      position: 'relative'  // Added to allow absolute positioning of the icon
    }}>
      <h2>{selectedExperience}</h2>
      <p style={{ color: '#aaa' }}>
        {content.description}
      </p>
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
        {content.icon}
      </div>
    </div>
  );
}

export default Experiencemaincontent;