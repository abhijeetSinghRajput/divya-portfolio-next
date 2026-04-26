"use client";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedIconProps, AnimatedIconRef } from "./types";

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: "linear",
      opacity: { duration: 0.1 },
    },
  },
};

const MailIcon = forwardRef<AnimatedIconRef, AnimatedIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const pathControls = useAnimation();
    const rectControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => {
          pathControls.start("animate");
          rectControls.start("animate");
        },
        stopAnimation: () => {
          pathControls.start("normal");
          rectControls.start("normal");
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          pathControls.start("animate");
          rectControls.start("animate");
        } else {
          onMouseEnter?.(e);
        }
      },
      [onMouseEnter, pathControls, rectControls]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          pathControls.start("normal");
          rectControls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [pathControls, rectControls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <motion.rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            variants={pathVariants}
            initial="normal"
            animate={rectControls}
          />
          <motion.path
            d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
            variants={pathVariants}
            initial="normal"
            animate={pathControls}
          />
        </svg>
      </div>
    );
  }
);

MailIcon.displayName = "MailIcon";

export default MailIcon;
export { MailIcon };
