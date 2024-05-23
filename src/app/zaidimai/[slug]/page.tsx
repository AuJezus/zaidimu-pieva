import Heading from "~/components/heading";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";

import jengaImg from "../../../../public/jenga.jpeg";
import Image from "next/image";
import { Calendar } from "~/components/ui/calendar";
import { Badge } from "~/components/ui/badge";

function GamePage() {
  return (
    <Section className="flex grid-cols-2 grid-rows-[auto_auto_auto] flex-wrap lg:grid lg:items-center lg:gap-x-16">
      <div className="mb-4 text-lg lg:order-1 lg:mb-0 lg:self-end">
        <Badge className="mb-2">Naujiena!</Badge>
        <Heading level="h2">Jenga XXL</Heading>
        <p>
          Pastatyk bokštą jo nenugriaudamas. Jei visiems pavyks tai padaryti dar
          viena ranka - jūs tikrai šaunūs! Žaidimą gali žaisti 2-10 žaidėjų
          vienu metu, kuriuos visus sujungs azartas, užgniaužtas kvapas ir
          draugystė.
        </p>
      </div>

      <div className="mb-4 grid w-full grid-cols-2 items-center sm:flex sm:gap-16 lg:order-3 lg:mb-0">
        <Button size="lg" className="w-fit">
          Į krepšelį
        </Button>
        <p className="text-center text-xl font-bold sm:text-left">40€</p>
      </div>

      <div className="mb-4 w-full self-start sm:w-fit lg:order-4 lg:mb-0">
        <p className="text-xl font-bold">Užimtumas:</p>
        <Calendar className="mx-auto w-fit rounded-md border" />
      </div>

      <Image
        src={jengaImg}
        alt="Jenga"
        className="mx-auto min-w-0 max-w-96 shrink rounded-lg sm:w-1/2 lg:order-2 lg:row-span-3 lg:w-full lg:max-w-lg"
      />
    </Section>
  );
}

export default GamePage;
