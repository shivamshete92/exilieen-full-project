import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/header/logo.png';

const HamburgerIcon = ({ isOpen, ...props }) => (
  <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} {...props}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const DropdownArrow = () => (
    <svg className="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleDropdownToggle = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); 
    } else {
      setOpenDropdown(dropdownName); 
    }
  };

  return (
    <>
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="header-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Exilieen Logo" className="logo" />
          </Link>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            
            <li className="dropdown">
              
              <span onClick={() => handleDropdownToggle('about')}>
                About <DropdownArrow />
              </span>
              
              <ul className={`dropdown-menu ${openDropdown === 'about' ? 'expanded' : ''}`}>
                <li><Link to="/about/company">About Company</Link></li>
                <li><Link to="/about/AgriStartup">AgriStartup</Link></li>
              </ul>
            </li>

            <li><Link to="/Research_development">R&D</Link></li>

            <li className="dropdown">
             
              <span onClick={() => handleDropdownToggle('services')}>
                Services <DropdownArrow />
              </span>
              
              <ul className={`dropdown-menu ${openDropdown === 'services' ? 'expanded' : ''}`}>
                <li><Link to="/infrastructure">Instrumentation</Link></li>
                <li><Link to="/consultancy">Consultancy</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/training">Training</Link></li>
                <li><Link to="/testing">Testing</Link></li>
                <li><Link to="/AnalyticalService">Analytical Service</Link></li>
              </ul>
            </li>

            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/certificate">Certificate</Link></li>
          </ul>

          <HamburgerIcon isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </nav>
      </header>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Header;