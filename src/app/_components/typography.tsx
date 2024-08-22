import { cn } from "@/utils";

export const H1_STYLES = cn(
  "text-zinc-700 dark:text-zinc-100",
  "font-serif font-medium tracking-tight",
  "text-5xl md:text-6xl lg:text-7xl",
  // "max-w-[70vw] md:max-w-[13ch] lg:max-w-[15ch]",
  "mb-4",
);

export const H2_STYLES = cn(
  "text-zinc-600 dark:text-zinc-300",
  "font-serif font-medium tracking-normal",
  "text-3xl md:text-4xl lg:text-5xl",
  "mb-4",
);

export const H3_STYLES = cn(
  "text-zinc-500 dark:text-zinc-400",
  "font-serif font-normal tracking-normal",
  "text-2xl md:text-2xl lg:text-3xl",
  "mb-4",
);

export const SUBTITLE_STYLES = cn(
  "text-zinc-700 dark:text-zinc-100",
  "font-sans font-medium",
  "text-lg md:text-xl lg:text-2xl",
  // "max-w-[70vw] md:max-w-[38ch] lg:max-w-[40ch]",
  "mb-0",
);

export const H1 = ({
  children,
  style,
  id,
  ...props
}: {
  children: React.ReactNode;
  style?: string;
  id?: string;
  props?: React.ComponentProps<"h1">;
}) => {
  return (
    <h1 {...props} id={id} className={cn(H1_STYLES, style)}>
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  style,
  id,
  ...props
}: {
  children: React.ReactNode;
  style?: string;
  id?: string;
  props?: React.ComponentProps<"h2">;
}) => {
  return (
    <h2 {...props} id={id} className={cn(H2_STYLES, style)}>
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  style,
  id,
  ...props
}: {
  children: React.ReactNode;
  style?: string;
  id?: string;
  props?: React.ComponentProps<"h3">;
}) => {
  return (
    <h3 {...props} id={id} className={cn(H3_STYLES, style)}>
      {children}
    </h3>
  );
};

export const Subtitle = ({
  children,
  style,
  id,
  ...props
}: {
  children: React.ReactNode;
  style?: string;
  id?: string;
  props?: React.ComponentProps<"h2">;
}) => {
  return (
    <h2 {...props} id={id} className={cn(SUBTITLE_STYLES, style)}>
      {children}
    </h2>
  );
};
