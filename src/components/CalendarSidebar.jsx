// CalendarSidebar.jsx
import React from 'react';
import './CalendarSidebar.css';
import julyContent from '../data/julyContent.json';
import novemberContent from '../data/novemberContent.json';


const monthMap = {

  6: { name: 'July', data: julyContent },
  10: { name: 'November', data: novemberContent },

};

const CalendarSidebar = ({ monthInfo }) => {
  const { month } = monthInfo;
  const { name, data } = monthMap[month] || {};

  return (
    <div className="sidebar-container">
      {name ? (
        <>
          <h3 className="sidebar-month">{name}</h3>
          <ul className="sidebar-days">
            {data.map((item, index) => (
              <li key={index} className="sidebar-day">
                <div className="day-number">{new Date(item.date).getDate().toString().padStart(2, '0')}</div>
                <div className="day-theme">
                  <p className="theme-title">{item.theme}</p>
                  <p className="theme-label">{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="no-data">No content data for this month</p>
      )}
    </div>
  );
};

export default CalendarSidebar;
