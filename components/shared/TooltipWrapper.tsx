import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipWrapperProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const TooltipWrapper = ({ children, content }: TooltipWrapperProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
};

export default TooltipWrapper;
