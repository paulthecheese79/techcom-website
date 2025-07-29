// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Calendar from './pages/Calendar';
import Contact from './pages/ContactPage';
import Payment from './pages/Payment';
import LoginModal from './components/LoginModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Redirect to home on refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Only redirect if we're not already on the home page
      if (window.location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar
        onLoginClick={() => setShowModal(true)}
        onLogoutClick={handleLogout}
        isLoggedIn={isLoggedIn}
      />
      {showModal && <LoginModal onClose={() => setShowModal(false)} onLogin={handleLogin} />}
      <Routes>
        <Route path="/" element={<Welcome isLoggedIn={isLoggedIn} onLoginClick={() => setShowModal(true)}/>} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;