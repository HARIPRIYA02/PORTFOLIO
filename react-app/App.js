import React, { useState } from 'react';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Hari Priya Muppidi</h1>
          <nav>
            <ul>
              <li><a href="#summary">Summary</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>
          <button id="toggleSidebar" onClick={toggleSidebar}>☰</button>
        </div>
      </header>
      <main>
        <aside id="sidebar" className={sidebarOpen ? 'open' : ''}>
          <ul>
            <li><a href="#summary">Summary</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        
            </aside>
            <section id="summary" className="section summary-container">
                <h2>Summary of Qualifications</h2>
                <p>2 years of experience in WebLogic Administration, Oracle Fusion Middleware, troubleshooting application issues and tuned 100+ application metric alerts by analyzing trends in graphs thereby reducing 99% of the incident counts. Experienced in web development. Seeking a collaborative team role with continued skill development opportunities.</p>
            </section>
            <section id="education" className="section education-container">
                <h2>Education</h2>
                <p><strong>University of Georgia, School of Computing</strong><br />
                    Master of Science, Computer Science - Thesis<br />
                    August 2023 – May 2025</p>
                <p><strong>Mahatma Gandhi Institute of Technology, Department of Computer Science</strong><br />
                    Bachelor of Technology, Computer Science<br />
                    July 2017 - July 2021<br />
                    Gold medalist – Rank (1/180)</p>
            </section>
            <section id="skills" className="section skills-container">
                <h2>Skills</h2>
                <ul>
                    <li>Languages/Frameworks: Java, Python, C, C++, HTML, CSS, JavaScript, React, Spring Boot</li>
                    <li>Operating Systems: Windows, Linux, Unix</li>
                    <li>Platforms: GitHub, Google Colab</li>
                </ul>
            </section>
            <section id="experience" className="section experience-container">
                <h2>Experience</h2>
                <h3>Accenture (Infrastructure Management - Middleware team for Ross Stores) Hyderabad, India</h3>
        <p><strong>Custom Software Engineering Analyst &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                       September 2022 – July 2023</strong></p>
        <ul>
            <li>Coordinated with Backup and Storage team on restoration and rerun of 50+ backup job failures.</li>
            <li>Updated configuration settings for 10+ nonproduction servers, troubleshooted the angular redirects of LWA application and successfully tested patching automation scripts on 6 RDM nonproduction mobile environments.</li>
        </ul>
        <p><strong>Application Development Associate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                         August 2021 - August 2022</strong></p>
        <ul>
            <li>Eliminated the critical impact of application inaccessibility and downtime.</li>
            <li>Applied WebLogic patches and log4j shell vulnerability patches on 100+ middleware instances and renewed wild card certificates on 50+ nonproduction and production servers for 20+ applications.</li>
        </ul>
            </section>
            <section id="projects" className="section projects-container">
                <h2>Projects</h2>
                <ol>
                    <li>JPMORGAN CHASE & Co. Software Eng. Virtual Experience - Built an interface with a stock price data feed and visually displaying data for traders using JavaScript and React</li>
                    <li>HTTPS download accelerator using Range requests using C programming</li>
                    <li>Analyzed mobile traffic data in urban environment using time series forecasting in Python</li>
                    <li>Built a portfolio website using HTML, CSS, JavaScript</li>
                </ol>
            </section>
        </main>
      </div>
    );
  }
  

export default App;