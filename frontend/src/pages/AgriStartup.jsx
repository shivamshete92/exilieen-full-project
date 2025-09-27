import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./AgriStartup.css";
import { 
  FaSeedling, 
  FaFlask, 
  FaLightbulb, 
  FaHandHoldingUsd, 
  FaHandshake, 
  FaUserTie, 
  FaRocket, 
  FaGraduationCap, 
  FaUsers 
} from "react-icons/fa";

const AgriStartup = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="agristartup-container">
      <div className="agri-header" data-aos="fade-down">
        <br />
        <h1>🟠 AgriStartup – Empowering Agri Entrepreneurs</h1>
        <p>
          AgriStartup is our initiative to support and accelerate innovation in
          agriculture. We aim to empower early-stage agri-entrepreneurs,
          startups, and students by providing technical guidance, lab access,
          and mentorship to turn their ideas into impactful solutions.
        </p>
      </div>

      <div className="agri-features" data-aos="fade-up">
        <h2>What We Offer</h2>
        <div className="feature-grid">
          {/* Feature cards remain the same */}
          <div className="feature-card">
            <FaSeedling className="feature-icon" />
            <h3>Incubation Support</h3>
            <p>Dedicated workspace and infrastructure for agri startups.</p>
          </div>
          <div className="feature-card">
            <FaFlask className="feature-icon" />
            <h3>Lab Access</h3>
            <p>
              Use of advanced analytical labs for soil, water, and crop testing.
            </p>
          </div>
          <div className="feature-card">
            <FaLightbulb className="feature-icon" />
            <h3>Mentorship</h3>
            <p>
              Expert advice from industry leaders, scientists, and agri-business
              experts.
            </p>
          </div>
          <div className="feature-card">
            <FaHandHoldingUsd className="feature-icon" />
            <h3>Funding Guidance</h3>
            <p>
              Help in connecting with government schemes, grants, and investors.
            </p>
          </div>
          <div className="feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Networking</h3>
            <p>
              Collaborations with research institutes, agri universities, and
              farmers.
            </p>
          </div>
        </div>
      </div>

      {/* === UPDATED SECTION STARTS HERE === */}
      <div className="agri-apply" data-aos="fade-up">
        <div className="apply-content-box">
            <h2>Who Can Apply</h2>
            <ul>
              <li><FaUserTie className="apply-icon" /> Budding agri entrepreneurs</li>
              <li><FaRocket className="apply-icon" /> Agri-tech startup founders</li>
              <li><FaGraduationCap className="apply-icon" /> Students with agri-based innovations</li>
              <li><FaUsers className="apply-icon" /> NGOs and FPOs working in the rural/agri domain</li>
            </ul>
        </div>
      </div>
      {/* === UPDATED SECTION ENDS HERE === */}

      <div className="agri-join" data-aos="zoom-in">
        <h2>Join the AgriStartup Program</h2>
        <p>
          Be part of a growing ecosystem driving sustainability, food security,
          and rural development.
        </p>
      </div>
    </div>
  );
};

export default AgriStartup;