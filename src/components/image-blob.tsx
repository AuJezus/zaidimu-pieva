import { type Asset } from "contentful";
import ContentfulImage from "~/lib/contentful/contentful-image";
import { cn } from "~/lib/utils";

function ImageBlob({
  asset,
  className,
  borderRadius,
  priority,
}: {
  asset?: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string>;
  className?: string;
  borderRadius: string;
  priority?: boolean;
}) {
  return (
    <ContentfulImage
      asset={asset}
      className={cn("aspect-square border-4 object-cover", className)}
      style={{
        borderRadius: borderRadius,
      }}
      priority={priority}
    />
  );
}

export default ImageBlob;
