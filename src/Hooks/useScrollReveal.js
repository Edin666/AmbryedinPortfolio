import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = () => {
  useEffect(() => {
    // Initialize ScrollReveal safely
    const sr = ScrollReveal({
     origin: "top",
      distance: "60px",
      duration: 1200,
      delay: 200,
      reset: true,
    });

    // === Featured Section ===
    sr.reveal(".featured-text", { delay: 100 });
    sr.reveal(".featured-image", { delay: 300 });
    sr.reveal(".scroll-icon-box", { delay: 300 });

    // === About Section ===
    sr.reveal(".about-info", { origin: "left", delay: 100 });
    sr.reveal(".skills-box", { origin: "right", delay: 200, interval: 100 });

    // === Contact Form Section ===
    sr.reveal(".form-container", { origin: "right", delay: 200 });

    // === General Section Animation ===
    sr.reveal(".section", { interval: 200 });

    // Cleanup when component unmounts
    return () => sr.destroy();
  }, []);
};

export default useScrollReveal;
