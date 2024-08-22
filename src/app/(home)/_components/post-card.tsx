import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils";
import { AbsoluteDate } from "@/app/_components/date-time";
import { Subtitle } from "@/app/_components/typography";

export const PostCard = ({
  title,
  description,
  url,
  date,
  image,
  alt,
}: {
  title: string;
  description: string;
  url: string;
  date: string;
  image: string;
  alt: string;
}) => {
  return (
    <Link
      href={url}
      className={cn(
        "block w-full relative p-px bg-fd-background text-zinc-600 dark:text-zinc-300",
        "border border-solid border-zinc-400 dark:border-zinc-500",
        "hover:border-zinc-900 hover:dark:border-zinc-100",
        "shadow-[1.5px_1.5px_theme('colors.zinc.300')] hover:shadow-[3px_3px_theme('colors.zinc.300')]",
        "dark:shadow-[1.5px_1.5px_theme('colors.zinc.600')] dark:hover:shadow-[3px_3px_theme('colors.zinc.600')]",
        "hover:-translate-x-px hover:-translate-y-px",
        "active:translate-x-px active:translate-y-px active:opacity-70",
        "transition-all duration-150 ease-out",
        "overflow-clip grid md:grid-cols-4"
      )}
    >
      <div
        className={cn(
          "md:col-span-2 place-items-center",
          "border-solid border-r-fd-background border-r"
        )}
      >
        <Image
          draggable={false}
          src={image}
          alt={alt}
          height={400}
          width={400}
          className="object-cover object-center md:object-fit w-full h-auto"
        />
      </div>
      <div className={cn("md:col-span-2 space-y-3", "px-6 py-8 md:px-8 md:py-6")}>
        <Subtitle style="!text-2xl !leading-[1.15]">{title}</Subtitle>
        <p className="text-medium leading-tight line-clamp-4">{description}</p>
        <AbsoluteDate
          date={date}
          className="block text-fd-muted-foreground font-medium"
        />
      </div>
    </Link>
  );
};
