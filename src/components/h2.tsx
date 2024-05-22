import { cn } from "~/lib/utils";

function H2({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("mb-4 text-5xl font-bold", className)} {...props}>
      {children}
    </h2>
  );
}

export default H2;
