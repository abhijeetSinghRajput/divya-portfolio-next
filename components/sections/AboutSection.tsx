import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import TooltipWrapper from "@/components/shared/TooltipWrapper";

type Skill = {
  label: string;
  img: string;
  className?: string;
};

const skills: Skill[] = [
  { label: "figma", img: "/language/figma.svg" },
  { label: "React", img: "/language/react.svg" },
  {
    label: "ShadcnUI",
    img: "/language/shadcn.svg",
    className: "dark:invert-0 invert",
  },
  { label: "Tailwind CSS", img: "/language/tailwind.svg" },
  { label: "Python", img: "/language/python.svg" },
  { label: "Javascript", img: "/language/javascript.svg" },
  { label: "C++", img: "/language/cpp.svg" },
  { label: "Git", img: "/language/git.svg" },
];

const AboutSection = ({ className }: { className?: string }) => {
  return (
    <section id="about" className={cn("space-y-8", className)}>
      <div className="grid items-center md:grid-cols-3 gap-10">
        <div className="shrink-0 grayscale ">
          <img src="./avatar3.png" alt="" />
        </div>

        <div className="col-span-2 ">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl font-semibold text-primary mb-3">
                Divya Sachan
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I&apos;m a{" "}
                  <strong className="font-playfair italic text-lg text-primary mx-1">
                    Figma & Frontend Designer
                  </strong>{" "}
                  who loves creating clean, modern interfaces. I turn ideas into
                  smooth, user-friendly designs, build polished UI prototypes,
                  and also{" "}
                  <strong className="font-playfair italic text-primary mx-2">
                    Poems Writer
                  </strong>
                  .
                </p>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col-reverse gap-4 justify-between items-start sm:items-center">
              <div>
                <h3 className="font-semibold text-xl font-playfair mb-2">
                  Tools I use
                </h3>
                <div className="flex gap-2 ">
                  {skills.map(({ img, label, className }) => (
                    <TooltipWrapper key={label} content={label}>
                      <span className={cn("size-7", className)}>
                        <img src={img} alt="label" />
                      </span>
                    </TooltipWrapper>
                  ))}
                </div>
              </div>

              <img
                className="h-16 sm:mt-0 -mt-10 invert ml-auto dark:invert-0"
                src="./divya-signature.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Stacks({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-2 ", className)}>
      <h4 className="font-semibold text-lg mb-2 text-primary">Stacks</h4>
      <div className="flex gap-2 flex-wrap">
        {skills.map(({ img, label }) => (
          <Badge
            key={label}
            variant="outline"
            className="bg-muted/30 rounded-xl py-1 border-2 font-medium gap-2"
          >
            <div className="size-6">
              <img src={img} alt={label} />
            </div>
            <span>{label}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
