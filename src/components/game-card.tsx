import { Badge } from "./ui/badge";
import { cn } from "~/lib/utils";
import ContentfulImage from "~/lib/contentful/contentful-image";
import type { Asset, EntryFields } from "contentful";
import Link from "next/link";
import slugify from "slugify";

function GameCard({
  className,
  game,
}: {
  className?: string;
  game: {
    name: string;
    addedAt: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
    description: string;
    tags?: string[] | undefined;
    image: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string> | undefined;
    longDescription?: EntryFields.RichText;
    slug: string;
  };
}) {
  return (
    <Link
      href={`/zaidimai/${slugify(game.name, { lower: true })}`}
      className={cn(
        "group relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden rounded-lg border-4 p-4 text-primary-foreground",
        className,
      )}
    >
      <div className="absolute right-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-accent to-transparent to-50% transition-transform duration-300 group-hover:translate-y-0 lg:translate-y-full"></div>
      <ContentfulImage asset={game.image} fill className="-z-20 object-cover" />

      <div className="flex flex-wrap">
        {game.tags?.map((tag) => (
          <Badge key={tag} className="w-fit">
            {tag}
          </Badge>
        ))}
      </div>

      <div>
        <p className="mb-3 text-2xl font-bold transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0">
          {game.name}
        </p>

        <div className="flex items-center justify-between"></div>
      </div>
    </Link>
  );
}

export default GameCard;
