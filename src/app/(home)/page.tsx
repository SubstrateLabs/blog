import { getPages } from "@/app/source";
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
  const pageIndex = searchParams && typeof searchParams["page"] == "string" ? Number.parseInt(searchParams["page"]) : 0;

  if (pageIndex < 0 || pageIndex >= pageCount) notFound();

  const startIndex = pageIndex * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = getPages()
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(startIndex, endIndex);

  return (
    <main>
      <div className="mx-4 my-6 lg:mx-auto lg:w-[992px]">
        <div className="my-6 text-3xl">
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-4 text-left">
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
        <div className="my-6">
          <Pagination current={pageIndex + 1} end={pageCount} path="" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
