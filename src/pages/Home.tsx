import React, { useState } from "react";
import AsciiArt from "../components/AsciiArt";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "projects" | "contact" | "about">("home");

  const asciiArt = `

  ::::::::      :::     :::::::::  :::            :::            ::::::::      :::       :::   :::       :::     ::::    ::: ::::::::::: :::::::::: ::::::::   :::::::: 
  :+:    :+:   :+: :+:   :+:    :+: :+:          :+: :+:         :+:    :+:   :+: :+:    :+:+: :+:+:    :+: :+:   :+:+:   :+:     :+:     :+:       :+:    :+: :+:    :+: 
 +:+         +:+   +:+  +:+    +:+ +:+         +:+   +:+        +:+         +:+   +:+  +:+ +:+:+ +:+  +:+   +:+  :+:+:+  +:+     +:+     +:+       +:+        +:+    +:+  
+#+        +#++:++#++: +#++:++#:  +#+        +#++:++#++:       +#++:++#++ +#++:++#++: +#+  +:+  +#+ +#++:++#++: +#+ +:+ +#+     +#+     +#++:++#  :#:        +#+    +:+   
+#+        +#+     +#+ +#+    +#+ +#+        +#+     +#+              +#+ +#+     +#+ +#+       +#+ +#+     +#+ +#+  +#+#+#     +#+     +#+       +#+   +#+# +#+    +#+    
#+#    #+# #+#     #+# #+#    #+# #+#        #+#     #+#       #+#    #+# #+#     #+# #+#       #+# #+#     #+# #+#   #+#+#     #+#     #+#       #+#    #+# #+#    #+#     
########  ###     ### ###    ### ########## ###     ###        ########  ###     ### ###       ### ###     ### ###    #### ########### ########## ########   ########       

  
  
`;

  const renderContent = () => {
    if (currentPage === "projects") {
      return <Projects onBack={() => setCurrentPage("home")} />;
    }

    if (currentPage === "contact") {
      return <Contact onBack={() => setCurrentPage("home")} />;
    }

    if (currentPage === "about") {
      return <About onBack={() => setCurrentPage("home")} />;
    }

    return (
      <>
        <div className="profile-section">
          <div className="profile-info">
            <AsciiArt art={asciiArt} />
            <h1 className="profile-name">SOFTWARE DEVELOPER</h1>
          </div>
        </div>

        <div className="quick-stats">
          <div className="stat-item">
            <div className="stat-label">Front-end</div>
            <div className="stat-value">Vue.js</div>
            <div className="stat-detail">Angular, React</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Back-end</div>
            <div className="stat-value">Node.js</div>
            <div className="stat-detail">Express, MongoDB</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">DevOps</div>
            <div className="stat-value">Docker</div>
            <div className="stat-detail">AWS, CI/CD</div>
          </div>
        </div>

        <div className="cta-section">
          <button 
            className="terminal-button"
            onClick={() => setCurrentPage("about")}
          >
            About Me
          </button>
          <button 
            className="terminal-button"
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </button>
          <button
            className="terminal-button"
            onClick={() => setCurrentPage("projects")}
          >
            Projects
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="monitor-container">
      <div className="monitor-buttons">
        <div className="monitor-button"></div>
        <div className="monitor-button"></div>
        <div className="monitor-button"></div>
      </div>

      <div className="terminal-container">
        <div className="scanline"></div>
        <div className="screen-flicker"></div>

        <div className="terminal-header">
          <div className="system-info">
            <div>SYSTEM_READY</div>
            <div>MEMORY: 98% AVAILABLE</div>
            <div>STATUS: ONLINE</div>
          </div>
          <div className="terminal-id">INIT_SEQUENCE_001</div>
        </div>

        <div className="home-content">{renderContent()}</div>

        {/* <div className="status-bar">
          <div className="status-item">CPU: 98% OPERATIONAL</div>
          <div className="status-item">NETWORK: CONNECTED</div>
          <div className="status-item">SECURITY: ACTIVE</div>
          <span>Última Atualização: {new Date().toLocaleDateString()}</span>
        </div> */}
      </div>

      <div className="monitor-stand"></div>
    </div>
  );
};

export default Home;
