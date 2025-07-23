import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show confirmation modal
    setShowModal(true);

    // Redirect to homepage after 2 seconds
    setTimeout(() => {
      setShowModal(false);
      navigate('/');
    }, 2000);
  };
  return (
    <div className="contact-container">
      

      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-card">
        {/* Left Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> +1 617-588-7207</p>
          <p><strong>Email:</strong> info@quera.com</p>

          <h2>Office Location</h2>
          <p>1380 Soldiers Field Road,</p>
          <p>Boston, MA 02135, USA</p>
        </div>

        {/* Right Section (Form) */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Ask us anything</h2>
          <div className="form-row">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <textarea placeholder="How can we help?" rows="4" required />

          <label className="checkbox-label">
            <input type="checkbox" /> Add me to your mailing list
          </label>

          <div className="captcha-box">[reCAPTCHA]</div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <FaCheckCircle size={60} color="var(--success-color)" />
            <h2>Thanks for the feedback!</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
