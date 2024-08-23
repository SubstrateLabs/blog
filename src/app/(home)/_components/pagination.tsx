import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const Card = ({
  children,
  num,
  disable,
}: {
  children?: ReactNode;
  num: number;
  disable: boolean | undefined;
}) => {
  if (disable) {
    return (
      <div className="rounded-full border bg-card p-2 text-muted-foreground opacity-30">
        {children}
      </div>
    );
  }
  return (
    <Link
      href={`/?page=${(num - 1).toString()}`}
      className="rounded-full border bg-card p-2 text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </Link>
  );
};

export const Pagination = ({
  current,
  end,
}: {
  current: number;
  end: number;
  path: string;
}) => {
  return (
    <div className="flex justify-center gap-4">
      <Card num={1} disable={current === 1}>
        <ChevronsLeft />
      </Card>
      <Card num={current - 1} disable={current === 1}>
        <ChevronLeft />
      </Card>
      <div className="my-auto mx-4 font-normal text-md text-fd-muted-foreground">
        Page {current} of {end}
      </div>
      <Card num={current + 1} disable={current === end}>
        <ChevronRight />
      </Card>
      <Card num={end} disable={current === end}>
        <ChevronsRight />
      </Card>
    </div>
  );
};
