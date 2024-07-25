import Link from "next/link";
import Image from "next/image";

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
      className="rounded-lg border bg-card p-4 text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground w-full"
    >
      <div className="flex flex-rows space-x-4 justify-between">
        <div className="flex flex-col space-y-4">
          <h2 className="mt-2 text-xl font-medium">{title}</h2>
          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-medium text-muted-foreground text-wrap max-w-lg">
            {description}
          </p>
          <h3 className="text-left font-medium pt-2">{date}</h3>
        </div>
        <div className="hidden lg:block">
          <Image
            src={image}
            alt={alt}
            height={400}
            width={400}
            className="mx-auto"
          ></Image>
        </div>
      </div>
    </Link>
  );
};
