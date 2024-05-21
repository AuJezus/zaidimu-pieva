import Image from "next/image";
import jengaImg from "../../public/jenga.jpeg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function GameCard() {
  return (
    <div className="relative flex aspect-[2/3] w-full flex-col items-start justify-between overflow-hidden rounded-lg bg-gradient-to-t from-accent to-transparent p-4 text-primary-foreground">
      <Image src={jengaImg} alt="Jenga" fill className="-z-10 object-cover" />

      <Badge>Naujiena!</Badge>

      <div className="grid w-full grid-cols-[auto_1fr] grid-rows-2 items-baseline justify-items-start gap-y-4">
        <p className="text-2xl font-bold">Jenga XXL</p>
        <p className="justify-self-end">40$</p>

        <Button size="sm" className="h-auto py-1">
          Į krepšelį
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="h-auto justify-self-end py-1"
        >
          Daugiau
        </Button>
      </div>
    </div>
  );
}

export default GameCard;
