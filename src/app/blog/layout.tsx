import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { sortedByDatePageTree } from "../source";
import FullLogo from "../(home)/_components/full-logo";

const RootDocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DocsLayout
      sidebar={{
        enabled: true,
        collapsible: true,
      }}
      tree={sortedByDatePageTree}
      nav={{
        title: (
          <div className="py-4 text-fd-primary">
            <FullLogo height={22} />
          </div>
        ),
        url:
          process.env.VERCEL_ENV === "production" ||
          process.env.VERCEL_ENV === "preview"
            ? "https://www.substrate.run/blog"
            : "/",
      }}
      // Previously, this exposed an awkward hamburger button with a
      // single link to this GitHub repo. For users who want to suggest
      // corrections to a blog post, they can tap on the "Edit this page"
      // link at the bottom of the page (defined in the blog page component).
      // githubUrl="https://github.com/SubstrateLabs/blog"
    >
      {children}
    </DocsLayout>
  );
};

export default RootDocsLayout;
