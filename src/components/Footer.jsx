import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* === Left: Address and Contact === */}
        <div className="footer-info">
          <div className="footer-locations">
            <div className="location-block">
              <FaMapMarkerAlt className="footer-icon" />
              <div>
                <p><strong>Tomas Morato Branch</strong><br />123 Tomas Morato Ave.<br />Quezon City, 1103</p>
                <p><strong>Eastwood Branch</strong><br />45 Eastwood Ave.<br />Quezon City, 1110</p>
              </div>
            </div>
            <div className="location-block">
              <div>
                <p><strong>Cubao Branch</strong><br />78 Aurora Blvd.<br />Quezon City, 1109</p>
                <p><strong>Katipunan Branch</strong><br />101 Katipunan Ave.<br />Quezon City, 1108</p>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <FaPhone className="footer-icon" />
              <a href="tel:+63281234567">(02) 8123-4567</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="footer-icon" />
              <a href="mailto:info@kapesiglo.com">info@schedura.com</a>
            </div>
          </div>
        </div>

        {/* === Right: Social Media === */}
        <div className="footer-social">
          <h4>FOLLOW US ON SOCIAL MEDIA</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaHome />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Schedura. All rights reserved.</p>
        <img 
          src="/images/qrcode.png"
          alt="Kape Siglo Logo" 
          className="footer-logo" 
        />
      </div>
    </footer>
  );
};

export default Footer;