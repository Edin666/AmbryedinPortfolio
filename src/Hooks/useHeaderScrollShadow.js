// src/hooks/useHeaderScrollShadow.js

import { useEffect } from 'react';

const useHeaderScrollShadow = (headerId = 'header', scrollThreshold = 50) => {
    useEffect(() => {
        const handleScroll = () => {
            const navHeader = document.getElementById(headerId);
            if (!navHeader) return;

            // Check if the scroll position exceeds the threshold (50px)
            const isScrolled = document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold;

            // Add or remove the 'scrolled' CSS class
            if (isScrolled) {
                // The styles for 'nav.scrolled' are defined in App.css
                navHeader.classList.add('scrolled');
            } else {
                navHeader.classList.remove('scrolled');
            }
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerId, scrollThreshold]);
};

export default useHeaderScrollShadow;