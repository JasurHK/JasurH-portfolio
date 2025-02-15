import React, { useState } from "react";
import "../styles/Contact.css"; // Import the CSS file
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await emailjs.send(
        "jasur_ix",
        "template_s9dtrg2",
        formData,
        "QlEMJGyFUp1tGI5cD"
      );
      alert("Message sent to your email!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h2>
            Let's <span className="highlight">talk</span>
          </h2>
          <p>
            I'm available for new projects. Send me a message about anything you
            need!
          </p>

          <div className="contact-details">
            <p>📧 jasurhakimov007@gmail.com</p>
            <p>📞 +48 884 739 922</p>
            <p>📍 Warsaw, Poland</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h2>Get in touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            />
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
