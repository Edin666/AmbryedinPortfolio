// src/hooks/useLegacyAnimations.js

import { useEffect } from 'react';
// Assuming you have installed and imported Typed.js and ScrollReveal (e.g., 'npm install typed.js scrollreveal')
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const useLegacyAnimations = () => {
    useEffect(() => {
        // --- 1. HEADER SCROLL SHADOW LOGIC ---
        // NOTE: If you are using the separate useHeaderScrollShadow hook, you can remove this block.
        const headerShadow = () => {
            const navHeader = document.getElementById("header");
            if (!navHeader) return; // Exit if the header element isn't found

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                // In React, it's better to add/remove a CSS class (like 'scrolled') instead of inline styles.
                // Assuming you have the .scrolled CSS class defined in App.css:
                navHeader.classList.add('scrolled');
            } else {
                navHeader.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', headerShadow);

        // --- 2. TYPING EFFECT ---
        // Target the element with class '.typedText' inside the FeaturedBox component
        const typedElement = document.querySelector(".typedText");
        if (typedElement) {
            var typingEffect = new Typed(".typedText", {
                strings: ["Developer", "designer"],
                loop: true,
                typeSpeed: 100,
                backSpeed: 80,
                backDelay: 2000
            });
        }
        
        // --- 3. SCROLL REVEAL ANIMATION ---
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true
        });

        // Apply animations
        sr.reveal('.featured-text-card, .featured-name, .featured-text-info, .featured-text-btn, .social_icons, .featured-image, .top-header', { interval: 100 });
        sr.reveal('.project-box', { interval: 200 });

        const srLeft = ScrollReveal({ origin: 'left', distance: '80px', duration: 2000, reset: true });
        srLeft.reveal('.about-info, .contact-info', { delay: 100 });

        const srRight = ScrollReveal({ origin: 'right', distance: '80px', duration: 2000, reset: true });
        srRight.reveal('.skills-box, .form-control', { delay: 100 });


        // --- 4. CHANGE ACTIVE LINK (Scroll Active) ---
        const sections = document.querySelectorAll('section[id]');
        const scrollActive = () => {
            const scrollY = window.scrollY;
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 70; // Offset by header height
                const sectionId = current.getAttribute('id');
                const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

                if (navLink) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLink.classList.add('active-link');
                    } else {
                        navLink.classList.remove('active-link');
                    }
                }
            });
        };
        window.addEventListener('scroll', scrollActive);


        // --- 5. CLEANUP FUNCTION ---
        return () => {
            // Remove the scroll listeners when the component unmounts
            window.removeEventListener('scroll', headerShadow);
            window.removeEventListener('scroll', scrollActive);
            
            // If using Typed.js, destroy the instance
            if (typingEffect && typeof typingEffect.destroy === 'function') {
                typingEffect.destroy();
            }
            
            // ScrollReveal doesn't usually need a manual destroy, but it's good practice.
            // ScrollReveal().destroy(); 
        };
    }, []); // Empty dependency array means this runs once on mount

    // NOTE: The backend (express) code and the form validation code MUST BE REMOVED.
};

export default useLegacyAnimations;