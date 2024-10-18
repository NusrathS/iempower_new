import React, { useState } from 'react';
import './ManagerLogin.css';

const ManagerLogin = ({ onBack }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { userId, password, rememberMe });
  };

  return (
    <div className="login-page">
      {/* Left Side with Back Arrow, Gradient, and Logo */}
      <div className="login-left">
        <button onClick={onBack} className="back-button"></button>
        <div style={{ textAlign: 'center', color: '#fff' }}>
        <img src="/logo.png" alt="iEmpPower Logo" style={{ width: '300px', height: 'auto' }} />
          <h1>iEmpPower</h1>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
          <h2>Manager Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                name="userId"
                placeholder="Enter your User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                Remember me
              </label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            <div className="google-sign-in">
              <button type="button">
              <img src="/google.png" alt="Google" className="google-icon" />
                Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagerLogin;