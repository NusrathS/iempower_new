import React, { useState } from 'react';
import Experiencesidebar from './Experiencesidebar';
import Experiencemaincontent from './Experiencemaincontent';

function ExperienceDropdown() {
  const [selectedExperience, setSelectedExperience] = useState('Employee Experience');

  return (
    <div style={{
      position: 'absolute',
      top: '60px',
      left: '0',
      right: '0',
      backgroundColor: '#1a1a1a',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ 
        display: 'flex', 
        maxWidth: '950px', 
        width: '100%', 
        backgroundColor: '#2a2a2a', 
        borderRadius: '8px', 
        overflow: 'hidden',
        padding: '20px',
        gap: '20px'  // This adds space between sidebar and main content
      }}>
        <Experiencesidebar selectedExperience={selectedExperience} onSelectedExperience={setSelectedExperience} />
        <Experiencemaincontent selectedExperience={selectedExperience} />
      </div>
    </div>
  );
}

export default ExperienceDropdown;