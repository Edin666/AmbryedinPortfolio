import { useEffect, useState } from "react";

const useHeaderScrollShadow = (threshold = 50) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return hasShadow;
};

export default useHeaderScrollShadow;
