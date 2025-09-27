import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Soil.css";
import {
  FaCheckCircle,
  FaRegClock,
  FaUserAlt,
  FaHandshake,
  FaClipboardList
} from "react-icons/fa";


const consultancyPoints = [
  "Our consultancy services will provide you laboratory expertise to fulfill your product compliance as per regulatory norms.",
  "We provide analytical R&D support to establish your product in the global market.",
  "We support and undertake consultancy projects/research assignments from Govt./Private institutes, Students research assignments, and Individual product development work limited to our laboratory scope as per stakeholders' needs."
];


const Consultancy = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="consultancy-section">
      <div className="consultancy-container">
        <br />
        <h1 className="section-title" data-aos="fade-up">Consultancy</h1>

        <div className="consultancy-content" data-aos="fade-up">
          <ul>
          
            {consultancyPoints.map((point, idx) => (
              <li key={idx}>
                <FaCheckCircle className="check-icon" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="consultancy-stats" data-aos="fade-up">
          <div className="stat-item">
            <span className="stat-number">14</span>
            <div className="stat-label">
              <FaClipboardList className="stat-icon" />
              <div>PROJECTS COMPLETED</div>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-number">4789</span>
            <div className="stat-label">
              <FaHandshake className="stat-icon" />
              <div>HAPPY CLIENTS</div>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-number">0 lac</span>
            <div className="stat-label">
              <FaRegClock className="stat-icon" />
              <div>SOIL HEALTH CARD Distributed</div>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-number">13</span>
            <div className="stat-label">
              <FaUserAlt className="stat-icon" />
              <div>OUR EXPERTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;