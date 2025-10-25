// src/components/Contact.js

import React from 'react';

const Contact = () => {
    // Note: In a real React application, you would typically use state 
    // (e.g., useState) to manage form inputs instead of relying on plain HTML form submission.
    
    return (
        <section className="form-section" id="contact">
            <div className="form-container">
                <h2 className="form-title">Contact Us</h2>
                <form action="https://formspree.io/f/xjkajwrl" method="POST">
                    <label className="form-label" htmlFor="email">Your email:</label>
                    <input className="form-input" type="email" id="email" name="email" required />
        
                    <label className="form-label" htmlFor="message">Your message:</label>
                    <textarea className="form-textarea" id="message" name="message" rows="4" required></textarea>
        
                    <button className="form-button" type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;