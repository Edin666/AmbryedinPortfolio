import { useEffect } from 'react';
import Typed from 'typed.js'; 

/**
 * Custom hook to initialize the Typed.js effect on a specific element.
 * @param {React} elementRef - Ref object pointing to the element (e.g., <span ref={ref} />).
 * @param {string[]} strings - Array of strings to cycle through.
 */
export const useTypedEffect = (elementRef, strings) => {
  useEffect(() => {
    const options = {
      strings: strings,
      loop: true,
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 300,
    };

    const typed = new Typed(elementRef.current, options);

    // Cleanup: Destroy Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, [elementRef, strings]);
};