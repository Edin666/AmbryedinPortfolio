import React, { useState, useEffect } from "react";
import useHeaderScrollShadow from "../Hooks/useHeaderScrollShadow";

const handleSmoothScroll = (e, targetId, setActiveLink) => {
  e.preventDefault();
  const target = document.querySelector(targetId);
  if (target) {
    window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    setActiveLink(targetId); // Update active link
  }
};

const Header = () => {
  const hasShadow = useHeaderScrollShadow(50);
  const [activeLink, setActiveLink] = useState("#home");

  // Highlight section in navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "#home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${hasShadow ? "shadow" : ""}`} id="header">
      <nav className="nav-container">
        <div className="nav-logo">
          <p className="nav-name">Sahaya Ambry Edin</p>
        </div>

        <div className="nav-menu" id="myNavMenu">
          <ul className="nav_menu_list">
            {[
              { id: "#home", label: "Home" },
              { id: "#about", label: "About" },
              { id: "#currently", label: "Current Status" },
              { id: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.id} className="nav_list">
                <a
                  href={link.id}
                  className={`nav-link ${activeLink === link.id ? "active-link" : ""}`}
                  onClick={(e) => handleSmoothScroll(e, link.id, setActiveLink)}
                >
                  {link.label}
                </a>
                <div className="circle"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;