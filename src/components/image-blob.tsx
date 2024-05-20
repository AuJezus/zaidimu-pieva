import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { cn } from "~/lib/utils";

function ImageBlob({
  className,
  src,
  alt,
  borderRadius,
}: {
  className?: string;
  src: StaticImport | string;
  alt: string;
  borderRadius: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("aspect-square border-4 object-cover", className)}
      style={{
        borderRadius: borderRadius,
      }}
    />
  );
}

export default ImageBlob;
