import { cn } from "@/lib/utils";

export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold capitalize tracking-wider text-[var(--text)]", className)}>{children}</h2>;
};

export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold capitalize tracking-wider text-[var(--text)]", className)}>{children}</h2>;
};

