import React from "react";
import "./Training.css";
import training from "../assets/traning/training.jpg";
import {
  FaClipboardList,
  FaHandshake,
  FaRegClock,
  FaUserAlt
} from "react-icons/fa";

const Traning = () => {
  return (
    <div className="training-section">
      {/* <div className="breadcrumb">
        <span>Home &gt; Services &gt; Training</span>
      </div> */}

      <div className="training-container">
        <br />
        <h1 className="section-title">Training Facilities</h1>

        <div className="training-wrapper">
          <div className="training-left">
            <h2>Training</h2>
            <p>
              As per requirement of stakeholders, students, researchers and
              entrepreneurs. We organise pre-designed as well as module-based
              training programs at our centers with moderate charges.
            </p>

            <p>Following Training Modules are Available:</p>
            <ul className="training-list">
              <li> Training Module On Soil And Water Analysis.</li>
              <li>Training Module On Food Analysis.</li>
              <li> Training Module On ICP/OES Operations.</li>
              <li>Training Module On Handson HPLC Operations.</li>
              <li> Training Module On Handson GCMS Operations.</li>
              <li> Training Module On Water and Waste Water Analysis.</li>
              <li> Training Module On Polluted Air Sample Analysis.</li>
              <li> Training Module On Microbiology Sample Analysis.</li>
              <li> Training Module On Quality Control Laboratory Analyst.</li>
            </ul>

           
          </div>

          <div className="training-right">
            <img src={training} alt="Training Facility" />
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

export default Traning;
