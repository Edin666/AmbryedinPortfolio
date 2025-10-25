// src/Hooks/useTypedEffect.js (UPDATED)

import { useEffect } from 'react';
import Typed from 'typed.js'; 

// Now accepts typeSpeed and backSpeed as arguments with default values
export const useTypedEffect = (elementRef, strings, typeSpeed = 100, backSpeed = 50) => {
  useEffect(() => {
    const options = {
      strings: strings,
      loop: true,
      
      // Use the arguments passed to the hook, or the default values
      typeSpeed: typeSpeed, // <-- Uses the argument!
      backSpeed: backSpeed, // <-- Uses the argument!
      
      backDelay: 1000,
      startDelay: 500,  
      showCursor: true, 

      preStringTyped: (arrayPos, self) => {},
    };

    const typed = new Typed(elementRef.current, options);

    return () => {
      typed.destroy();
    };
    // Include all props in dependency array to ensure Typed is updated when they change
  }, [elementRef, strings, typeSpeed, backSpeed]); 
};