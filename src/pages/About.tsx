import React from "react";

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="about-content">
      <div className="about-header">
        <button className="back-button" onClick={onBack}>
          <span>←</span> Back
        </button>
        <h2 className="terminal-title">ABOUT ME</h2>
      </div>

      <div className="about-info">
        <div className="info-section">
          <p className="section-text">
          I'm a front-end developer with 4 years of experience, specializing in Vue.js and passionate about building intuitive, high-performance web applications. I thrive on crafting seamless user experiences and continuously refining my coding skills. Currently, I'm expanding my expertise by exploring React and deepening my understanding of data structures and algorithms. I enjoy tackling complex problems and embracing challenges that push me to grow. While front-end development is my main focus, I'm also interested in backend technologies and always looking for opportunities to create meaningful digital experiences.
          </p>
        </div>

        <div className="info-section">
          <h3 className="section-title">EXPERIENCE</h3>
          <div className="experience-list">
            <div className="experience-item">
              <span className="experience-date">2022 - Presente</span>
              <span className="experience-title">
                Front-end Developer
              </span>
              <span className="experience-company">Ceisc</span>
            </div>
            <div className="experience-item">
              <span className="experience-date">2024 - 2025</span>
              <span className="experience-title">Front-end Developer</span>
              <span className="experience-company">Mutant</span>
            </div>
            <div className="experience-item">
              <span className="experience-date">2021 - 2022</span>
              <span className="experience-title">Front-end Developer (Internship)</span>
              <span className="experience-company">Time Energy</span>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2 className="section-title">Education</h2>
          <div className="experience-list">
            <div className="experience-item">
              <span className="experience-date">2020 - 2023</span>
              <h3 className="experience-title">Systems Analysis and Development</h3>
              <p className="experience-company">Federal Institute of Mato Grosso do Sul</p>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2 className="section-title">CODING PLAYLIST</h2>
          <div className="spotify-widget">
            <iframe
              src="https://open.spotify.com/embed/playlist/6kKBH09gEAMFeEabhwqOGn"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
