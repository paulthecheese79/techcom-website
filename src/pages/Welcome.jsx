import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';
import agendaData from '../data/julyContent.json';

const Welcome = ({ isLoggedIn, onLoginClick }) => {
  const [todayAgenda, setTodayAgenda] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const agenda = agendaData.find(item => item.date === today);
    setTodayAgenda(agenda);
  }, []);

  return (
    <div className="welcome-container">
      {/* === Cover Section === */}
      <section
        className="cover-section d-flex align-items-center justify-content-center text-center"
        style={{
          background: "url('/images/cover.jpg') center center / cover no-repeat",
        }}
      >
        <div className="cover-content text-white">
          <h1 className="display-4">Plan Your Content with Confidence</h1>
          <p className="lead">Organize, schedule, and manage — all in one place</p>
          <a href="#calendar" className="btn btn-outline-light mt-3">Get Started</a>
        </div>
      </section>

      {/* === Features Section === */}
      <section className="container my-5 text-center" id="calendar">
        <h2>Why Use ContentPlanner?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <h5>Simple UI</h5>
            <p>Easy to navigate and plan your posts in seconds.</p>
          </div>
          <div className="col-md-4">
            <h5>Full Calendar View</h5>
            <p>Manage your schedule week-by-week or month-by-month.</p>
          </div>
          <div className="col-md-4">
            <h5>Reminder System</h5>
            <p>Get alerts so you never miss a deadline.</p>
          </div>
        </div>
      </section>

      {/* === Agenda Section (Only when Logged In) === */}
      {isLoggedIn && todayAgenda && (
        <section className="agenda-section container my-5 d-flex align-items-center justify-content-center" id="agenda">
          <div className="row w-100 align-items-center">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="agenda-video-card">
                <video
                  autoPlay
                  loop
                  muted
                  className="agenda-video"
                  playsInline
                >
                  <source src={todayAgenda.videoUrl} type="video/mp4" />
                </video>
                <div className="agenda-label">Today's Theme: {todayAgenda.label}</div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="agenda-title">Today's Agenda</h3>
              <p><strong>Theme:</strong> {todayAgenda.theme}</p>
              <p><strong>Suggested Video:</strong> {todayAgenda.videoIdea}</p>
              <p><strong>Hashtags:</strong> {todayAgenda.hashtags.join(' ')}</p>
            </div>
          </div>
        </section>
      )}

      {/* === Sign-Up CTA Section (Only when Not Logged In) === */}
      {!isLoggedIn && (
        <section className="signup-cta-section container-fluid my-5">
          <div className="row align-items-center signup-cta-wrapper">
            {/* Image - Left */}
            <div className="col-md-6 signup-image p-0">
              <img src="/images/sign-up.jpg" alt="Promo Watch" className="signup-img" />
            </div>

            {/* Content - Right */}
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center text-white signup-content">
              <h2 className="signup-title mb-3">
                <span style={{ color: 'var(--warning-color)', fontWeight: 'bold' }}>Seize the day</span><br />
                <span style={{ color: 'white', fontWeight: 'bold' }}> with ContentPlanner!</span>
              </h2>
              <button className="btn btn-light btn-lg mt-3" onClick={onLoginClick}>
                Sign Up Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* === Carousel Section === */}
      <Carousel fade interval={4000} controls indicators>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>One Thousand Flavors in</h3>
            <p>One Place</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Visualize Your Monthly Workflow</h3>
            <p>Drag, drop, and organize like a pro.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Collaborate With Your Team</h3>
            <p>Share your content plans and stay aligned.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Welcome;
