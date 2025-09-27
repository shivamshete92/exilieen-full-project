import React from "react";
import "./Footer.css";
import logo from "../assets/footer/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="CaWood Agriculture" className="footer-logo" />
          <p>
            NABL Accredited under QCI for Food & Water Testing. We help food
            manufacturers in product development, shelf life testing, and
            compliance.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/exilieen-scientific-research-llp/"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/contact">Contact</Link>
          <Link to="/about/company">About Company</Link>
          <Link to="/certificate">Certificate</Link>
        </div>

        <div className="footer-services">
           <h3>Services </h3>

          
          <Link to="/infrastructure">Instrumentation </Link>
          <Link to="/testing">Testing</Link>
          <Link to="/consultancy">Consultancy</Link>
          <Link to="/research">Research</Link>
          <Link to="/training">Training</Link>
        </div>

        <div className="footer-map">
          <h3>Find Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.750727637616!2d75.31550469999999!3d19.850497500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99b6a8fcc2c1%3A0x828e80fa35facf01!2sExilieen%20Scientific%20Research%20LLP!5e0!3m2!1sen!2sin!4v1753331263333!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Exilieen Scientific Research LLP Map"
          ></iframe>
        </div>
      </div>

      <div className="footer-contact">
        <div>
          <i className="fas fa-map-marker-alt"></i> FLNO-G-2, PLNO-10, G.NO-44,
          BE BAJAJ HOS GURUKRUPA AP, AURANGABAD CITY - 431001, MAHARASHTRA
        </div>
        <div>
          <i className="fas fa-phone-alt"></i> 0240-2987599
        </div>
        <div>
          <i className="fas fa-envelope"></i> deepakbornare@gmail.com
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright &copy; {new Date().getFullYear()} Exilieen Scientific Research LLP. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;