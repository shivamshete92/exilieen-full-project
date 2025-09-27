import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Research_development.css";

import {
  FaSeedling,
  FaTint,
  FaBug,
  FaVial,
  FaMicroscope,
  FaRegLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

const Research_development = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="rnd-container">
      <div className="rnd-header" data-aos="fade-down">
        <h1>🔬 Research & Development (R&D)</h1>
        <p>
          Our R&D division is the backbone of scientific innovation at our
          Agriculture Testing Lab. We are dedicated to developing cutting-edge
          solutions that enhance agricultural productivity, ensure food safety,
          and promote sustainable farming practices.
        </p>
      </div>

      <div className="rnd-focus" data-aos="fade-up">
        <h2>Key Focus Areas</h2>
        <div className="focus-grid">
          {/* ... (focus-card divs remain unchanged) ... */}
          <div className="focus-card">
            <FaSeedling className="focus-icon" />
            <h3>Soil Health & Fertility</h3>
            <p>
              Advanced testing and research to improve soil quality and optimize
              crop yields.
            </p>
          </div>
          <div className="focus-card">
            <FaTint className="focus-icon" />
            <h3>Water Quality Analysis</h3>
            <p>
              Ensuring safe and efficient irrigation practices through
              comprehensive water testing.
            </p>
          </div>
          <div className="focus-card">
            <FaBug className="focus-icon" />
            <h3>Plant Disease Prevention</h3>
            <p>
              Innovative techniques for early diagnosis and control of plant
              diseases.
            </p>
          </div>
          <div className="focus-card">
            <FaVial className="focus-icon" />
            <h3>Residue Testing</h3>
            <p>
              Researching safe agricultural practices by analyzing pesticide and
              fertilizer residues.
            </p>
          </div>
          <div className="focus-card">
            <FaMicroscope className="focus-icon" />
            <h3>Agri Biotechnology</h3>
            <p>
              Exploring molecular and genetic methods for crop improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="rnd-strengths" data-aos="fade-up">
        <h2>Our R&D Strengths</h2>
        <ul>
          <li><FaCheckCircle className="tick-icon" /> State-of-the-art laboratory infrastructure</li>
          <li><FaCheckCircle className="tick-icon" /> Experienced team of scientists and researchers</li>
          <li><FaCheckCircle className="tick-icon" /> Collaboration with universities and agricultural institutes</li>
          <li><FaCheckCircle className="tick-icon" /> Focus on real-world solutions for farmers and agri-industries</li>
        </ul>
      </div>

      {/* UPDATED SECTION STARTS HERE */}
      <div className="rnd-goals" data-aos="zoom-in">
        <h2>Impact Goals</h2>
        <ul>
          <li>
            <FaRegLightbulb className="goal-icon" />
            Boost agricultural innovation
          </li>
          <li>
            <FaRegLightbulb className="goal-icon" />
            Support farmer welfare
          </li>
          <li>
            <FaRegLightbulb className="goal-icon" />
            Contribute to sustainable development goals (SDGs)
          </li>
        </ul>
      </div>
      {/* UPDATED SECTION ENDS HERE */}
      
    </div>
  );
};

export default Research_development;