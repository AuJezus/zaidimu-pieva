"use client";

import { cn } from "~/lib/utils";
import { type HTMLMotionProps, motion } from "framer-motion";

function Section({
  className,
  children,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      className={cn(
        "relative z-10 mx-auto mb-16 max-w-[1200px] px-4 lg:px-6 xl:px-0",
        className,
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default Section;
