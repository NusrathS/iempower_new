import React from 'react';
import './EmployeeLogin.css'; // Make sure this contains the CSS for the back-button

function EmployeeLogin({ onBack }) {
  return (
    <div className="login-page" style={{ display: 'flex', height: '100vh' }}>
      
      {/* Left Side with Back Arrow, Gradient, and Logo */}
      <div style={{ flex: 1, background: 'linear-gradient(45deg, black, #8a2be2)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        {/* Back Arrow */}
        <button 
          onClick={onBack}  // Using onBack as passed prop
          className="back-button"  // Use your styled class here

        >
        </button>
        
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <img src="/logo.png" alt="iEmpPower Logo" style={{ width: '300px', height: 'auto' }} />  
          <h1>iEmpPower</h1>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
          <h2>Employee Login</h2>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                name="userId"
                placeholder="Enter your User ID"
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>
                <input type="checkbox" style={{ marginRight: '0.5rem' }} />
                Remember me
              </label>
            </div>
            <button type="submit" style={{ backgroundColor: '#4a0e4e', color: 'white', padding: '0.75rem', border: 'none', width: '100%', borderRadius: '4px' }}>
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
}

export default EmployeeLogin;
