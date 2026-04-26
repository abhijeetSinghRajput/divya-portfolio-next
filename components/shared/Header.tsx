"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { ThemeToggleButton } from "@/components/skipperTheme";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight / 2; // 100vh
      setShowLogo(window.scrollY > trigger);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        transition-shadow duration-300
      "
    >
      <div className="mx-auto md:max-w-3xl py-2 px-4">
        <div className="relative flex justify-between items-center">
          <div className="flex items-center gap-8">
            <nav
              className={`flex gap-4 transition-all duration-500 ${showLogo ? "translate-x-14" : "translate-x-0"
                }`}
            >
              <Link
                href="#projects"
                className="hover:underline underline-offset-4  font-semibold"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="hover:underline underline-offset-4  font-semibold"
              >
                Contact
              </Link>
            </nav>

            {/* LOGO WITH SLIDE + FADE */}
            <Link
              aria-label="Home"
              href="/"
              className={`absolute left-0 transition-all duration-500 ${showLogo
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-6 pointer-events-none scale-0"
                }`}
            >
              <div className="bg-primary rounded-full size-10 overflow-hidden">
                <div className="w-full h-full object-contain p-2">
                  <LogoIcon />
                </div>
              </div>
            </Link>
          </div>

          {/* THEME TOGGLE */}
          <div className="flex items-center gap-2">
            <ThemeToggleButton blur={true} start="top-right" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
