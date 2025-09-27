import React from "react";
import "./Training.css";
import training from "../assets/traning/training.jpg";
import {
  FaClipboardList,
  FaHandshake,
  FaRegClock,
  FaUserAlt,
} from "react-icons/fa";

const Testing = () => {
  return (
    <div className="training-section">
      <div className="training-container">
        <br />
        {/* Title updated here */}
        <h1 className="section-title">Analytical Facilities</h1>

        <div className="training-wrapper">
          <div className="training-left">
            {/* List content replaced here */}
            <ul className="training-list">
              <li>Soil Analysis.</li>
              <li>Irrigation Water Analysis.</li>
              <li>Plant & Leaf Analysis.</li>
              <li>Fertilizer (Compost & Water Soluble) Analysis.</li>
              <li>Drinking Water Analysis.(Portable Water).</li>
              <li>Food Analysis.</li>
              <li>Microbiological Sample Analysis. (Food Sample).</li>
              <li>Industrial Water and Waste Water Analysis.</li>
              <li>Microbiological Sample Analysis. (Water And Waste Water).</li>
              <li>Ambient Air and Stack Monitoring Analysis.</li>
              <li>Pesticide Detection.</li>
              <li>Polymer Sample Analysis.</li>
              <li>Pharmaceutical Sample Analysis.</li>
              <li>GMO Analysis.</li>
              <li>Heavy & Toxic Metal Analysis.</li>
              <li>Other Tailor made Sample Analysis.</li>
            </ul>
          </div>

          <div className="training-right">
            <img src={training} alt="Analytical Facility" />
          </div>
        </div>

        <div className="consultancy-stats">
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
            <span className="stat-number">0 LAC</span>
            <div className="stat-label">
              <FaRegClock className="stat-icon" />
              <div>SOIL HEALTH CARDS</div>
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

export default Testing;