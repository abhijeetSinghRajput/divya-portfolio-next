"use client";

import React, { useRef, useState } from "react";
import TooltipWrapper from "@/components/shared/TooltipWrapper";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import projects from "@/constants/projects";

const GithubIcon = ({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  interface Skill {
    label: string;
    img: string;
    className?: string;
  }

  const skills: Skill[] = [
    { label: "C++",          img: "/language/cpp.svg" },
    { label: "CSS",          img: "/language/css.svg" },
    { label: "Express.js",   img: "/language/express.svg" },
    { label: "Figma",        img: "/language/figma.svg" },
    { label: "Firebase",     img: "/language/firebase.svg" },
    { label: "Git",          img: "/language/git.svg" },
    { label: "HTML",         img: "/language/html.svg" },
    { label: "Javascript",   img: "/language/javascript.svg" },
    { label: "Mongo DB",     img: "/language/mongo-db.svg" },
    { label: "Next.js",      img: "/language/next-js.svg" },
    { label: "Node.js",      img: "/language/node-js.svg" },
    { label: "Postman",      img: "/language/postman.svg" },
    { label: "Python",       img: "/language/python.svg" },
    { label: "React.js",     img: "/language/react.svg" },
    { label: "Shadcn",       img: "/language/shadcn.svg" },
    { label: "Socket.io",    img: "/language/socket-io.svg" },
    { label: "Tailwind CSS", img: "/language/tailwind.svg" },
    { label: "Typescript",   img: "/language/typescript.svg" },
  ];

  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    if (!toggleBtnRef.current) return;
    const btnTop = toggleBtnRef.current.getBoundingClientRect().top;
    if (showAll) {
      setShowAll(false);
      requestAnimationFrame(() => {
        if (!toggleBtnRef.current) return;
        const newBtnTop = toggleBtnRef.current.getBoundingClientRect().top;
        const diff = newBtnTop - btnTop;

        window.scrollBy({
          top: diff,
        });
      });
    } else {
      setShowAll(true);
    }
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const getSkillsByNames = (techNames: string[]): Skill[] => {
    return techNames
      .map((techName) => skills.find((skill) => skill.label === techName))
      .filter((skill): skill is Skill => !!skill);
  };

  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <div>
        <header className="mb-6">
          <h2 className="text-3xl font-playfair font-semibold">
            Projects
            <sup className="ml-1 text-sm font-medium text-muted-foreground">
              ({projects.length})
            </sup>
          </h2>
        </header>
        <div className="grid md:grid-cols-2 gap-4">
          {displayedProjects.map((project, index) => {
            const projectSkills = getSkillsByNames(project.technologies);

            return (
              <MorphingDialog
                key={index}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              >
                <MorphingDialogTrigger className="rounded-[22px] overflow-hidden will-change-transform transform-gpu">
                  <div className="relative rounded-[22px] border flex items-start overflow-hidden bg-accent/50 aspect-[1/.8] md:aspect-[.9/1] w-full h-full object-contain">
                    <img
                      src={project.img}
                      alt={project.label}
                      className="w-full object-contain"
                    />

                    <div className="absolute bottom-0 left-0 z-20 p-4 w-full">
                      <div className="mb-4">
                        <h3 className="font-playfair text-left text-xl font-semibold capitalize text-foreground">
                          {project.label}
                        </h3>
                        <div className="text-left text-muted-foreground line-clamp-2 text-sm">
                          {project.shortDescription}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {projectSkills
                          .slice(0, 4)
                          .map(({ img, label, className }, i) => (
                            <TooltipWrapper key={i} content={label}>
                              <span className={cn("size-6", className)}>
                                <img src={img} alt={label} />
                              </span>
                            </TooltipWrapper>
                          ))}
                      </div>
                    </div>

                    {/* Gradient overlay */}
                    <div
                      className="absolute bottom-0 left-0 z-10 w-full h-48 pointer-events-none
    bg-gradient-to-t from-background via-background/70 to-transparent"
                    />
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent className="relative border rounded-[22px] transform-gpu m-2 h-full max-h-[90vh]">
                    <div className="pointer-events-auto relative flex h-full flex-col bg-background sm:w-[600px]">
                      <ScrollArea className="flex-grow">
                        <img
                          src={project.img}
                          alt={project.label}
                          className="h-[300px] w-full object-contain bg-muted/30"
                        />

                        <div className="p-6 pb-0">
                          <h3 className="text-3xl font-semibold font-playfair capitalize">
                            {project.label}
                          </h3>
                          <div className="font-semibold text-muted-foreground mt-1">
                            {project.shortDescription}
                          </div>
                          <div>
                            <p className="mt-4 text-muted-foreground">
                              {project.fullDescription}
                            </p>

                            <div className="mt-4">
                              <h3 className="text-sm font-medium mb-2">
                                Technologies Used
                              </h3>
                              <div className="flex gap-2 flex-wrap">
                                {projectSkills.map(
                                  ({ img, label, className }, i) => (
                                    <TooltipWrapper key={i} content={label}>
                                      <div
                                        className={
                                          "border flex items-center text-sm rounded-lg px-2 py-1 gap-2 bg-muted/50"
                                        }
                                      >
                                        <span
                                          className={cn("size-5", className)}
                                        >
                                          <img src={img} alt={label} />
                                        </span>
                                        <span>{label}</span>
                                      </div>
                                    </TooltipWrapper>
                                  ),
                                )}
                              </div>
                            </div>
                            <Separator className="my-10" />
                            <div>
                              <h3 className="font-playfair text-xl font-semibold mb-4">
                                Why I Built This ?
                              </h3>
                              <ul className="space-y-3 text-muted-foreground">
                                {project.whyIBuiltThis.map((item, index) => (
                                  <li key={index} className="list-disc ml-4">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* 5. ADD: Padding/Spacing to push content above the gradient fade */}
                            <div className="h-12" />
                          </div>
                        </div>
                        <MorphingDialogClose />
                      </ScrollArea>

                      {/* Button Section - Now sits outside the scrollable area */}
                      <div className="sticky bottom-0 left-0 w-full flex-shrink-0 p-4 grid grid-cols-2 gap-4 z-20">
                        <Button asChild className="h-12 rounded-xl">
                          <a href={project.liveUrl}>
                            Live
                            <ExternalLink strokeWidth={3} className="ml-2" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="secondary"
                          className="h-12 rounded-xl"
                        >
                          <a href={project.githubUrl}>
                            Github
                            <GithubIcon strokeWidth={3} className="ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            );
          })}

          {/* Toggle Button */}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            ref={toggleBtnRef}
            onClick={handleToggle}
            variant="outline"
            className="px-8 py-6 rounded-xl gap-2"
          >
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show Less Projects
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show All Projects ({projects.length - 4} more)
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
