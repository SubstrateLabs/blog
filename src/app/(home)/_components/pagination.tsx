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
      <div className="rounded-full border bg-card p-2 text-muted-foreground">
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
    <div className="flex justify-center gap-2">
      <Card num={1} disable={current === 1}>
        <h2 className="text-xl font-medium">
          <ChevronsLeft />
        </h2>
      </Card>
      <Card num={current - 1} disable={current === 1}>
        <h2 className="text-xl font-medium">
          <ChevronLeft />
        </h2>
      </Card>
      <div className="my-auto text-2xl mx-2">
        {current} / {end}
      </div>
      <Card num={current + 1} disable={current === end}>
        <h2 className="text-xl font-medium">
          <ChevronRight />
        </h2>
      </Card>
      <Card num={end} disable={current === end}>
        <h2 className="text-xl font-medium">
          <ChevronsRight />
        </h2>
      </Card>
    </div>
  );
};
