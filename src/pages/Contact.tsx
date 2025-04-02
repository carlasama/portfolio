import React from 'react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  return (
    <div className="contact-content">
      <div className="contact-header">
        <button className="back-button" onClick={onBack}>
          <span>←</span> Back
        </button>
        <h2 className="terminal-title">CONTACT</h2>
      </div>

      <div className="contact-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <a href="mailto:carlavxsamaniego@gmail.com" className="info-value">
            <i className="fas fa-envelope"></i> carlavxsamaniego@gmail.com
          </a>
        </div>
        <div className="info-item">
          <span className="info-label">GitHub:</span>
          <a href="https://github.com//carlasama" target="_blank" rel="noopener noreferrer" className="info-value">
            <i className="fab fa-github"></i> github.com/carlasama
          </a>
        </div>
        <div className="info-item">
          <span className="info-label">LinkedIn:</span>
          <a href="https://linkedin.com/in//carla-sama" target="_blank" rel="noopener noreferrer" className="info-value">
            <i className="fab fa-linkedin"></i> linkedin.com/in/carla-sama
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 