"use client";

import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ArrowDownRightIcon from "@/components/icons/arrow-down-right";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "@/components/icons/arrow-right";
import { AnimatedIconRef } from "@/components/icons/types";

const MailIcon = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
  </svg>
);
const MapPinIcon = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
  </svg>
);

const links = [
  {
    icon: <MailIcon />,
    title: "Email me",
    subTitle: "divya16sachan@gmail.com",
  },
  {
    icon: <MapPinIcon />,
    title: "My Location",
    subTitle: "Clement Town, Dehradun, India ahodfiahdofiah",
  },
  {
    icon: <PhoneIcon />,
    title: "Call me",
    subTitle: "+91 9876543210",
  },
];

const ContactSection = () => {
  const arrowRefs = useRef<(AnimatedIconRef | null)[]>([]);
  const arrowRightIconRef = useRef<AnimatedIconRef>(null);

  return (
    <section id="contact">
      <header className="mb-6">
        <h2 className="font-playfair mb-2 text-3xl font-semibold">
          Get in touch
        </h2>
        <div className="flex items-center gap-2 bg-green-200  dark:bg-green-950/50 rounded-lg w-max px-4 py-1">
          <div className="size-2 relative flex items-center justify-center bg-green-600 dark:bg-green-400 rounded-full">
            <span className="absolute bg-green-600 dark:bg-green-400 size-2.5 animate-ping rounded-full" />
          </div>
          <p className="text-sm font-semibold dark:text-primary text-green-800">
            Available for work
          </p>
        </div>
      </header>

      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="flex-1">
          <div className="flex-1">
            {links.map((link, index) => (
              <div
                key={index}
                onMouseEnter={() => arrowRefs.current[index]?.startAnimation()}
                onMouseLeave={() => arrowRefs.current[index]?.stopAnimation()}
                className="flex border-b w-full items-center cursor-pointer hover:bg-accent/30 transition-all"
              >
                <Badge variant="icon" className="mx-4">
                  {link.icon}
                </Badge>

                <div className="flex-1 border-l border-dashed">
                  <div className="flex w-full items-center gap-4 p-4 pr-2 text-left">
                    <div className="flex-1">
                      <h3 className="mb-1 leading-snug font-medium">
                        {link.title}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {link.subTitle}
                      </p>
                    </div>

                    <div>
                      <ArrowDownRightIcon
                        size={20}
                        ref={(el: AnimatedIconRef | null) => {
                          arrowRefs.current[index] = el;
                        }}
                        className="-rotate-90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 md:-mt-24">
          <div className="h-full flex flex-col gap-3">
            <Input type="text" className="h-12" placeholder="Name" />
            <Input type="email" className="h-12" placeholder="Email" />
            <Textarea className="flex-1 min-h-[120px]" placeholder="Message" />
            <Button
              onMouseEnter={() => arrowRightIconRef.current?.startAnimation()}
              onMouseLeave={() => arrowRightIconRef.current?.stopAnimation()}
              className="rounded-2xl h-12"
            >
              Submit
              <ArrowRightIcon ref={arrowRightIconRef} strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
