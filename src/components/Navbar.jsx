import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLoginClick, onLogoutClick, isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isContactPage = location.pathname === '/contact';
  const isPaymentPage = location.pathname === '/payment';

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    setShowLogoutModal(false);
    onLogoutClick();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`content-navbar ${isContactPage || isPaymentPage ? 'solid-navbar' : ''}`}>
        {/* Logo */}
        <div className="content-navbar-logo">
          {windowWidth > 600 ? (
            <>
              <img src="/images/logo.png" alt="ContentPlanner Logo" className="logo-img" />
              <p className="content-navbar-logo-text">Schedura</p>
            </>
          ) : (
            <img src="/images/logo.png" alt="Logo" className="logo-icon" />
          )}
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`content-navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li className={`content-navbar-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="content-link" onClick={closeMobileMenu}>Home</Link>
          </li>
          
          <li className={`content-navbar-menu-item ${location.pathname === '/calendar' ? 'active' : ''}`}>
            {isLoggedIn ? (
              <Link to="/calendar" className="content-link" onClick={closeMobileMenu}>Content Calendar</Link>
            ) : (
              <span className="content-link disabled-link">Content Calendar</span>
            )}
          </li>

          <li className={`content-navbar-menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact" className="content-link" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li className={`content-navbar-menu-item ${location.pathname === '/payment' ? 'active' : ''}`}>
            <Link to="/payment" className="content-link" onClick={closeMobileMenu}>Payment</Link>
          </li>
        </ul>

        {/* Auth Section */}
        <div className={`content-navbar-auth ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {isLoggedIn && <span className="welcome-text">Welcome, KapeSiglo</span>}
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

      {/* Logout Modal */}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}
    </>
  );
};

export default Navbar;