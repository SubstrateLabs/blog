import { getPage, getPages } from "@/app/source";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const Page = ({ params }: { params: { slug?: string[] } }) => {
  const post = getPage(params.slug);

  if (post === undefined) {
    notFound();
  }

  const date = new Date(post.data.date).toLocaleDateString();

  const lastModified = post.data.exports.lastModified;
  let lastUpdate: Date | undefined = undefined;
  if (lastModified !== undefined) {
    lastUpdate = new Date(lastModified);
  }

  const MDX = post.data.exports.default;

  return (
    <DocsPage toc={post.data.exports.toc} lastUpdate={lastUpdate}>
      <DocsBody>
        <h4 className="text-right font-normal">{date}</h4>
        <h1 className="mb-auto font-normal">{post.data.title}</h1>
        {/* <p className="italic mt-4 mb-10">{post.data.description}</p> */}
        <MDX />
      </DocsBody>
    </DocsPage>
  );
};

export default Page;

export const generateStaticParams = () => {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
};

export const generateMetadata = ({ params }: { params: { slug?: string[] } }) => {
  const post = getPage(params.slug);
  if (post === undefined) return;

  const title = post.data.title;
  const description = post.data.description;
  const imageParams = new URLSearchParams();
  imageParams.set("title", title);
  imageParams.set("description", description ?? "");

  return {
    metadataBase: new URL("https://substrate.run/blog"),
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: `/api/og?${imageParams.toString()}`,
      url: post.url,
    },
    twitter: {
      title: title,
      description: description,
      images: `/api/og?${imageParams.toString()}`,
    },
  } satisfies Metadata;
};
