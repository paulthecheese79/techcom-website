import React, { useEffect, useState } from 'react';
import './CalendarSidebar.css';

const tipList = [
  "Use trending sound effects to boost reach.",
  "Always include a CTA in your caption.",
  "Post when your audience is most active.",
  "Match visuals with seasonal themes.",
  "Don’t forget to add your store location.",
];

const CalendarSidebar = ({ selectedDateData }) => {
  const [dailyTip, setDailyTip] = useState('');

  useEffect(() => {
    const index = new Date().getDate() % tipList.length;
    setDailyTip(tipList[index]);
  }, []);

  return (
    <div className="sidebar-container">
      <div className="sidebar-section today-section">
        <h4>📅 Today: {selectedDateData?.date || 'Select a day'}</h4>
        {selectedDateData ? (
          <>
            <p><strong>Theme:</strong> {selectedDateData.theme}</p>
            <p><strong>Video Idea:</strong> {selectedDateData.videoIdea}</p>
            <p><strong>Hashtags:</strong> {selectedDateData.hashtags.join(' ')}</p>
            <p><strong>Description:</strong> {selectedDateData.description}</p>
          </>
        ) : (
          <p>Select a date to see content plan.</p>
        )}
      </div>

      <div className="sidebar-section">
        <h5>🔍 Search</h5>
        <input type="text" placeholder="Search content..." className="sidebar-search" />
      </div>

      <div className="sidebar-section">
        <h5>📌 Filter by Theme</h5>
        <div className="filter-tags">
          <button>Brand</button>
          <button>Product</button>
          <button>Fun</button>
          <button>Holiday</button>
        </div>
      </div>

      <div className="sidebar-section">
        <h5>🧠 Tip of the Day</h5>
        <p>{dailyTip}</p>
      </div>

      <div className="sidebar-section">
        <h5>📁 Tools</h5>
        <button className="sidebar-tool-btn">Download Calendar JSON</button>
        <button className="sidebar-tool-btn">Export as PDF</button>
      </div>
    </div>
  );
};

export default CalendarSidebar;
