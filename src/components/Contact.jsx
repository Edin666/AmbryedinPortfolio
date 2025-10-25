// src/components/Contact.jsx (Updated with React State)

import React, { useState } from 'react';

const Contact = () => {
    // 🛑 1. Define State for Form Data
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    // 🛑 2. Handle input changes and update state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 🛑 3. Handle Form Submission (Using the action from your HTML)
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default browser form submission

        try {
            // Standard fetch call to Formspree endpoint
            const response = await fetch("https://formspree.io/f/xjkajwrl", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! Your message has been sent successfully.');
                // Clear the form after success
                setFormData({ email: '', message: '' }); 
            } else {
                alert('Oops! There was an issue submitting your form.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <section className="form-section" id="contact">
            <div className="form-container">
                <h2 className="form-title">Contact Us</h2>
                {/* 🛑 Use onSubmit handler and remove the action/method attributes */}
                <form onSubmit={handleSubmit}> 
                    <label className="form-label" htmlFor="email">Your email:</label>
                    <input 
                        className="form-input" 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email} // 🛑 Controlled input value
                        onChange={handleChange} // 🛑 Controlled input handler
                    />
        
                    <label className="form-label" htmlFor="message">Your message:</label>
                    <textarea 
                        className="form-textarea" 
                        id="message" 
                        name="message" 
                        rows="4" 
                        required
                        value={formData.message} // 🛑 Controlled input value
                        onChange={handleChange} // 🛑 Controlled input handler
                    ></textarea>
        
                    <button className="form-button" type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;