import React from 'react';
import './Experts.css';
import {
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

// Import team images
import expertImg1 from '../assets/expert/expert1.jpeg';
import expertImg2 from '../assets/expert/expert2.jpeg';
import expertImg3 from '../assets/expert/expert3.jpeg';
import expertImg4 from '../assets/expert/expert4.jpeg';
import expertImg5 from '../assets/expert/expert5.jpeg';
import expertImg6 from '../assets/expert/expert6.jpeg';
import expertImg7 from '../assets/expert/expert7.jpeg';
import expertImg8 from '../assets/expert/expert8.jpeg';
import expertImg9 from '../assets/expert/expert9.jpeg';
import expertImg10 from '../assets/expert/expert10.jpeg';
import expertImg11 from '../assets/expert/expert11.jpeg';
import expertImg12 from '../assets/expert/expert12.jpeg';
import expertImg13 from '../assets/expert/expert13.jpeg';
import expertImg14 from '../assets/expert/expert14.jpeg';
import expertImg15 from '../assets/expert/expert15.jpeg';


const teamMembers = [
  { name: "Mr. Tejas Mahakal", role: "Founder", image: expertImg1 },
  { name: "Mr. Tejas Mahakal", role: "CFO", image: expertImg2 },
  { name: "Mr. Tejas Mahakal", role: "Head Food and Water Section", image: expertImg3 },
  { name: "Mr. Tejas Mahakal", role: "Head Microbiology", image: expertImg4 },
  { name: "Mr. Tejas Mahakal", role: "Sr Microbiologist", image: expertImg5 },
  { name: "Mr. Tejas Mahakal", role: "Sr Chemical/Material Analysis", image: expertImg6 },
  { name: "Mr. Tejas Mahakal", role: "Senior Water Department", image: expertImg7 },
  { name: "Mr. Tejas Mahakal", role: "Chemist", image: expertImg8 },
  { name: "Mr. Tejas Mahakal", role: "Lab Co-ordinator", image: expertImg9 },
  { name: "Mr. Tejas Mahakal", role: "Head Sample Collection", image: expertImg10 },
  { name: "Mr. Tejas Mahakal", role: "Chemist", image: expertImg11 },
  { name: "Mr. Tejas Mahakal", role: "Chemist", image: expertImg12 },
  { name: "Mr. Tejas Mahakal", role: "Chemist", image: expertImg13 },
  { name: "Mr. Tejas Mahakal", role: "Chemist", image: expertImg14 },
  { name: "Mr. Tejas Mahakal", role: "Microbiologist", image: expertImg15 },
];

const Experts = () => {
  return (
    <div className="experts-page">
      <h1>Our Team</h1>
      <h4 className="experts-quote">
        “Collaboration cuts the workload and multiplies achievement.”
      </h4>

      <div className="experts-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="expert-card">
            <div className="image-container">
              <img src={member.image} alt={member.name} />
              <div className="social-icons">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/tejas-mahakal-758094206/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <h5>{member.name}</h5>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
