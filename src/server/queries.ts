import {
  type TypeGameSkeleton,
  type TypeSiteInfoSkeleton,
} from "~/lib/contentful/types";
import { client } from "~/lib/contentful/utils";

export async function getContactImage() {
  const contactImage = await client.getAsset("5eJqXIEtU5xRd1voWPjWPk");
  return contactImage;
}

export async function getGames() {
  const { items } = await client.getEntries<TypeGameSkeleton>({
    content_type: "game",
  });

  const games = items
    .map((item) => ({ ...item.fields }))
    .sort((a, b) => {
      const dateA = new Date(a.addedAt as string).getTime();
      const dateB = new Date(b.addedAt as string).getTime();
      return dateB - dateA;
    });
  return games;
}

export async function getGame(slug: string) {
  const {
    items: [game],
  } = await client.getEntries<TypeGameSkeleton>({
    content_type: "game",
    "fields.slug": slug,
  });

  if (!game) return undefined;

  return game.fields;
}

export async function getSiteInfo() {
  const siteInfo = await client.getEntry<TypeSiteInfoSkeleton>(
    "2FyO1TZkAeN6fopubIdM5w",
  );
  return siteInfo.fields;
}
