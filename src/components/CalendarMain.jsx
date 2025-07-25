// src/components/CalendarMain.jsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './CalendarMain.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import contentData from '../data/julyContent.json';

const holidayEventsJuly = [
  {
    title: 'Eid al-Adha (Tentative)',
    date: '2025-07-04',
    color: '#ff6666'
  },
  {
    title: 'SONA (State of the Nation Address)',
    date: '2025-07-22',
    color: '#ff9999'
  }
];

const events = [
  {
    title: 'Grand Opening',
    date: '2025-01-02',
  },
  {
    title: 'Guided Tour',
    date: '2025-01-03',
  },
  {
    title: 'Young & Creative',
    date: '2025-01-06',
  },
];

const CalendarMain = ({ onMonthChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleDateClick = (arg) => {
    const content = contentData.find(item => item.date === arg.dateStr);
    if (content) {
      setSelectedContent(content);
      setShowModal(true);
    }
  };

   const handleDatesSet = (dateInfo) => {
    const currentMonth = dateInfo.start.getMonth(); // 0-indexed
    const currentYear = dateInfo.start.getFullYear();
    onMonthChange({ month: currentMonth, year: currentYear });
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[...events, ...holidayEventsJuly]}
        showNonCurrentDates={false}
        fixedWeekCount={false}
        dateClick={handleDateClick}
        datesSet={handleDatesSet}
        height={900}
        contentHeight={600}
      />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedContent?.theme}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Date:</strong> {selectedContent?.date}</p>
          <p><strong>Video Idea:</strong> {selectedContent?.videoIdea}</p>
          <p><strong>Description:</strong> {selectedContent?.description}</p>
          <p><strong>Hashtags:</strong></p>
          <ul>
            {selectedContent?.hashtags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CalendarMain;
