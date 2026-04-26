"use client";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedIconProps, AnimatedIconRef } from "./types";

const cursorVariants = {
  initial: {},
  hover: {},
};

const lineVariants = {
  initial: { opacity: 0 },
  spread: {
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 1,
      times: [0, 0.2, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

const CursorClickIcon = forwardRef<AnimatedIconRef, AnimatedIconProps>(
  ({ className, size = 28, ...props }, ref) => {
    const clickControls = useAnimation();
    const cursorControls = useAnimation();
    const isControlledRef = useRef(false);

    useEffect(() => {
      if (!isControlledRef.current) {
        clickControls.start("spread");
      }
    }, [clickControls]);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          cursorControls.start("hover");
          clickControls.start("spread", { delay: 1.3 });
        },
        stopAnimation: () => {
          cursorControls.start("initial");
          clickControls.start("initial");
        },
      };
    });

    return (
      <div className={cn(className)} {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
            variants={cursorVariants}
            animate={cursorControls}
          />
          <motion.path
            d="M14 4.1 12 6"
            variants={lineVariants}
            animate={clickControls}
          />
          <motion.path
            d="m5.1 8-2.9-.8"
            variants={lineVariants}
            animate={clickControls}
          />
          <motion.path
            d="m6 12-1.9 2"
            variants={lineVariants}
            animate={clickControls}
          />
          <motion.path
            d="M7.2 2.2 8 5.1"
            variants={lineVariants}
            animate={clickControls}
          />
        </svg>
      </div>
    );
  }
);

CursorClickIcon.displayName = "CursorClickIcon";

export default CursorClickIcon;
export { CursorClickIcon };
