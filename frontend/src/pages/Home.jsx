import React from "react"; // Removed unused useEffect import
import { useNavigate } from "react-router-dom";
import "./Home.css";

// Importing assets
import heroVideo from "../assets/home/hero.mp4";
import lab1 from "../assets/home/lab1.jpg";
import lab2 from "../assets/home/lab2.jpg";
import lab3 from "../assets/home/lab3.jpg";

// Data for our services
const servicesData = [
  {
    image: lab1,
    title: "CONSULTANCY",
    description: "Expert guidance on food safety, nutrition labeling, lab setup & certifications.",
    alt: "A modern science laboratory"
  },
  {
    image: lab2,
    title: "TESTING",
    description: "Comprehensive testing for food, water, soil, and shelf life solutions.",
    alt: "Scientist handling test tubes"
  },
  {
    image: lab3,
    title: "TRAINING",
    description: "Personalized sessions to build knowledge in standards, QA/QC, and audits.",
    alt: "A group of people in a training session"
  }
];

// Data for why clients should choose us
const whyChooseUsData = [
  {
    title: "INNOVATIVE SOLUTIONS",
    description: "We utilize cutting-edge technology and scientific research to provide advanced, reliable services."
  },
  {
    title: "INDUSTRY EXPERTISE",
    description: "Our team brings deep expertise across agriculture, food safety, environment, and compliance sectors."
  },
  {
    title: "CLIENT-CENTERED APPROACH",
    description: "We tailor our services to each client's specific needs, ensuring quality and satisfaction at every step."
  }
];

// A reusable Card component
const Card = ({ image, title, description, alt }) => (
  <div className="service-card">
    {image && <img src={image} alt={alt || title} />}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);


const Home = () => {
  const navigate = useNavigate();

  // --- CHATBOT SCRIPT WAS REMOVED FROM HERE ---

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <p>We are an AgriTech Startup recognized by DPIIT</p>
          <h1>Exilieen Scientific Research LLP</h1>
          <p>Advancing Science, Enhancing Life</p>
          <button className="hero-btn" onClick={() => navigate("/AboutCompany")}>
            KNOW MORE
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="services-grid">
          {whyChooseUsData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-section">
        <h2 className="section-title">Our Vision & Mission</h2>
        <div className="vision-mission-container">
          <div className="vision-box">
            <h3>Vision</h3>
            <p>To be a global leader in scientific research and analytical services, driving sustainable development and food security.</p>
          </div>
          <div className="mission-box">
            <h3>Mission</h3>
            <p>Empower industries through reliable testing, expert consulting, and continuous innovation, while upholding excellence, integrity, and environmental stewardship.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;