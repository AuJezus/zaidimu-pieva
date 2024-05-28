import { type Asset } from "contentful";
import ContentfulImage from "~/lib/contentful/ContentfulImage";
import { cn } from "~/lib/utils";

function ImageBlob({
  asset,
  className,
  borderRadius,
}: {
  asset?: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string>,
  className?: string;
  borderRadius: string;
}) {
  return (
    <ContentfulImage
      asset={asset}
      className={cn("aspect-square border-4 object-cover", className)}
      style={{
        borderRadius: borderRadius,
      }}
    />
  );
}

export default ImageBlob;
