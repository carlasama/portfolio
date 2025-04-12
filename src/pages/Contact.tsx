import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import { TiSocialGithub } from 'react-icons/ti';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const contacts = [
    {
      icon: <TiSocialGithub />,
      label: 'GitHub',
      url: 'https://github.com/carlasama',
      color: '#666666'
    },
    {
      icon: <CiLinkedin />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/carla-sama',
      color: '#666666'
    },
    {
      icon: <HiOutlineMail />,
      label: 'Email',
      url: 'mailto:carlavxsamaniego@gmail.com',
      color: '#666666'
    },
  ];

  return (
    <div className="contact-content">
      <div className="contact-header">
        <button className="back-button" onClick={onBack}>
          <span>←</span> Back
        </button>
        <h2 className="terminal-title">Contact</h2>
      </div>

      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            style={{ '--contact-color': contact.color } as React.CSSProperties}
          >
            <div className="contact-icon">
              {contact.icon}
            </div>
            <span className="contact-label">{contact.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact; 