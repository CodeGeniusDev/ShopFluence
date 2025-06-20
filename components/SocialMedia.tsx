"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  linkClassName?: string;
  tooltipClassName?: string;
}

const SocialLinks = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.github.com/",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: <Instagram className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, linkClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-4 justify-center w-full", className)}>
        {SocialLinks?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-[var(--text)] hover:text-[var(--white)] hover:bg-[var(--main)] rounded-full border border-[var(--text)] font-bold transition-colors cursor-pointer p-2",
                  linkClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" className={cn("bg-[var(--white)] p-2 border border-[var(--text)] shadow-lg text-[var(--text)] font-bold", tooltipClassName)}>
              <p>{item?.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
