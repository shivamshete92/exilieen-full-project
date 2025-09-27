import React from "react";
import "./AboutCompany.css";

import lab1 from "../assets/about-company/lab1.jpg";
import lab2 from "../assets/about-company/lab2.webp";
import lab3 from "../assets/about-company/lab3.jpg";

const AboutCompany = () => {
  return (
    <div className="about-company">
      <div className="banner">
        <h1>ABOUT COMPANY</h1>
      </div>
<br /><br />
      {/* <div className="breadcrumb">
        <a href="/">Home</a> &gt; About &gt; About Company
      </div> */}

      <div className="content-container">
        <div className="main-content">
          <p>
            <strong> Deliver High-Quality Testing Services</strong> <br /> To
            provide accurate, reliable, and timely analytical testing services
            across food, environmental, agricultural, coal, chemical,
            biological, and pharmaceutical sectors, ensuring compliance with
            industry standards and regulations.
          </p>
          <p>
           <strong>Promote Women Empowerment</strong>  <br /> To create a supportive and inclusive
            workplace that fosters the professional growth and leadership of
            women in science and technology, contributing to gender equality in
            the field.
          </p>
          <p>
           
            <strong>Advance Sustainable Practices</strong> <br /> To actively engage in research and
            testing that supports sustainable practices and solutions, aligning
            our operations with the United Nations Sustainable Development Goals
            (SDGs).
          </p>
          <p>
          <strong>Enhance Community Health and Safety</strong>  <br /> To contribute to public health
            and environmental safety by providing critical data and insights
            that inform policy and practice in various industries.
          </p>
          <p>
          <strong>Foster Innovation and Collaboration </strong> <br /> To encourage continuous
            improvement and innovation in analytical testing methodologies,
            collaborating with academic institutions, industry leaders, and
            community organizations to enhance scientific research
            and application.
          </p>
          <br />
          {/* <h3>TEAM</h3>
          <ul>
            <li>Mr. Tejas Mahakal - Founder</li>
            <li>Mr. Tejas Mahakal - CFO</li>
            <li>Mr. Tejas Mahakal - Quality Manager</li>
            <li>Mr. Tejas Mahakal - Technical Incharge of Microbiology</li>
            <li>Mr. Tejas Mahakal - Head of Water department</li>
            <li>Mr. Tejas Mahakal - Sr Microbiologist</li>
            <li>Mr. Tejas Mahakal - Senior Water department</li>
            <li>Mr. Tejas Mahakal - Accountant</li>
            <li>Mr. Tejas Mahakal - Head - Sample collection</li>
            <li>Mr. Tejas Mahakal - Chemist</li>
            <li>Mr. Tejas Mahakal - Chemist</li>
            <li>Mr. Tejas Mahakal - Chemist</li>
            <li>Mr. Tejas Mahakal - Microbiologist</li>
            <li>Mr. Tejas Mahakal - Microbiologist</li>
            <li>Mr. Tejas Mahakal - Lab Assistant</li>
          </ul> */}
        </div>

        <div className="sidebar">
          <img src={lab1} alt="Lab 1" />
          <img src={lab2} alt="Lab 2" />
          <img src={lab3} alt="Lab 3" />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
