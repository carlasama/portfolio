import React, { useState } from "react";
import AsciiArt from "../components/AsciiArt";
import Projects from "./Projects";
// import Contact from "./Contact";
import About from "./About";
import { GrLinkedinOption } from "react-icons/gr";

import { MdOutlineAlternateEmail } from "react-icons/md";

import { TfiGithub } from "react-icons/tfi";

const Home: React.FC = () => {
  const contacts = [
    {
      icon: <TfiGithub />,
      label: "GitHub",
      url: "https://github.com/carlasama",
      color: "#666666",
    },
    {
      icon: <GrLinkedinOption />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/carla-sama",
      color: "#666666",
    },
    {
      icon: <MdOutlineAlternateEmail />,
      label: "Email",
      url: "mailto:carlavxsamaniego@gmail.com",
      color: "#666666",
    },
  ];

  const [currentPage, setCurrentPage] = useState<"home" | "projects" | "about">(
    "home"
  );

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

    // if (currentPage === "contact") {
    //   return <Contact onBack={() => setCurrentPage("home")} />;
    // }

    if (currentPage === "about") {
      return <About onBack={() => setCurrentPage("home")} />;
    }

    return (
      <>
        <div className="profile-section">
          <div className="profile-info">
            <AsciiArt art={asciiArt} />
            <div className="container-me">
              <h1 className="profile-name">SOFTWARE DEVELOPER</h1>
              <div className="contact-grid">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                    style={
                      {
                        "--contact-color": contact.color,
                      } as React.CSSProperties
                    }
                  >
                    <div className="contact-icon">{contact.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-stacks">
          <div className="stack-line">
            <span className="terminal-prompt">$</span>
            <span className="stack-command">cat stacks.txt</span>
          </div>
          <div className="stack-content">
            <div className="stack-categories">
              <div className="stack-category">
                <span className="category-label">Front-end:</span>
                <span className="stack-items">Vue.js, Angular, React</span>
              </div>
              <div className="stack-category">
                <span className="category-label">Back-end:</span>
                <span className="stack-items">Node.js, Express, MongoDB</span>
              </div>
              <div className="stack-category">
                <span className="category-label">DevOps:</span>
                <span className="stack-items">Docker, AWS, CI/CD</span>
              </div>
            </div>

            <div className="profile-image">
              <img
                src="https://avatars.githubusercontent.com/u/84520565?v=4"
                alt="Profile"
              />
            </div>
          </div>
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
            {/* <div>SYSTEM_READY</div>
            <div>MEMORY: 98% AVAILABLE</div>
            <div>STATUS: ONLINE</div> */}
            <div className="terminal-id">INIT_SEQUENCE_001</div>
          </div>
          <div className="terminal-actions">
            <button
              className="terminal-button"
              onClick={() => setCurrentPage("about")}
            >
              ./about
            </button>
            {/* <button 
              className="terminal-button"
              onClick={() => setCurrentPage("contact")}
            >
              ./contact
            </button> */}
            <button
              className="terminal-button"
              onClick={() => setCurrentPage("projects")}
            >
              ./projects
            </button>
          </div>
        </div>

        <div className="home-content">{renderContent()}</div>
      </div>

      <div className="monitor-stand"></div>
    </div>
  );
};

export default Home;
