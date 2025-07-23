// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // ❌ Don't import BrowserRouter here
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
        <Route path="/" element={<Welcome isLoggedIn={isLoggedIn} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
