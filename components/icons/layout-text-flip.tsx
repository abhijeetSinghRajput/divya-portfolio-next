"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface LayoutTextFlipProps {
  duration?: number;
  className?: string;
}

export const LayoutTextFlip = ({
  duration = 3000,
  className,
}: LayoutTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stacks = [
    { img: "/figma.svg", text: "Figma Designer" },
    { img: "/react.svg", text: "React Developer" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stacks.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, duration, stacks.length]);

  return (
    <motion.span layout>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: -20, filter: "blur(10px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          exit={{ y: 20, filter: "blur(10px)", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={cn("flex items-center gap-2 justify-center whitespace-nowrap", className)}
        >
          <div className="size-5">
            <Image
              className="w-full h-full object-contain"
              src={stacks[currentIndex].img}
              alt=""
              width={20}
              height={20}
            />
          </div>
          {stacks[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};
