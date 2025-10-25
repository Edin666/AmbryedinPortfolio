import { useEffect } from "react";
import Typed from "typed.js";

const useTypedEffect = (elementRef, strings, typeSpeed = 100, backSpeed = 80, backDelay = 1000) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const typed = new Typed(elementRef.current, {
      strings: ["Frontend Developer", "UI/UX Enthusiast"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, [elementRef, strings, typeSpeed, backSpeed, backDelay]);
};

export default useTypedEffect;
