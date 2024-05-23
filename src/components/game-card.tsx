import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

import jengaImg from "../../public/jenga.jpeg";

function GameCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden rounded-lg border-4 bg-gradient-to-t from-accent to-transparent p-4 text-primary-foreground",
        className,
      )}
      {...props}
    >
      <Image src={jengaImg} alt="Jenga" fill className="-z-10 object-cover" />

      <Badge className="w-fit">Naujiena!</Badge>

      <div>
        <div className="mb-3 flex w-full justify-between gap-4">
          <p className="text-2xl font-bold">Jenga XXL</p>
          <p className="justify-self-end">40$</p>
        </div>

        <div className="flex items-center justify-between">
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
    </div>
  );
}

export default GameCard;
