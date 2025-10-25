// src/components/Contact.jsx
import React, { useState } from "react";
import useScrollReveal from "../Hooks/useScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  useScrollReveal(".form-section", {
    origin: "right",
    distance: "70px",
    duration: 1200,
    delay: 200,
    easing: "ease-out",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjkajwrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setFormData({ email: "", message: "" });
      } else {
        alert("Oops! There was an issue submitting your form.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="form-section" id="contact">
      <div className="form-container">
        <h2 className="form-title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="email">
            Your email:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label className="form-label" htmlFor="message">
            Your message:
          </label>
          <textarea
            className="form-textarea"
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="form-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
