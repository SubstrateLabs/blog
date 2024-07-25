import { HomeLayout as HL } from "fumadocs-ui/home-layout";
import type { ReactNode } from "react";
import FullLogo from "./_components/full-logo";
import Link from "next/link";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <HL
      nav={{
        title: (
          <Link
            href="https://substrate.run"
            className="rounded backdrop-blur px-2 group space-x-2 hover:bg-[#292B33] flex items-center"
          >
            <div className="invert-0 group-hover:invert py-2">
              <FullLogo height={28} />
            </div>
          </Link>
        ),
      }}
      githubUrl="https://github.com/SubstrateLabs/blog"
      links={[
        { text: "Docs", url: "https://docs.substrate.run" },
        { text: "Nodes", url: "https://substrate.run/nodes" },
        { text: "Pricing", url: "https://substrate.run/pricing" },
        { text: "Company", url: "https://substrate.run/company" },
        { text: "Blog", url: "https://substrate.run/blog" },
      ]}
    >
      {children}
    </HL>
  );
};

export default HomeLayout;
