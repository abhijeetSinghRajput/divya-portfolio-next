"use client";

import React from "react";
import LogoIcon from "./LogoIcon";
import GithubIcon from "@/components/icons/github";
import XIcon from "@/components/icons/x";
import InstagramIcon from "@/components/icons/instagram";
import LinkedinIcon from "@/components/icons/linkedin";
import MailIcon from "@/components/icons/mail";
import { Separator } from "@/components/ui/separator";
import { AnimatedIconRef } from "@/components/icons/types";

interface LinkItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ ref?: React.Ref<AnimatedIconRef>; size?: number }>;
}

interface LinksData {
  socialLinks: LinkItem[];
  navigation: LinkItem[];
}

const links: LinksData = {
  socialLinks: [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/divya16sachan" },
    { icon: XIcon, label: "X/Twitter", href: "https://x.com/IamDivyaSachan" },
    { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/divya16sachan" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/divyasachan" },
    { icon: MailIcon, label: "Email", href: "mailto:divya16sachan@gmail.com" },
  ],

  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "My Poetry", href: "#poetry" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ],
};

const Footer = () => {
  const iconRefs = React.useRef<Record<string, AnimatedIconRef | null>>({});

  const handleMouseEnter = (linkType: string, index: number) => {
    const key = `${linkType}-${index}`;
    const iconElement = iconRefs.current[key];
    if (iconElement?.startAnimation) {
      iconElement.startAnimation();
    }
  };

  const handleMouseLeave = (linkType: string, index: number) => {
    const key = `${linkType}-${index}`;
    const iconElement = iconRefs.current[key];
    if (iconElement?.stopAnimation) {
      iconElement.stopAnimation();
    }
  };
  return (
    <footer className="relative border-t py-8 px-4 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          <div className="md:max-w-md">
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 p-2 bg-primary rounded-lg overflow-hidden flex items-center justify-center">
                  <LogoIcon />
                </div>
                <h3 className="text-base font-semibold">Divya Sachan</h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Creative developer and poet crafting digital experiences that
                inspire and connect. Passionate about blending technology with
                artistic expression.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {(Object.keys(links) as Array<keyof LinksData>).map((linkType) => (
              <div key={linkType}>
                <h3 className="capitalize font-semibold mb-4 text-sm">
                  {linkType === "socialLinks" ? "Social Links" : linkType}
                </h3>
                <ul className="space-y-2.5">
                  {links[linkType].map((item, index) => (
                    <li
                      key={item.label}
                      onMouseEnter={() => handleMouseEnter(linkType, index)}
                      onMouseLeave={() => handleMouseLeave(linkType, index)}
                      className="w-max"
                    >
                      <a
                        href={item.href}
                        className="hover:underline underline-offset-4 text-muted-foreground flex items-center gap-2 transition-colors text-sm"
                      >
                        {item.icon && (
                          <item.icon
                            ref={(el: AnimatedIconRef | null) => {
                              iconRefs.current[`${linkType}-${index}`] = el;
                            }}
                            size={20}
                          />
                        )}
                        <span className="leading-5">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Divya Sachan. All rights reserved.</p>
          <p className="text-xs">Designed with passion & purpose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
