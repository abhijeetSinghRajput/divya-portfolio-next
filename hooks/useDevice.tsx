import { useEffect, useState } from "react";

export function useDevice() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  const checkScreen = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 640); // sm
    setIsTab(width <= 768);    // md
  };

  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return { isMobile, isTab };
}
