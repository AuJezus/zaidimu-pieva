import Heading from "~/components/heading";
import Section from "~/components/section";

import { Calendar } from "~/components/ui/calendar";
import { Badge } from "~/components/ui/badge";
import { getGame, getGames } from "~/server/queries";
import { notFound } from "next/navigation";
import ContentfulImage from "~/lib/contentful/contentful-image";
import { type Metadata } from "next";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const game = await getGame(slug);

  return {
    title: game?.name,
    description: game?.description,
  };
}

export async function generateStaticParams() {
  const games = await getGames();

  return games.map((game) => ({
    slug: game.slug,
  }));
}

async function GamePage({ params: { slug } }: { params: { slug: string } }) {
  const game = await getGame(slug);

  if (!game) notFound();

  const haveBooking = !!game.bookedFrom && !!game.bookedUntil;
  const range = haveBooking
    ? {
        from: new Date(game.bookedFrom as string),
        to: new Date(game.bookedUntil as string),
      }
    : undefined;

  return (
    <Section>
      <div className="mb-20 flex grid-cols-2 grid-rows-[auto_auto] flex-wrap lg:grid lg:items-center lg:gap-x-16">
        <div className="mb-4 text-lg lg:order-1 lg:self-end">
          <div className="mb-2 flex flex-wrap">
            {game.tags?.map((tag) => (
              <Badge key={tag} className="w-fit">
                {tag}
              </Badge>
            ))}
          </div>
          <Heading level="h2">{game.name}</Heading>
          <p>{game?.description}</p>
        </div>

        <div className="mb-4 w-full self-start sm:w-fit lg:order-4 lg:mb-0">
          <p className="text-xl font-bold">Užimtumas:</p>
          <Calendar
            mode="range"
            selected={range}
            className="mx-auto w-fit rounded-md border"
          />
        </div>

        <ContentfulImage
          asset={game.image}
          className="mx-auto min-w-0 max-w-96 shrink rounded-lg sm:w-1/2 lg:order-2 lg:row-span-2 lg:w-full lg:max-w-lg"
        />
      </div>

      {game.longDescription && (
        <div className="prose mx-auto">
          {documentToReactComponents(game.longDescription)}
        </div>
      )}
    </Section>
  );
}

export default GamePage;
