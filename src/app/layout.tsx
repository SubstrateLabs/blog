import { GoogleAnalytics } from "@next/third-parties/google";
import { RootProvider } from "fumadocs-ui/provider";
import "katex/dist/katex.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "./_components/footer";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={inter.className}>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
      )}
      <body className="flex min-h-dvh flex-col">
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
};

export default Layout;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Substrate Blog",
  description: "substrate.run - The best way to build compound AI",
  openGraph: {
    title: "Substrate Blog",
    description: "substrate.run - The best way to build compound AI",
    images: "/api/og",
    url: "/",
  },
  twitter: {
    title: "Substrate Blog",
    description: "This is my tech blog.",
    images: "/api/og",
  },
};
