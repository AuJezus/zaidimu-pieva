import { cn } from "~/lib/utils";

function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "mx-auto mb-16 max-w-[1200px] px-4 lg:px-6 xl:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
