// src/pages/CalendarPage.jsx
import React from 'react';
import CalendarSidebar from '../components/CalendarSidebar';
import CalendarMain from '../components/CalendarMain';
import './CalendarPage.css';

const CalendarPage = () => {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-top-bar">
      </div>
    <div className="calendar-layout">
      <div className="calendar-content">
        <CalendarMain />
      </div>
      <div className="calendar-sidebar">
        <CalendarSidebar />
      </div>
    </div>
    </div>
  );
};

export default CalendarPage;
