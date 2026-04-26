"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationTimeline = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const educationData = [
    {
      id: 1,
      institution: "Graphic Era Deemed to be University",
      startDate: "2024",
      endDate: "2026",
      description:
        "Currently pursuing MCA with focus on software development, algorithms, and modern web technologies.",
    },
    {
      id: 2,
      institution: "PSIT College Of Higher Education",
      startDate: "2021",
      endDate: "2024",
      description:
        "Completed BCA with a CGPA of 9.2, gaining strong foundations in programming, data structures, and computer science.",
    },
    {
      id: 3,
      institution: "Laughing Buddha Academy",
      startDate: "2018",
      endDate: "2020",
      description:
        "Completed 12th Grade with 92%, specializing in Science and Mathematics.",
    },
    {
      id: 4,
      institution: "Laughing Buddha Academy",
      startDate: "2016",
      endDate: "2018",
      description:
        "Completed 10th Grade with 86%, securing strong academic performance.",
    },
  ];

  return (
    <section className="">
      <div className="space-y-4 py-4">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-semibold font-playfair">Education</h2>
          </div>
        </header>

        {/* Timeline */}
        <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={` relative ${
                index === educationData.length - 1
                  ? "last:before:absolute last:before:h-full last:before:w-4 last:before:bg-white dark:last:before:bg-zinc-950"
                  : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="block w-full text-left relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-10 before:rounded-lg hover:before:bg-muted/55"
              >
                {/* Institution Header */}
                <div className="relative z-10 mb-1 flex items-center gap-3">
                  <Badge variant={"icon"}>
                    <svg
                      width="800"
                      height="800"
                      viewBox="0 0 800 800"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.4025 270.71C18.319 270.211 19.2615 269.753 20.2276 269.34L372.413 109.255C389.94 101.288 410.06 101.288 427.587 109.255L780.46 269.652C806.513 281.494 806.513 318.5 780.46 330.343L427.587 490.74C410.06 498.707 389.94 498.707 372.413 490.74L66.6667 351.763V449.997C66.6667 468.407 51.7427 483.33 33.3333 483.33C14.9238 483.33 0 468.407 0 449.997V299.998C0 299.479 0.0118398 298.963 0.035264 298.451C0.528233 287.457 6.31753 276.67 17.4025 270.71ZM666.667 448.733V524.133C666.667 536.65 663.143 548.917 656.497 559.527C604.757 642.11 517.777 683.33 400 683.33C282.224 683.33 195.244 642.11 143.506 559.53C136.861 548.923 133.336 536.66 133.333 524.137V448.733L372.413 557.407C389.94 565.373 410.06 565.373 427.587 557.407L666.667 448.733Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Badge>
                  <h3 className="flex-1 font-medium text-balance">
                    {item.institution}
                  </h3>
                  <div className="shrink-0 text-muted-foreground">
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        openItems[item.id] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Date Range */}
                <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                  <dl>
                    <dt className="sr-only">Education Period</dt>
                    <dd className="flex items-center gap-0.5">
                      <span>{item.startDate}</span>
                      <span className="font-mono">—</span>
                      <span>{item.endDate}</span>
                    </dd>
                  </dl>
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems[item.id]
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-9 pr-4 pb-2">
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
