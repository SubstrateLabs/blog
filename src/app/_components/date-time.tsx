import { formatDistance } from "date-fns";

// Format the date in format of "Jul 1, 2024" -
// using the default locale of the visitor (or system on the server).
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

// Format the date in format of "Jul 1, 2024 1:00 PM".
const formatDateTime = (date: string) =>
  new Date(date).toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

export const RelativeDate = ({
  date,
  className,
  ...props
}: {
  date: string;
  className?: string;
  props?: React.ComponentProps<"time">;
}) => {
  return (
    <time {...props} title={formatDateTime(date)} className={className}>
      {formatDistance(new Date(), date)} ago
    </time>
  );
};

export const AbsoluteDate = ({
  date,
  className,
  ...props
}: {
  date: string;
  className?: string;
  props?: React.ComponentProps<"time">;
}) => {
  return (
    <time {...props} title={formatDateTime(date)} className={className}>
      {formatDate(date)}
    </time>
  );
};
