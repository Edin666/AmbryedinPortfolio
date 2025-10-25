import React from 'react';
import useHeaderScrollShadow from '../Hooks/useHeaderScrollShadow'; // Import the new hook

// Function to handle smooth scrolling (from step 1)
const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); 
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 70, 
            behavior: 'smooth'
        });
    }
};

const Header = () => {
  useHeaderScrollShadow('header', 50);
    return (
        <nav id="header">
            <div className="nav-logo">
                <p className="nav-name">Sahaya Ambry Edin</p>
            </div>
            <div className="nav-menu" id="myNavMenu">
                <ul className="nav_menu_list">
                    <li className="nav_list">
                        {/* Use onClick handler on links */}
                        <a href="#home" className="nav-link active-link" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#currently" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#currently')}>Current Status</a>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <a href="#contact" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
                        <div className="circle"></div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;