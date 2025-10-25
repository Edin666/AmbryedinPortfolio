import React from "react";
import useHeaderScrollShadow from "../Hooks/useHeaderScrollShadow";

const handleSmoothScroll = (e, targetId) => {
  e.preventDefault();
  const target = document.querySelector(targetId);
  if (target) {
    window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
  }
};

const Header = () => {
  const hasShadow = useHeaderScrollShadow(50);
  return (
    <header className={`header ${hasShadow ? "shadow" : ""}`} id="header">
      <nav className="nav-container">
        <div className="nav-logo">
          <p className="nav-name">Sahaya Ambry Edin</p>
        </div>

        <div className="nav-menu" id="myNavMenu">
          <ul className="nav_menu_list">
            <li className="nav_list">
              <a
                href="#home"
                className="nav-link active-link"
                onClick={(e) => handleSmoothScroll(e, "#home")}
              >
                Home
              </a>
              <div className="circle"></div>
            </li>

            <li className="nav_list">
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                About
              </a>
              <div className="circle"></div>
            </li>

            <li className="nav_list">
              <a
                href="#currently"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, "#currently")}
              >
                Current Status
              </a>
              <div className="circle"></div>
            </li>

            <li className="nav_list">
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Contact
              </a>
              <div className="circle"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
