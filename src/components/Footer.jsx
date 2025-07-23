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
                <p><strong>Westfield</strong><br />233 North Ave., East<br />Westfield, NJ 07090</p>
                <p><strong>Short Hills</strong><br />549 Millburn Ave.<br />Short Hills, NJ 07078</p>
              </div>
            </div>
            <div className="location-block">
              <div>
                <p><strong>Ridgewood</strong><br />2-4 Garber Sq,<br />Ridgewood, NJ 07450</p>
                <p><strong>Red Bank</strong><br />301 Maple Ave.,<br />Red Bank, NJ 07701</p>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <FaPhone className="footer-icon" />
              <a href="tel:9086861200">(908) 686-1200</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="footer-icon" />
              <a href="mailto:michelle@signaturerealtynj.com">michelle@signaturerealtynj.com</a>
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
        <p>&copy; 2025 ContentPlanner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
