import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { sortedByDatePageTree } from "../source";
import Link from "next/link";
import FullLogo from "../(home)/_components/full-logo";

const RootDocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DocsLayout
      tree={sortedByDatePageTree}
      nav={{
        title: (
          <div className="invert-0 group-hover:invert py-2 rounded backdrop-blur px-2 group space-x-2 hover:bg-[#292B33] flex items-center">
            <FullLogo height={28} />
          </div>
        ),
        url: "https://substrate.run/blog",
      }}
      githubUrl="https://github.com/SubstrateLabs/blog"
    >
      {children}
    </DocsLayout>
  );
};

export default RootDocsLayout;
