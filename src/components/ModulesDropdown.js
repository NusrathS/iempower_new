import React, { useState } from 'react';
import Sidebar from './Mdulesidebar';
import MainContent from './ModulemainContent';

function ModulesDropdown() {
  const [selectedModule, setSelectedModule] = useState('Time Management');

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
      <div style={{ display: 'flex', maxWidth: '1200px', width: '100%' }}>
        <Sidebar onSelectModule={setSelectedModule} />
        <MainContent selectedModule={selectedModule} />
      </div>
    </div>
  );
}

export default ModulesDropdown;