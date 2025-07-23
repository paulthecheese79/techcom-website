import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLoginClick, onLogoutClick, isLoggedIn }) => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isPaymentPage = location.pathname === '/payment';
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    onLogoutClick(); // Trigger actual logout logic
  };

  return (
    <>
      <nav className={`content-navbar ${isContactPage ? 'solid-navbar' : isPaymentPage ? 'solid-navbar':''}`}>
        {/* Left: Logo or Greeting */}
        <div className="content-navbar-logo">
          <p className="content-navbar-logo-text">
            {isLoggedIn ? 'Welcome, Kape Siglo' : 'ContentPlanner'}
          </p>
        </div>

        {/* Center: Navigation Links */}
        <ul className="content-navbar-menu">
          <li className={`content-navbar-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="content-link">Home</Link>
          </li>
          <li
            className={`content-navbar-menu-item ${location.pathname === '/calendar' ? 'active' : ''}`}
          >
            {isLoggedIn ? (
              <Link to="/calendar" className="content-link">Content Calendar</Link>
            ) : (
              <span className="content-link disabled-link">Content Calendar</span>
            )}
          </li>
          <li className={`content-navbar-menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact" className="content-link">Contact</Link>
          </li>
          <li className={`content-navbar-menu-item ${location.pathname === '/payment' ? 'active' : ''}`}>
            <Link to="/payment" className="content-link">Payment</Link>
          </li>
        </ul>

        {/* Right: Login/Logout */}
        <div className="content-navbar-auth">
          {isLoggedIn ? (
            <button className="btn-login-transparent" onClick={() => setShowLogoutModal(true)}>
              Logout
            </button>
          ) : (
            <button className="btn-login-transparent" onClick={onLoginClick}>
              Login
            </button>
          )}
        </div>
      </nav>

      {/* === Logout Confirmation Modal === */}
      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <p>Are you sure you want to log out?</p>
            <div className="logout-modal-buttons">
              <button onClick={handleLogout} className="confirm-btn">Yes, Log out</button>
              <button onClick={() => setShowLogoutModal(false)} className="btn btn-secondary btn-sm">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
