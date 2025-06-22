import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Title = ({
  children,
  className,
  as: Component = "h2",
  ...props
}: TextProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component
      className={cn(
        "text-lg sm:text-xl md:text-2xl font-semibold tracking-tight font-sans",
        "text-[var(--text)]",
        "line-clamp-2",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const SubTitle = ({
  children,
  className,
  as: Component = "p",
  ...props
}: TextProps & React.HTMLAttributes<HTMLElement>) => {
  return (
    <Component
      className={cn(
        "text-sm sm:text-base text-[var(--sub-text)] tracking-tight font-sans",
        "font-normal leading-relaxed",
        "line-clamp-3",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
