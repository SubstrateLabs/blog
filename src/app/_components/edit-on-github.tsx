import { type AnchorHTMLAttributes, forwardRef } from "react";
import { Edit } from "lucide-react";
import { cn } from "@/utils";

// Adapted from fumadocs source:
// https://github.com/fuma-nama/fumadocs/blob/main/packages/ui/src/components/layout/edit-on-github.tsx
interface EditOnGitHubOptions
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  owner: string;
  repo: string;

  /**
   * SHA or ref (branch or tag) name.
   *
   * @defaultValue main
   */
  sha?: string;

  /**
   * File path in the repo
   */
  path: string;
}

export const EditOnGitHub = forwardRef<HTMLAnchorElement, EditOnGitHubOptions>(
  ({ owner, repo, sha = "main", path, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`https://github.com/${owner}/${repo}/blob/${sha}/${
          path.startsWith("/") ? path.slice(1) : path
        }`}
        target="_blank"
        rel="noreferrer noopener"
        {...props}
        className={cn(
          "items-center inline-flex w-auto gap-2 rounded border bg-fd-background py-1.5 px-3 text-xs text-fd-muted-foreground transition-colors hover:bg-fd-muted/80 hover:text-fd-accent-foreground",
          "transform-gpu no-underline",
          props.className
        )}
      >
        <Edit className="size-3.5" />
        Edit on GitHub
      </a>
    );
  }
);
