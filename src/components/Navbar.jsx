import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLoginClick, onLogoutClick, isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isContactPage = location.pathname === '/contact';
  const isPaymentPage = location.pathname === '/payment';
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    onLogoutClick();
    navigate('/');
  };

  return (
    <>
      <nav className={`content-navbar ${isContactPage || isPaymentPage ? 'solid-navbar' : ''}`}>
        {/* === Left: Logo === */}
        <div className="content-navbar-logo">
          <img src="/images/logo.png" alt="ContentPlanner Logo" className="logo-img" />
          <p className="content-navbar-logo-text">ContentPlanner</p>
        </div>

        {/* === Center: Links === */}
        <ul className="content-navbar-menu">
          <li className={`content-navbar-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="content-link">Home</Link>
          </li>
          <li className={`content-navbar-menu-item ${location.pathname === '/calendar' ? 'active' : ''}`}>
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

        {/* === Right: Greeting + Auth Buttons === */}
        <div className="content-navbar-auth d-flex align-items-center gap-3">
          {isLoggedIn && (
            <span className="welcome-text">Welcome, KapeSiglo</span>
          )}
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

      {/* === Logout Modal === */}
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
