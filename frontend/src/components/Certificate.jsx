import React, { useState } from "react";
import "./Certificate.css";

import certificate from "../assets/certificate/certificate.png";

const certificates = [
  { name: "Certificate of Recommendation", image: certificate },
];

const Certificate = () => {
  const [activeCert, setActiveCert] = useState(null);

  const handleOpen = (cert) => {
    setActiveCert(cert);
  };

  const handleClose = () => {
    setActiveCert(null);
  };

  return (
    <div className="certificate-section">
      <h1 className="section-title">Our Certificates</h1>

      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
            onClick={() => handleOpen(cert)}
          >
            <div className="certificate-name">{cert.name}</div>
          </div>
        ))}
      </div>

      {activeCert && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={handleClose}>
              &times;
            </span>
            <img
              src={activeCert.image}
              alt={activeCert.name}
              className="modal-image"
            />
            <p className="modal-caption">{activeCert.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
