// src/pages/CalendarPage.jsx
import React, { useState } from 'react';
import CalendarSidebar from '../components/CalendarSidebar';
import CalendarMain from '../components/CalendarMain';
import './CalendarPage.css';

const CalendarPage = () => {
  const [currentMonthInfo, setCurrentMonthInfo] = useState({ month: new Date().getMonth(), year: new Date().getFullYear() });

  return (
    <div className="calendar-wrapper">
      <div className="calendar-top-bar">
      </div>
     <div className="calendar-layout">
       <div className="calendar-content">
         <CalendarMain onMonthChange={setCurrentMonthInfo}/>
       </div>
      <div className="calendar-sidebar">
        <div className="calendar-sidebar-banner">
            <img src="/images/sidebar-banner.jpg" alt="Calendar Banner" />
          </div>
        <CalendarSidebar monthInfo={currentMonthInfo} />
       </div>
      </div>
    </div>
  );
};

export default CalendarPage;
