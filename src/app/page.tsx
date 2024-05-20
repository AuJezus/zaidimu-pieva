import Section from "~/components/section";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import ImageBlob from "~/components/image-blob";
import GreenContainer from "~/components/green-container";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import H2 from "~/components/h2";
import GameCarousel from "~/components/game-carousel";
import { Fragment } from "react";

import heroImg from "../../public/section-images/hero.jpg";
import gamesImg from "../../public/section-images/games.jpg";
import arrowSvg from "../../public/arrow.svg";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const process = [
  { name: "Rinkitės", content: "Rinkitės iš didelio žaidimų asortimento." },
  {
    name: "Užsisakykite",
    content: (
      <>
        Užsisakykite jau dabar arba skambinkite{" "}
        <span className="text-nowrap">+370 674 17628</span>
      </>
    ),
  },
  {
    name: "Mėgaukitės",
    content: "Mėgaukitės linksmais ir įtraukiančiais žaidimais kartu.",
  },
];

const events = [
  { name: "Vestuvės", image: heroImg },
  { name: "Šeimos Šventės", image: gamesImg },
  { name: "Įmonių Vakarėliai", image: heroImg },
];

const testimonials = [
  {
    name: "Klarisa Mataitienė",
    testimonial:
      "Rekomenduočiau šią kompaniją kiekvienam, kuris ieško naujoviškų, įdomių ir adrenalino kupinų lauko žaidimų. Jų profesionalumas, kokybė ir įdomių nuotykių įprasminimas padarė mane tikru jų fanu ir aš su džiaugsmu grįšiu žaisti vėl.",
  },
  // {
  //   name: "Jūratė Korsakienė",
  //   testimonial:
  //     "Tiek vaikai, tiek suaugusieji iš tikrųjų smagiai ir neįprastai praleido laiką žaisdami šiuos žaidimus. Puikus būdas sušildyti konkurenciją, pakeisti rutiną ir pabėgti nuo kasdienio gyvenimo reikalų. Nerealiai.",
  // },
];

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="mt-4">
        <div className="mb-6">
          <h1 className="mb-2 text-6xl font-bold">Žaidimų Pieva</h1>
          <p className="text-xl">Geriausi lauko žaidimai Jūsų šventei!</p>
        </div>

        <div className="mb-12 flex gap-4">
          <Button size="lg">Žiūrėti Žaidimus</Button>
          <Button size="lg" variant="secondary">
            Kontaktai
          </Button>
        </div>

        <ImageBlob
          src={heroImg}
          alt="Merginos ant žolės, fone matosi 'Žaidimų Pieva' žaidimai."
          borderRadius="35% 65% 42% 58% / 42% 33% 67% 58%"
        />
      </Section>

      <GreenContainer>
        {/* Lawn Games */}
        <Section>
          <H2>Lauko Žaidimų Nuoma</H2>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p>
                Žaidimų Pieva siūlo įvairių lauko žaidimų nuomą Vilniuje ir
                aplink. Skirta įvairioms progoms, gimtadieniams, sporto dienoms
                ar tiesiog smagioms laiko praleidimo akimirkoms su draugais ir
                šeima.
              </p>

              <p>
                Mūsų komandos tikslas - padaryti Jūsų renginį ne tik įsimintinu,
                bet ir visiškai be rūpesčių. Kreipkitės į mus ir mes pasiruošę
                Jums pasiūlyti žaidimus, kuriuos mėgsta ir maži, ir dideli.
              </p>

              <Button className="w-fit" variant="secondary">
                Žiūrėti Žaidimus
              </Button>
            </div>

            <ImageBlob
              src={gamesImg}
              alt="Žaidimai ant pievos"
              borderRadius="56% 44% 41% 59% / 50% 36% 64% 50%"
            />
          </div>
        </Section>

        {/* Process */}
        <Section className="mb-0">
          <H2 className="mb-8 text-center">Tai Labai Paprasta</H2>

          <div className="flex flex-col items-center gap-6">
            {process.map((item, i) => (
              <Fragment key={item.name}>
                <div className="flex flex-col items-center">
                  <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 text-4xl font-bold text-secondary">
                    {i + 1}
                  </div>
                  <p className="text-3xl font-semibold">{item.name}</p>
                  <p className="text-center text-lg">{item.content}</p>
                </div>

                {i !== process.length - 1 && (
                  <Image
                    src={arrowSvg as StaticImport}
                    alt="Rodyklė"
                    className="h-20"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </Section>
      </GreenContainer>

      {/* Game carousel */}
      <Section className="mt-4">
        <H2>Gausus Asortimentas</H2>

        <p className="mb-4">
          Praplėskite savo renginio erdvę su mūsų rankų darbo mediniais lauko
          žaidimais. Visi mūsų žaidimai yra kokybiški, saugūs ir labai smagūs.
          Jie ne tik suteikia džiaugsmo, bet ir skatina kūrybiškumą bei fizinį
          aktyvumą tiek vaikams, tiek suaugusiems.
        </p>

        <GameCarousel />
      </Section>

      {/* Events */}
      <Section>
        <H2>Tinka Visoms Šventėms</H2>

        <div className="flex flex-wrap justify-center gap-4">
          {events.map((event) => (
            <div
              key={event.name}
              className="flex aspect-[2/3] w-full max-w-72 flex-col gap-2"
            >
              <Image
                src={event.image}
                alt={event.name}
                className="h-full min-h-0 flex-shrink rounded-lg object-cover"
              />
              <p className="text-center text-3xl font-semibold">{event.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <GreenContainer>
        {/* Testimonials */}
        <Section>
          <H2>Atsiliepimai</H2>

          <div className="flex flex-wrap justify-center">
            {testimonials.map((t) => (
              <div
                className="relative max-w-80 rounded-lg bg-secondary px-4 py-8"
                key={t.name}
              >
                <BiSolidQuoteAltLeft className="absolute left-0 top-0 -translate-x-3 -translate-y-3 text-4xl text-[#c4f7d6]" />
                <BiSolidQuoteAltRight className="absolute bottom-0 right-0 translate-x-3 translate-y-3 text-4xl text-[#c4f7d6]" />

                <div className="mb-6 flex items-center gap-4">
                  <div className="aspect-square w-16 rounded-full bg-neutral-400"></div>
                  <p className="text-xl font-medium">{t.name}</p>
                </div>

                <p>{t.testimonial}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="mb-0">
          <H2>Susisiekite su mumis</H2>
        </Section>
      </GreenContainer>
    </main>
  );
}

export default HomePage;
