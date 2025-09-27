import React, { useState } from "react";
import "./Contact.css";

// --- SVG Icons for the new design ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const SubjectIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required.";
      else if (!/^[A-Za-z\s]+$/.test(value)) error = "Name can only contain alphabets and spaces.";
    } else if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Please enter a valid email address.";
    } else if (name === "subject" && !value.trim()) {
      error = "Subject is required.";
    } else if (name === "message" && !value.trim()) {
      error = "Message is required.";
    }
    
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || !/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = "Please enter a valid name.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("❌ Please fix the errors before submitting.");
      return;
    }

    setStatus("Sending...");
    try {
      // --- THIS IS THE UPDATED LINE ---
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setStatus(`❌ Error: ${error.message || "Could not connect to server."}`);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
        
        <div className="contact-grid-container">
          {/* Left Column: Info & Form */}
          <div className="contact-info-form">
            <div className="contact-details">
                <h3>Contact Information</h3>
                <div className="detail-item">
                    <LocationIcon />
                    <div>
                        <strong>EXILIEEN SCIENTIFIC RESEARCH LLP</strong>
                        <p>FLNO-G-2,PLNO-10,G.NO-44, BE BAJAJ HOS GURUKRUPA AP, AURANGABAD CITY, 431001, MAHARASHTRA</p>
                    </div>
                </div>
                <div className="detail-item">
                    <PhoneIcon />
                    <p>0240-2987599</p>
                </div>
                <div className="detail-item">
                    <MailIcon />
                    <p>deepakbornare@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <h3>Send Us A Message</h3>
                <div className="input-wrapper">
                    <UserIcon />
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                {errors.name && <p className="error-message">{errors.name}</p>}

                <div className="input-wrapper">
                    <MailIcon />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>
                {errors.email && <p className="error-message">{errors.email}</p>}
                
                <div className="input-wrapper">
                    <SubjectIcon />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                </div>
                {errors.subject && <p className="error-message">{errors.subject}</p>}

                <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}

                <button type="submit">Send Message</button>
                {status && <p className="status-msg">{status}</p>}
            </form>
          </div>

          {/* Right Column: Map */}
          <div className="contact-map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7505.501431629323!2d75.31550500000002!3d19.850498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99b6a8fcc2c1%3A0x828e80fa35facf01!2sExilieen%20Scientific%20Research%20LLP!5e0!3m2!1sen!2sin!4v1757584686835!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;