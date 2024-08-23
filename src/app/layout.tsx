import { GoogleAnalytics } from "@next/third-parties/google";
import { RootProvider } from "fumadocs-ui/provider";
import "katex/dist/katex.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "./_components/footer";
import "./global.css";
import { HankenGrotesk, Queens, ServerMono } from "./fonts";
import { cn } from "@/utils";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={cn()}>
      <body
        className={cn(
          HankenGrotesk.variable,
          Queens.variable,
          ServerMono.variable,
          "antialiased font-sans text-zinc-700"
        )}
      >
        <RootProvider>
          {children}
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
