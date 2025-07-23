// Payment.jsx
import React from 'react';
import './Payment.css';

const packages = [
  {
    month: "November",
    price: "₱199.00",
    highlight: "Perfect for Holiday Teasers",
    features: [
      "30 Days of Content Ideas",
      "Downloadable Video Templates",
      "Hashtag Sets & Engagement Tips"
    ],
    badge: "Best Value"
  },
  {
    month: "December",
    price: "₱249.00",
    highlight: "Christmas & Year-End Themes",
    features: [
      "31 Days of Holiday Content",
      "Gift Campaign Templates",
      "Reels & Shorts Audio Recommendations"
    ],
    badge: "Holiday Special"
  },
  {
    month: "January",
    price: "₱179.00",
    highlight: "New Year, New Strategy",
    features: [
      "Fresh New Year Content Calendar",
      "Planner Kickstart Kit",
      "Goal-Based Posting Strategy"
    ],
    badge: "Start Fresh"
  },
];

const Payment = () => {
  return (
    <div className="payment-page">
      <h2 className="section-title">Purchase Monthly Content Calendar</h2>
      <p className="section-subtitle">
        Get ahead with pre-curated content strategies designed for business growth.
      </p>

      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <div className="package-header">
              <h3>{pkg.month} Package</h3>
              {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
              <p className="package-price">{pkg.price}</p>
              <p className="package-highlight">{pkg.highlight}</p>
            </div>
            <ul className="package-features">
              {pkg.features.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
            <button className="btn-purchase">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
