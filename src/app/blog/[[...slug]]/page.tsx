import { getPage, getPages } from "@/app/source";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import { Heading } from "fumadocs-ui/components/heading";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AbsoluteDate } from "@/app/_components/date-time";
import {
  H1,
  H1_STYLES,
  H2_STYLES,
  H3_STYLES,
} from "@/app/_components/typography";
import { cn } from "@/utils";
import { EditOnGitHub } from "@/app/_components/edit-on-github";
import { Footer } from "@/app/_components/footer";

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
    <DocsPage
      toc={post.data.exports.toc}
      lastUpdate={lastUpdate}
      footer={{
        enabled: true,
        component: (
          <>
            <p>
              <EditOnGitHub
                owner="SubstrateLabs"
                repo="blog"
                sha="main"
                path={`content/${post.file.path}`}
              />
            </p>
            <Footer />
          </>
        ),
      }}
    >
      <DocsBody>
        <AbsoluteDate
          date={date}
          className="text-fd-muted-foreground font-normal text-right"
        />
        <H1>{post.data.title}</H1>
        {/* <p className="italic mt-4 mb-10">{post.data.description}</p> */}

        <MDX
          components={{
            h1: (props) => (
              <Heading
                as="h1"
                {...props}
                className={cn(H1_STYLES, props.className)}
              />
            ),
            h2: (props) => (
              <Heading
                as="h2"
                {...props}
                className={cn(H2_STYLES, props.className)}
              />
            ),
            h3: (props) => (
              <Heading
                as="h3"
                {...props}
                className={cn(H3_STYLES, props.className)}
              />
            ),
            h4: (props) => <Heading as="h4" {...props} />,
            h5: (props) => <Heading as="h5" {...props} />,
            h6: (props) => <Heading as="h6" {...props} />,
          }}
        />
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

export const generateMetadata = ({
  params,
}: {
  params: { slug?: string[] };
}) => {
  const post = getPage(params.slug);
  if (post === undefined) return;

  const title = post.data.title;
  const description = post.data.description;

  return {
    metadataBase: new URL("https://substrate.run/blog"),
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: `/og-image-v3.png`,
      url: post.url,
    },
    twitter: {
      title: title,
      description: description,
      images: `/og-image-v3.png`,
    },
  } satisfies Metadata;
};
