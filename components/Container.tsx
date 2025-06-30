import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-screen mx-auto px-0 sm:px-4 md:px-8 lg:px-8 xl:px-20 2xl:px-24", className)}>{children}</div>;
};

export default Container;
