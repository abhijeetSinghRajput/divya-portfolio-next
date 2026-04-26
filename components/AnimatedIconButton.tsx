"use client";

import { useRef, ComponentType } from "react";
import { Button } from "./ui/button";
import { AnimatedIconProps, AnimatedIconRef } from "./icons/types";
import { cn } from "@/lib/utils";

interface AnimatedIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ComponentType<AnimatedIconProps & { ref?: React.Ref<AnimatedIconRef> }>;
  tooltip?: string;
  className?: string;
}

export default function AnimatedIconButton({
  icon: Icon,
  tooltip,
  className = "",
  ...props
}: AnimatedIconButtonProps) {
  const iconRef = useRef<AnimatedIconRef>(null);

  return (
    <Button
      size="icon"
      tooltip={tooltip}
      variant={null as any}
      className={cn(
        "border-2 border-border bg-white/5 px-5 rounded-2xl h-12 w-12 transition-all",
        "hover:shadow-button hover:!bg-primary hover:!text-primary-foreground",
        className
      )}
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
      aria-label={tooltip}
      {...props}
    >
      <Icon ref={iconRef} />
    </Button>
  );
}