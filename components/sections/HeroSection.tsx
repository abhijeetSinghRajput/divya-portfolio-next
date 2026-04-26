"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/icons/layout-text-flip";
import { GithubIcon } from "@/components/icons/github";
import AnimatedIconButton from "@/components/AnimatedIconButton";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { XIcon } from "@/components/icons/x";
import ProfileDialog from "@/components/ProfileCard";

const HeroSection = () => {
  return (
    <section id="home" className="mt-16">
      <div className="flex gap-4 flex-col items-center text-center">
        {/* ====== AVATAR  ======*/}
        <ProfileDialog/>
        {/* ====== HEADING [NAME + TITLE] ======*/}
        <div className="gap-2 grid mt-4">
          <div className="flex items-center gap-2 mb-2">
            <h1
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">Divya Sachan</h1>
          </div>
          <LayoutTextFlip className={"text-muted-foreground"} />
        </div>

        {/* ====== BUTTON GROUP  ======*/}
        <div className="flex gap-2 mt-8">
          <Button className="px-5 rounded-2xl h-12">Get In touch</Button>
          <AnimatedIconButton
            onClick={() =>
              window.open("https://github.com/divya16sachan", "_blank")
            }
            icon={GithubIcon}
            tooltip="Github"
          />

          <AnimatedIconButton
            onClick={() => window.open("https://www.linkedin.com/in/divyasachan", "_blank")}
            icon={LinkedinIcon}
            tooltip="Linkedin"
          />

          <AnimatedIconButton
            onClick={() => window.open("https://x.com/IamDivyaSachan", "_blank")}
            icon={XIcon}
            tooltip="X / Twitter"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
