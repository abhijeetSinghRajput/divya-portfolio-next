import React, { useRef, useMemo } from "react";
import { X } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from "@/components/ui/morphing-dialog";
import MailIcon from "@/components/icons/mail";
import { useGithubStore } from "@/stores/useGithubStore";
import DownloadIcon from "@/components/icons/download";
import AnimatedIconButton from "./AnimatedIconButton";
import LogoIcon from "./shared/LogoIcon";
import { Button } from "./ui/button";
import CursorClickIcon from "@/components/icons/cursor-click";
import ProgressiveBlur from "./ui/progressive-blur";
import { AnimatedIconRef } from "./icons/types";
import Image from "next/image";

interface BadgeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const Badge = React.forwardRef<SVGSVGElement, BadgeProps>(
  (
    { size = 24, color = "currentColor", className = "", style, ...props },
    ref
  ) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={style}
      aria-label="Verified"
      className={className}
      {...props}
    >
      <path d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z" />
    </svg>
  )
);

Badge.displayName = "Badge";

const ProfileCard = () => {
  const { totalContributions } = useGithubStore();
  const mailIconRef = useRef<AnimatedIconRef>(null);

  // Memoize stats to prevent recalculation
  const stats = useMemo(
    () => [
      { label: "Projects", value: "10+" },
      { label: "Commits", value: totalContributions },
      { label: "Poems", value: "20+" },
    ],
    [totalContributions]
  );

  const handleMailHover = () => {
    mailIconRef.current?.startAnimation();
  };

  const handleMailLeave = () => {
    mailIconRef.current?.stopAnimation();
  };

  /*
  const handleGithubClick = () => {
    window.open("https://github.com/divya16sachan", "_blank");
  };
  */
  
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update with your actual resume path
    link.download = "Divya_Sachan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="relative w-[90vw] max-w-sm aspect-[0.65/1] rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 will-change-transform">
        {/* Image - Optimized with GPU acceleration */}
        <div className="absolute inset-0 transform-gpu">
          <Image
            src="/avatar3.png"
            alt="divya"
            className="w-full h-full scale-125 object-contain"
            width={400}
            height={600}
            priority
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 text-zinc-50 space-y-4 sm:space-y-6 z-[999]">
          {/* Name and Role */}
          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-playfair leading-6">
                Divya Sachan
              </h2>
              <Badge size={22} className="text-blue-500 flex-shrink-0 mt-1.5" />
            </div>
            <p className="text-zinc-400">Figma Designer & React Developer</p>
          </div>

          {/* Stats - Optimized with map */}
          <div className="flex justify-around items-center pb-4">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                {index > 0 && <div className="w-px h-8 bg-zinc-700" />}
                <div className="text-center">
                  <div className="text-lg font-bold text-zinc-50">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onMouseEnter={handleMailHover}
              onMouseLeave={handleMailLeave}
              className="flex-1 bg-zinc-50 hover:bg-zinc-200 text-zinc-900 rounded-full h-12 font-medium shadow-lg transition-colors duration-150"
            >
              <MailIcon ref={mailIconRef} className="mr-2" size={16} />
              Get In Touch
            </Button>
            <AnimatedIconButton
              onClick={handleDownload}
              icon={DownloadIcon}
              tooltip="Download Resume"
              className="border-zinc-700 bg-zinc-600/30 hover:bg-zinc-50 hover:text-zinc-950 transition-colors duration-150"
            />
          </div>
        </div>

        {/* Progressive Blur Overlay - Kept as requested */}
        <ProgressiveBlur
          position="bottom"
          backgroundColor="rgba(0, 0, 0, 0.9)"
          height="350px"
        />
      </div>
    </div>
  );
};

const ProfileDialog = () => {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      <MorphingDialogTrigger className="relative rounded-full will-change-transform transform-gpu">
        <div className="relative rounded-full border hover:opacity-80 hover:scale-95 transition-all">
          <div className="bg-primary rounded-full size-40 overflow-hidden transform-gpu">
            <div className="w-full h-full object-contain p-8">
              <LogoIcon />
            </div>
          </div>
        </div>
        <CursorClickIcon className="absolute bottom-0 right-0" />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative rounded-none transform-gpu">
          <ProfileCard />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1 transform-gpu"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.15,
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1],
              },
            },
            exit: {
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.1 },
            },
          }}
        >
          <X className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
};

export default ProfileDialog;
