import Link from "next/link";
import { cn } from "@/utils";
import FullLogo from "./full-logo";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";

export default async function MarketingHeader() {
  return (
    <>
      <header className={`z-50 bg-dots py-1 h-10`}>
        <nav className="font-serif mx-auto px-2">
          <div className="flex">
            <Link
              href="/"
              className="rounded backdrop-blur px-2 group space-x-2 hover:bg-[#292B33] flex items-center"
            >
              <div className="invert-0 group-hover:invert">
                <FullLogo height={28} />
              </div>
            </Link>
            <div className="flex w-full items-center justify-between">
              <div className="ml-8 flex mx-2">
                <div className="hidden md:flex md:flex-1">
                  <Link
                    href="https://docs.substrate.run"
                    className="px-3 py-1 backdrop-blur hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
                  >
                    Docs
                  </Link>
                </div>
                <div className="hidden md:flex md:flex-1">
                  <Link
                    href="/nodes"
                    className="px-3 py-1 backdrop-blur hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
                  >
                    Nodes
                  </Link>
                </div>
                <div className="hidden md:flex md:flex-1">
                  <Link
                    href="/pricing"
                    className={cn(
                      "px-3 py-1 backdrop-blur hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
                    )}
                  >
                    Pricing
                  </Link>
                </div>
                <div className="hidden md:flex md:flex-1">
                  <Link
                    href="/company"
                    className={cn(
                      "px-3 py-1 backdrop-blur hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
                    )}
                  >
                    Company
                  </Link>
                </div>
                <div className="hidden md:flex md:flex-1">
                  <Link
                    href="https://substrate.run/blog"
                    className="px-3 py-1 backdrop-blur hover:bg-[#292B33] hover:text-white bg-grid-small-white/[0.3] rounded"
                  >
                    Blog
                  </Link>
                </div>
                <Sheet>
                  <SheetTrigger className="ml-4 inline md:hidden text-2xl font-bold tracking-widest">
                    ...
                  </SheetTrigger>
                  <SheetContent className="flex flex-col bg-black bg-opacity-80 backdrop-blur text-white">
                    <Link
                      href="https://docs.substrate.run"
                      className="px-3 py-2"
                    >
                      Guides
                    </Link>
                    <Link href="/nodes" className="px-3 py-2">
                      Nodes
                    </Link>
                    <Link href="/pricing" className={cn("px-3 py-2")}>
                      Pricing
                    </Link>
                    <Link href="/company" className={cn("px-3 py-2")}>
                      Company
                    </Link>
                    <Link
                      href="https://substrate.run/blog"
                      className="px-3 py-2"
                    >
                      Blog
                    </Link>
                  </SheetContent>
                </Sheet>
              </div>
              <Link
                href="/dashboard"
                className="rounded border drop-shadow border-black px-3 backdrop-blur"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
