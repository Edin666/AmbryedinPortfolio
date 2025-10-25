import React, { useEffect } from 'react';
// ⚠️ IMPORTANT: Paste your entire style.css content into src/App.css
import './App.css'; 
import useLegacyAnimations from './Hooks/useLegacyAnimations';

// Component Imports
import Header from './components/Header.jsx';
import FeaturedBox from './components/FeaturedBox.jsx';
import About from './components/About.jsx';
import CurrentStatus from './components/CurrentStatus.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// ScrollReveal must be installed: npm install scrollreveal
const useScrollReveal = () => {
    useEffect(() => {
        // Only run if ScrollReveal is available globally
        if (typeof window.ScrollReveal !== 'undefined') {
            const sr = window.ScrollReveal({
                origin: 'top',
                distance: '80px',
                duration: 2000,
                reset: true
            });

            // Replicate original main.js ScrollReveal calls
            sr.reveal('.featured-text', { delay: 100 });
            sr.reveal('.featured-image', { delay: 300 });
            sr.reveal('.scroll-icon-box', { delay: 300 });
            
            // Left/Right reveals
            const srLeft = window.ScrollReveal({ origin: 'left', distance: '80px', duration: 2000, reset: true });
            srLeft.reveal('.about-info', { delay: 100 });

            const srRight = window.ScrollReveal({ origin: 'right', distance: '80px', duration: 2000, reset: true });
            srRight.reveal('.skills-box', { delay: 100, interval: 100 });
            srRight.reveal('.form-container', { delay: 100 });

            // Ensure sections also reveal when needed
            sr.reveal('.section', { interval: 200 });
        }
    }, []);
};

const App = () => {
    // Run the ScrollReveal logic once after the component mounts
    useLegacyAnimations();
    useScrollReveal();

    return (
        // The container div is the single parent element from your original HTML
        <div className="container"> 
            <Header />
            <main className="wrapper">
                <FeaturedBox />
                <About />
                <CurrentStatus />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;