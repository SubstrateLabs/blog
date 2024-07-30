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
      <body className="flex min-h-dvh flex-col">
        <RootProvider>
          {children}
          <Footer />
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_af35b2e4346aa70b564bcace954b11870eb8/sdk.js"),(document.body || document.head).appendChild(n)}();`,
            }}
          />
        </RootProvider>
      </body>
    </html>
  );
};

export default Layout;

export const metadata: Metadata = {
  metadataBase: new URL("https://substrate.run/blog"),
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
    description: "substrate.run - The best way to build compound AI",
    images: "/api/og",
  },
};
