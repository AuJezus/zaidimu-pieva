import { cn } from "~/lib/utils";

function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("mb-16 px-4", className)} {...props}>
      {children}
    </section>
  );
}

export default Section;
