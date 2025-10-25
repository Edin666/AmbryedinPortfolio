// src/components/About.js
import React from "react";
import useScrollReveal from "../Hooks/useScrollReveal";

const About = () => {
  useScrollReveal(".about-section", { origin: "bottom" });

  
    return (
        <section className="section" id="about">
            <div className="top-header">
                <h1>About Me</h1>
            </div>
            <div className="row">
                <div className="col">
                    <div className="about-info">
                        <h3>My introduction</h3>
                        <p>
                            Creative and fast-learning Frontend Developer passionate about crafting intuitive, responsive, and user-centric web applications. Proficient in modern technologies like React.js and JavaScript. Driven by a strong eye for UI/UX design and a commitment to writing maintainable code, I aim to contribute to dynamic, agile teams while continuously growing and innovating in the world of web development
                        </p>
                        <div className="about-btn">
                            {/* Updated path to correctly reference the file in your public/assets/images folder */}
                            <a href="/assets/images/ambryedinorginals.pdf" className="btn" download>
                                DOWNLOAD MY RESUME <i className="uil uil-import"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="skills-box">
                        <div className="skills-header">
                            <h2>Frontend</h2>
                        </div>
                        <div className="skills-list">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            <span>Tailwind CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                        </div>
                    </div>
                    <div className="skills-box">
                        <div className="skills-header">
                            <h2>Backend</h2>
                        </div>
                        <div className="skills-list">
                            <span>PHP</span>
                            <span>Python</span>
                            <span>Spring Boot</span>
                            <span>Dart</span>
                        </div>
                    </div>
                    <div className="skills-box">
                        <div className="skills-header">
                            <h2>Database</h2>
                        </div>
                        <div className="skills-list">
                            <span>MySQL</span>
                            <span>MongoDB</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;