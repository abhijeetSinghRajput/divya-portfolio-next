import { HTMLAttributes } from "react";

export interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface AnimatedIconRef {
  startAnimation: () => void;
  stopAnimation: () => void;
}
