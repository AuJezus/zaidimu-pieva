import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import ContactForm from "~/components/contact-form";
import Heading from "~/components/heading";
import Section from "~/components/section";

function ContactPage() {
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
          <span className="text-xl font-bold">Telefono numeris: </span>+370 674
          17892
        </p>

        <p>
          <span className="text-xl font-bold">El.paštas: </span>
          info@zaidimupieva.lt
        </p>

        <div className="flex items-center gap-4 text-3xl">
          <a href="instagram.com">
            <BiLogoInstagram />
          </a>

          <a href="facebook.com">
            <BiLogoFacebookCircle />
          </a>
        </div>
      </div>

      <ContactForm />
    </Section>
  );
}

export default ContactPage;
