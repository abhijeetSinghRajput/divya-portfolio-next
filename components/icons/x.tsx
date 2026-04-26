"use client";
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
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
      ease: 'linear',
      opacity: { duration: 0.1 },
    },
  },
};

const XIcon = forwardRef<AnimatedIconRef, AnimatedIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const pathControls = useAnimation();

    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          pathControls.start('animate');
        },
        stopAnimation: () => {
          pathControls.start('normal');
        },
      };
    });

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) {
        pathControls.start('animate');
      } else {
        onMouseEnter?.(e);
      }
    }, [onMouseEnter, pathControls]);

    const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) {
        pathControls.start('normal');
      } else {
        onMouseLeave?.(e);
      }
    }, [pathControls, onMouseLeave]);

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24">
          <motion.path
            variants={pathVariants}
            initial="normal"
            animate={pathControls}
            d="M8.28223 2.75L12.6738 9.24414L13.043 9.79004L13.4697 9.28711L19.0107 2.75H20.1553L13.7979 10.248L13.5527 10.5371L13.7646 10.8516L20.7998 21.25H15.8242L11.1553 14.3516L10.7861 13.8057L10.3594 14.3086L4.47363 21.25H3.3291L10.0303 13.3496L10.2754 13.0605L10.0635 12.7461L3.30176 2.75H8.28223ZM4.87598 4.09863L15.9492 20.4619L16.0977 20.6816H19.752L19.2246 19.9014L8.15332 3.53809L8.00488 3.31836H4.34766L4.87598 4.09863Z" />
        </svg>
      </div>
    );
  }
);

XIcon.displayName = 'XIcon';

export default XIcon;
export { XIcon };
