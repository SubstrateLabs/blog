import { getPages } from "@/app/source";
import { cn } from "@/utils";
import { H1 } from "../_components/typography";
import { PostCard } from "./_components/post-card";
import { Pagination } from "./_components/pagination";
import { notFound } from "next/navigation";

const totalPosts = getPages().length;
const postsPerPage = 100;
const pageCount = Math.ceil(totalPosts / postsPerPage);

const HomePage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const pageIndex =
    searchParams && typeof searchParams["page"] == "string"
      ? Number.parseInt(searchParams["page"])
      : 0;

  if (pageIndex < 0 || pageIndex >= pageCount) notFound();

  const startIndex = pageIndex * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = getPages()
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(startIndex, endIndex);

  return (
    <main
      className={cn(
        "max-w-[60rem] mx-auto my-14",
        "px-4 pt-10 md:px-6 md:pt-12"
      )}
    >
      <H1>Substrate Blog</H1>
      <div
        className={cn(
          "mt-12 mb-8 p-4 -mx-4 relative",
          "transform-gpu" // Fixes a Safari rendering quirk with PostCard's :hover/:active transforms
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(theme('colors.zinc.400')_0.5px,transparent_0.5px)] dark:bg-[radial-gradient(theme('colors.zinc.600')_0.5px,transparent_0.5px)] bg-[length:3.75px_3.75px]" />
        <div className="space-y-5">
          {posts.map((post) => {
            const date = new Date(post.data.date).toLocaleDateString();
            return (
              <PostCard
                title={post.data.title}
                description={post.data.description ?? ""}
                url={post.url}
                date={date}
                key={post.url}
                image={post.data.image}
                alt={post.data.title}
              />
            );
          })}
        </div>
      </div>
      <Pagination current={pageIndex + 1} end={pageCount} path="" />
    </main>
  );
};

export default HomePage;
