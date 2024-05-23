import { cn } from "~/lib/utils";

function Heading({
  className,
  children,
  level = "h2",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  const HeadingLevel = level;

  return (
    <HeadingLevel
      className={cn("mb-4 text-5xl font-bold", className)}
      {...props}
    >
      {children}
    </HeadingLevel>
  );
}

export default Heading;
