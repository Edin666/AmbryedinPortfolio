// src/components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="top-footer">
                <p>Sahaya Ambry Edin</p>
            </div>

            <div className="middle-footer">
                <ul className="footer-menu">
                    <li className="footer_menu_list"><a href="#home">Home</a></li>
                    <li className="footer_menu_list"><a href="#about">About</a></li>
                    <li className="footer_menu_list"><a href="#currently">Current Status</a></li>
                    <li className="footer_menu_list"><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="social_icons">
                <a href="https://www.instagram.com/ambryedin?igsh=amRrd2k3aHY1cjAw" target="_blank" className="icon">
                    <i className="uil uil-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ambry-edin-895aaa304" target="_blank" className="icon">
                    <i className="uil uil-linkedin-alt"></i>
                </a>
                <a href="https://github.com/Edin666" target="_blank" className="icon">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <div className="bottom-footer">
                <p>Copyright 2025 &copy;
                    <a href="#home"><b>ambryedin</b></a> — All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;