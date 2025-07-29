import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal, Button } from 'react-bootstrap';
import './CalendarMain.css';

// Import content data
import julyContent from '../data/julyContent.json';
import novemberContent from '../data/novemberContent.json';
import decemberContent from '../data/decemberContent.json';

const CalendarMain = ({ onMonthChange }) => {
  const [contentData, setContentData] = useState(julyContent);
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Holiday events data
  const holidayEvents = {
    6: [ // July
      { title: 'Eid al-Adha (Tentative)', date: '2025-07-04', color: '#ff6666' },
      { title: 'SONA (State of the Nation Address)', date: '2025-07-22', color: '#ff9999' }
    ],
    10: [ // November
      { title: 'All Saints\' Day (Undas)', date: '2025-11-01', color: '#ffcc99' },
      { title: 'All Souls\' Day', date: '2025-11-02', color: '#ffcc99' },
      { title: 'Bonifacio Day', date: '2025-11-30', color: '#ffb366' }
    ],
    11: [ // December
      { title: 'Feast of the Immaculate Conception', date: '2025-12-08', color: '#ccffff' },
      { title: 'Christmas Day', date: '2025-12-25', color: '#66cc66' },
      { title: 'Rizal Day', date: '2025-12-30', color: '#99ccff' },
      { title: 'New Year\'s Eve', date: '2025-12-31', color: '#cccccc' }
    ]
  };

  // Fixed events
  const fixedEvents = [
    { title: 'Grand Opening', date: '2025-01-02' },
    { title: 'Guided Tour', date: '2025-01-03' },
    { title: 'Young & Creative', date: '2025-01-06' }
  ];

  const handleDateClick = (arg) => {
    const content = contentData.find(item => item.date === arg.dateStr);
    if (content) {
      setSelectedContent(content);
      setShowModal(true);
      setIsExpanded(false);
      setImageLoaded(false);
    }
  };

  const handleDatesSet = (dateInfo) => {
    const currentMonth = dateInfo.start.getMonth();
    const currentYear = dateInfo.start.getFullYear();
    onMonthChange({ month: currentMonth, year: currentYear });

    switch (currentMonth) {
      case 6: setContentData(julyContent); break;
      case 10: setContentData(novemberContent); break;
      case 11: setContentData(decemberContent); break;
      default: setContentData([]);
    }
  };

  const handleClose = () => setShowModal(false);
  const handleToggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[...fixedEvents, ...Object.values(holidayEvents).flat()]}
        showNonCurrentDates={false}
        fixedWeekCount={false}
        dateClick={handleDateClick}
        datesSet={handleDatesSet}
        height={900}
        contentHeight={600}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'prev,next today'
        }}
      />

      {/* Enhanced Modal with Left-side Expansion */}
      <Modal 
        show={showModal} 
        onHide={handleClose}
        dialogClassName={`custom-modal ${isExpanded ? 'expanded' : ''}`}
        size="xl" // Added for better base sizing
      >
        <div className="modal-content-wrapper">
          {/* Image Panel - Now Wider */}
          <div className={`image-panel ${isExpanded ? 'visible' : ''}`}>
            {selectedContent?.imageUrl && (
              <div className="image-container">
                {!imageLoaded && (
                  <div className="image-loading">
                    <div className="spinner"></div>
                  </div>
                )}
                <img 
                  src={selectedContent.imageUrl} 
                  alt={selectedContent.theme}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    e.target.src = '/placeholder.jpg';
                    setImageLoaded(true);
                  }}
                  className={imageLoaded ? 'loaded' : ''}
                  style={{ 
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
                {/* Image Action Buttons */}
                <div className="image-actions">
                  <Button 
                    variant="primary" 
                    size="sm"
                    style={{
                      backgroundColor: 'var(--button-color)',
                      borderColor: 'var(--button-color)'
                    }}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = selectedContent.imageUrl;
                      link.download = `kapesiglo-${selectedContent.date}.jpg`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Download Image
                  </Button>
                  {selectedContent?.canvaLink && (
                    <Button 
                      variant="success" 
                      size="sm"
                      style={{
                        backgroundColor: 'var(--accent-color)',
                        borderColor: 'var(--accent-color)',
                        marginLeft: '10px'
                      }}
                      onClick={() => window.open(selectedContent.canvaLink, '_blank')}
                    >
                      Open in Canva
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Toggle Button */}
          <div className={`expand-toggle ${isExpanded ? 'expanded' : ''}`} onClick={handleToggleExpand}>
            <div className="semi-circle">
              <span className={`arrow ${isExpanded ? 'flipped' : ''}`}>
                {isExpanded ? '←' : '→'}
              </span>
            </div>
          </div>

          {/* Main Content (Right Side) */}
          <div className="main-modal-content">
            <Modal.Header closeButton>
              <Modal.Title>{selectedContent?.theme}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Date:</strong> {selectedContent?.date}</p>
              <p><strong>Scheduled Time:</strong> {selectedContent?.scheduledTime}</p>
              <p><strong>Video Idea:</strong> {selectedContent?.videoIdea}</p>
              <p><strong>Description:</strong> {selectedContent?.description}</p>
              <p><strong>Caption:</strong>
              <div className="caption-text">{selectedContent?.caption}</div>
              </p>
              <p><strong>Hashtags:</strong></p>
              <ul>
                {selectedContent?.hashtags?.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CalendarMain;