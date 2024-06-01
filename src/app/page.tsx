import Section from "~/components/section";
import Image from "next/image";
import { Button, buttonVariants } from "~/components/ui/button";
import ImageBlob from "~/components/image-blob";
import GreenContainer from "~/components/green-container";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Heading from "~/components/heading";
import { Fragment } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselCount,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import GameCard from "~/components/game-card";
import {
  BiSolidQuoteAltLeft,
  BiSolidQuoteAltRight,
  BiUser,
} from "react-icons/bi";
import ContactForm from "~/components/contact-form";
import { client } from "~/lib/contentful/utils";

import arrowSvg from "../../public/arrow.svg";
import ContentfulImage from "~/lib/contentful/contentful-image";
import type {
  TypeTestimonialSkeleton,
  TypeHomePageSkeleton,
} from "~/lib/contentful/types";
import { getContactImage, getGames } from "~/server/queries";
import Link from "next/link";
import { cn } from "~/lib/utils";

async function HomePage() {
  const { fields: page } = await client.getEntry<TypeHomePageSkeleton>(
    "74pae1cf0FjRAUg9IRhLK0",
  );

  const games = await getGames();

  const { items } = await client.getEntries<TypeTestimonialSkeleton>({
    content_type: "testimonial",
  });

  const testimonials = items.map((item) => ({ ...item.fields }));

  const contactImage = await getContactImage();

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <Section className="mt-4 max-w-screen-2xl items-center md:flex xl:px-8">
        <div className="mb-12 w-full">
          <div className="mb-6">
            <Heading
              level="h1"
              className="mb-2 text-6xl font-black lg:mb-4 lg:text-7xl 2xl:text-8xl"
            >
              {page.heroTitle}
            </Heading>
            <p className="text-xl font-semibold xl:text-2xl 2xl:text-3xl">
              {page.heroParagraph}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/zaidimai" className={buttonVariants({ size: "lg" })}>
              Žiūrėti Žaidimus
            </Link>
            <Link
              href="/kontaktai"
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Kontaktai
            </Link>
          </div>
        </div>

        <ImageBlob
          asset={page.heroImage}
          borderRadius="35% 65% 42% 58% / 42% 33% 67% 58%"
          className="mx-auto w-full min-w-0 max-w-md lg:max-w-xl"
          priority={true}
        />
      </Section>

      <GreenContainer>
        {/* Lawn Games */}
        <Section>
          <Heading>{page.lawnGameTitle}</Heading>

          <div className="flex flex-col gap-12 md:flex-row md:gap-6">
            <div className="flex w-full flex-col gap-4 md:mt-8 md:text-lg">
              <p>{page.lawnGameParagraph1}</p>

              <p>{page.lawnGameParagraph2}</p>

              <Link href="/zaidimai" className={cn(buttonVariants(), "w-fit")}>
                Žiūrėti Žaidimus
              </Link>
            </div>

            <div className="w-full">
              <ImageBlob
                asset={page?.lawnGameImage}
                borderRadius="56% 44% 41% 59% / 50% 36% 64% 50%"
                className="mx-auto w-full max-w-md"
              />
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section className="mb-0 pb-16">
          <Heading className="mb-8 text-center">{page.processTitle}</Heading>

          <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch">
            {page.processNames.map((name, i) => (
              <Fragment key={name}>
                <div className="flex w-full flex-col items-center">
                  <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 text-4xl font-bold text-primary">
                    {i + 1}
                  </div>
                  <p className="text-3xl font-semibold">{name}</p>
                  <p className="text-center text-lg">
                    {page.processDescriptions[i]}
                  </p>
                </div>

                {i !== page.processNames.length - 1 && (
                  <Image
                    src={arrowSvg as StaticImport}
                    alt="Rodyklė"
                    className="h-20 w-6 md:h-auto md:-rotate-90 lg:w-8"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </Section>
      </GreenContainer>

      {/* Game carousel */}
      <Section className="mt-4">
        <Heading>{page.gameShowcaseTitle}</Heading>

        <p className="mb-4 md:text-lg">{page.gameShowcaseParagraph}</p>

        <Carousel className="mb-4 flex items-center gap-4">
          <CarouselPrevious className="static hidden shrink-0 hover:bg-primary sm:flex min-[1300px]:absolute" />

          <CarouselContent>
            {games.map((game) => (
              <CarouselItem
                key={game.name}
                className="basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <GameCard game={game} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="static hidden shrink-0 hover:bg-primary sm:flex min-[1300px]:absolute" />
        </Carousel>

        <Button>Žiūrėti Žaidimus</Button>
      </Section>

      {/* Events */}
      <Section className="xl:mb-24">
        <Heading className="mb-8">{page.eventsTitle}</Heading>

        <div className="flex flex-wrap justify-around gap-4">
          {page.eventNames.map((name, i) => (
            <div
              key={name}
              className="flex aspect-[2/3] w-full max-w-72 flex-col gap-2"
            >
              <ContentfulImage
                asset={page.eventImages[i]}
                className="h-full min-h-0 flex-shrink rounded-lg border-4 object-cover"
              />
              <p className="text-center text-3xl font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <GreenContainer>
        {/* Testimonials */}
        <Section>
          <Heading>Atsiliepimai</Heading>

          <Carousel>
            <CarouselContent className="mb-4 ml-0">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.personsName}
                  className="flex py-2 pl-2.5 pr-2.5 sm:basis-2/3 md:basis-1/3"
                >
                  <div className="relative h-full w-full rounded-lg bg-primary px-4 py-8">
                    <BiSolidQuoteAltLeft className="absolute left-0 top-0 -translate-x-3 -translate-y-3 text-4xl text-[#c4f7d6]" />
                    <BiSolidQuoteAltRight className="absolute bottom-0 right-0 translate-x-3 translate-y-3 text-4xl text-[#c4f7d6]" />

                    <div className="mb-2 flex items-center gap-4">
                      {t.image && (
                        <ContentfulImage
                          asset={t.image}
                          className="aspect-square w-16 rounded-full object-cover"
                        ></ContentfulImage>
                      )}
                      {!t.image && (
                        <div className="flex aspect-square w-16 items-center justify-center rounded-full bg-primary text-4xl">
                          <BiUser />
                        </div>
                      )}
                      <p className="text-xl font-semibold">{t.personsName}</p>
                    </div>

                    <p>{t.comment}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselCount />
          </Carousel>
        </Section>

        <Section className="mb-0">
          <Heading>Susisiekite su mumis</Heading>

          <ContactForm image={contactImage} className="px-2" />
        </Section>
      </GreenContainer>
    </main>
  );
}

export default HomePage;
