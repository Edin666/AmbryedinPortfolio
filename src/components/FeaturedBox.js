import React, { useRef } from 'react';
import { useTypedEffect } from '../Hooks/useTypedEffect'; 

const FeaturedBox = () => {
  const typedTextRef = useRef(null);

  
  useTypedEffect(typedTextRef, ["Frontend Developer", "UI/UX Enthusiast"], 30, 20);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Glad you're here!</span>
        </div>
        <div className="featured-name">
          {/* Add the ref to the element */}
          <p>I'm <span className="typedText" ref={typedTextRef}></span></p>
        </div>
        <div className="featured-text-info">
          <p>
            Creative frontend developer with a passion for building intuitive, responsive, and user-focused web applications.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href="#contact">
            <button className="btn blue-btn">Hire Me</button>
          </a>
        </div>
        <div className="social_icons">
          <a href="https://www.instagram.com/ambryedin?igsh=amRrd2k3aHY1cjAw" target="_blank" className="icon" rel="noopener noreferrer">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ambry-edin-895aaa304" target="_blank" className="icon" rel="noopener noreferrer">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/Edin666" target="_blank" className="icon" rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src="/assets/images/hero.jpg" alt="avatar" />
        </div>
      </div>
      {/*<div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>?*/}
    </section>
  );
};

export default FeaturedBox;