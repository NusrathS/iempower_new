import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onBack }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt', { userId, password, rememberMe });
    // Implement your login logic here
  };

  return (
    <div className="login-page" style={{ display: 'flex', height: '100vh' }}>
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
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your User ID"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
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

export default AdminLogin;