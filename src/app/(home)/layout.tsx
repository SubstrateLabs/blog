import { HomeLayout as HL } from "fumadocs-ui/home-layout";
import type { ReactNode } from "react";
import FullLogo from "./_components/full-logo";
import { Footer } from "../_components/footer";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <HL
      nav={{
        title: (
          <div className="py-4 text-fd-primary">
            <FullLogo height={22} />
          </div>
        ),
        url:
          process.env.VERCEL_ENV === "production" ||
          process.env.VERCEL_ENV === "preview"
            ? "https://www.substrate.run/"
            : "/",
      }}
      // Previously, this added a prominent GitHub link to the header nav.
      // It was confusing because that link points to the blog repo,
      // an open-source repo for the Substrate codebase, as one may expect.
      // The blog repo is less useful to link to, now that there are links
      // to GitHub from the "Edit this page" links at the bottom of each
      // blog post page.
      // githubUrl="https://github.com/SubstrateLabs/blog"
      links={[
        { text: "Docs", url: "https://docs.substrate.run" },
        { text: "Nodes", url: "https://substrate.run/nodes" },
        { text: "Pricing", url: "https://substrate.run/pricing" },
        { text: "Company", url: "https://substrate.run/company" },
        // Highlight the "Blog" nav link when the URL is `/blog` or a child route.
        { text: "Blog", url: "/", active: "nested-url" },
      ]}
    >
      {children}
      <div className="px-4 pt-10 md:px-6 md:pt-12">
        <Footer />
      </div>
    </HL>
  );
};

export default HomeLayout;
