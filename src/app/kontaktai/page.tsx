import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import ContactForm from "~/components/contact-form";
import Heading from "~/components/heading";
import Section from "~/components/section";
import { getContactImage, getSiteInfo } from "~/server/queries";

export const metadata = {
  title: "Kontaktai",
  description:
    "Nedvejodami susisiekite su mumis, jei turite klausimų ar rūpesčių.",
};

async function ContactPage() {
  const contactImage = await getContactImage();
  const siteInfo = await getSiteInfo();

  return (
    <Section>
      <Heading level="h1">Kontaktai</Heading>

      <p className="mb-6 text-lg">
        Nedvejodami susisiekite su mumis, jei turite klausimų ar rūpesčių.
        Galite naudoti formą mūsų svetainėje arba atsiųsti mums tiesiogiai el.
        laišką. Dėkojame už jūsų susidomėjimą ir laukiame jūsų žinučių.
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-8 gap-y-4">
        <p>
          <span className="text-xl font-bold">Telefono numeris: </span>
          {siteInfo.telefonas}
        </p>

        <p>
          <span className="text-xl font-bold">El.paštas: </span>
          {siteInfo.email}
        </p>

        <div className="flex items-center gap-4 text-3xl">
          <a href={siteInfo.instagramLink}>
            <BiLogoInstagram />
          </a>

          <a href={siteInfo.facebookLink}>
            <BiLogoFacebookCircle />
          </a>
        </div>
      </div>

      <ContactForm image={contactImage} />
    </Section>
  );
}

export default ContactPage;
