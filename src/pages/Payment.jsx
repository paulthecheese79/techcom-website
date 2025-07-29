import React from 'react';
import './Payment.css';

const packages = [
  {
    name: "Standard Plan",
    prices: {
      weekly: "₱1,200/week",
      monthly: "₱4,500/month"
    },
    features: [
      "12–16 posts per month",
      "Branded captions + hashtag suggestions",
      "Weekly posting schedule",
      "Editable Canva templates",
      "Monthly trend & engagement tips newsletter"
    ],
    badge: "Most Popular"
  },
  {
    name: "Premium Plan",
    prices: {
      weekly: "₱2,000/week",
      monthly: "₱7,000/month"
    },
    features: [
      "20+ posts per month",
      "Custom copywriting + campaign-based captions",
      "Full visual calendar",
      "Holiday and seasonal template kit (6+ templates/month)",
      "Strategic post timing based on insights",
      "Monthly content performance review",
      "Priority client support"
    ],
    badge: "Best Value"
  }
];

const Payment = () => {
  return (
    <div className="payment-page">
      <h2 className="section-title">Content Management Plans</h2>
      <p className="section-subtitle">
        Choose the perfect package for your social media needs
      </p>

      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <div className="package-content">
              <div className="package-header">
                <h3>{pkg.name}</h3>
                {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
                <div className="price-container">
                  <p className="package-price">{pkg.prices.weekly}</p>
                  <p className="package-price">{pkg.prices.monthly}</p>
                </div>
              </div>
              <ul className="package-features">
                {pkg.features.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>
            </div>
            <button className="btn-purchase">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;