import React from "react";
import "./AnalyticalServices.css";

// Image imports
import img2 from "../assets/AnalyticalService/2.png";
import img3 from "../assets/AnalyticalService/3.png";
import img4 from "../assets/AnalyticalService/4.png";
import img5 from "../assets/AnalyticalService/5.png";
import img6 from "../assets/AnalyticalService/6.png";
import img7 from "../assets/AnalyticalService/7.png";
import img8 from "../assets/AnalyticalService/8.png";

const data = [
  {
    title: "Analytical Services Business",
    text: "A comprehensive plan to establish a leader in mandatory and regulatory analytical services across multiple industries. We'll ensure efficiency, affordability, and innovation in compliance testing.",
    image: null, // No image for the intro section
  },
  {
    title: "Business Planning & Registration",
    image: img2,
    items: [
      { subtitle: "Define Business Objectives", text: "Set value proposition and target industries: food, agriculture, fertilizers, environment, energy." },
      { subtitle: "Register Company", text: "Establish as LLP or Private Limited under Startup India and MSME schemes." },
      { subtitle: "Obtain Licenses", text: "Secure FSSAI, NABL accreditation, CPCB, MoEFCC, ISO 17025 compliance." },
    ]
  },
  {
    title: "Laboratory Partnerships",
    image: img3,
    items: [
      { subtitle: "Identify Labs", text: "Collaborate with NABL-accredited and regulatory-approved laboratories across India." },
      { subtitle: "Negotiate Agreements", text: "Ensure priority processing, quality compliance, and cost efficiency." },
      { subtitle: "Establish Network", text: "Create sample collection and logistics network for smooth operations." },
    ]
  },
  {
    title: "Digital Infrastructure & Technology",
    image: img4,
    features: [
      { icon: "🌐", subtitle: "Web Platform", text: "Develop for online booking, sample tracking, and digital report access." },
      { icon: "🤖", subtitle: "AI Integration", text: "Implement AI-based analytics for faster, precise testing results." },
      { icon: "📶", subtitle: "IoT Solutions", text: "Enable smart sample testing for remote quality assessments." },
    ]
  },
  {
    title: "Regulatory Compliance & Service Portfolio",
    image: img5,
    items: [
      { subtitle: "Compliance", text: "Adhere to national and international standards (FSSAI, BIS, FDA, WHO). Establish legal team for client guidance." },
      { subtitle: "Services", text: "Offer food safety, soil analysis, environmental assessment, water quality, and pharmaceutical compliance testing." },
    ]
  },
  {
    title: "Market Research & Partnerships",
    image: img6,
    items: [
      { subtitle: "Conduct Research", text: "Identify target industries and customer pain points." },
      { subtitle: "Form Alliances", text: "Partner with agriculture, food processing, and environmental agencies." },
      { subtitle: "Logistics Partnership", text: "Collaborate for seamless sample transportation." },
    ]
  },
  {
    title: "Marketing & Team Development",
    image: img7,
    items: [
      { subtitle: "Marketing Campaign", text: "Launch targeted digital marketing, SEO, and industry conference presence." },
      { subtitle: "Client Engagement", text: "Develop corporate strategy through outreach, partnerships, and referrals." },
      { subtitle: "Expert Recruitment", text: "Hire specialists in chemistry, microbiology, compliance, AI/ML, and customer service." },
    ]
  },
  {
    title: "Pilot Testing & Future Expansion",
    image: img8,
    items: [
      { subtitle: "Pilot Project", text: "Run initial tests in selected regions with partner laboratories." },
      { subtitle: "Quality Assurance", text: "Conduct validation tests and gather client feedback." },
      { subtitle: "Expansion", text: "Upgrade to international compliance and explore funding opportunities." },
    ]
  },
];

const AnalyticalServices = () => {
  return (
    <div className="analytical-wrapper">
      {data.map((section, index) => {
        // Determine the class for alternating layout
        const sectionClass = section.image 
          ? `section layout-${index % 2 === 0 ? 'image-left' : 'text-left'}` 
          : 'section section-intro';

        return (
          <div key={section.title} className={sectionClass}>
            
            {/* Text Content */}
            <div className="section-text">
              <h2>{section.title}</h2>
              {section.text && <p className="section-description">{section.text}</p>}
              
              {section.items && (
                <ul className="custom-list">
                  {section.items.map((item) => (
                    <li key={item.subtitle}>
                      <strong>{item.subtitle}:</strong> {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.features && (
                <div className="features-grid">
                  {section.features.map((feat) => (
                    <div key={feat.subtitle} className="feature-card">
                      <h4>{feat.icon} {feat.subtitle}</h4>
                      <p>{feat.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Image */}
            {section.image && (
              <div className="section-img-container">
                <img src={section.image} alt={`${section.title}`} className="section-img" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticalServices;