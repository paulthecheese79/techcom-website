// components/LoginModal.jsx
import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginClick = () => {
    if (username === 'admin' && password === '12345') {
      onLogin();
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        {/* X Close Button */}
        <button className="modal-close-button" onClick={onClose}>&times;</button>

        <h2>Account Login</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="modal-buttons">
          <button className="btn" onClick={handleLoginClick}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
