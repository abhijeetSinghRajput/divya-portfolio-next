"use client";

import { ChevronsUpDown, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TooltipWrapper from "@/components/shared/TooltipWrapper";

const AwardIcon = () => (
  <svg
    viewBox="0 0 256 256"
    className="pointer-events-none size-4 text-muted-foreground"
  >
    <path
      d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8,8,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96Zm16,0a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
      fill="currentColor"
    />
  </svg>
);

const awards = [
  {
    id: 2,
    title: "All-India Slogan Writing Competition",
    prize: "3rd Position",
    date: "2025",
    grade: "National",
    link: "#",
  },
  {
    id: 1,
    title: "NSS Volunteer",
    prize: "Community & Social Service",
    date: "2024",
    grade: "College",
    link: "#",
  },
  {
    id: 3,
    title: "IEEE Technical Workshop",
    prize: "Hands-on Training",
    date: "2023",
    grade: "College",
    link: "#",
  },
  {
    id: 4,
    title: "IoT Workshop",
    prize: "Smart Systems & IoT Applications",
    date: "2023",
    grade: "College",
    link: "#",
  },
];

export default function AwardsHonorsUI() {
  return (
    <section id="awards" className="max-w-4xl mx-auto">
      <div>
        <header className="mb-6">
          <h2 className="font-playfair text-3xl font-semibold">
            Honors & Awards
            <sup className="ml-1 text-sm font-medium text-muted-foreground">
              ({awards.length})
            </sup>
          </h2>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {awards.map((award, index) => (
            <AccordionItem key={award.id} value={`item-${index}`}>
              <AccordionTrigger className="p-0 border-none hover:no-underline">
                <div className="flex border-b w-full items-center hover:bg-accent/30 transition-all">
                  <Badge variant="icon" className="mx-4">
                    <AwardIcon />
                  </Badge>

                  <div className="flex-1 border-l border-dashed">
                    <div className="flex w-full items-center gap-4 p-4 pr-2 text-left">
                      <div className="flex-1">
                        <h3 className="mb-1 leading-snug font-medium">
                          {award.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                          <span>{award.prize}</span>
                          <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
                          <time>{award.date}</time>
                          <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
                          <span>{award.grade}</span>
                        </div>
                      </div>

                      <TooltipWrapper content={"Reference Attachment"}>
                        <a
                          className="relative flex size-6 items-center justify-center text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-100"
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Reference Attachment"
                        >
                          <FileCheck className="size-4" />
                        </a>
                      </TooltipWrapper>

                      <ChevronsUpDown
                        size={16}
                        className="text-muted-foreground"
                      />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-4 text-base border-b text-muted-foreground">
                <p>
                  Sample description for {award.title}. Add actual content here.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
