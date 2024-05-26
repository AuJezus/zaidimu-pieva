"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { cn } from "~/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import useScrollUp from "~/lib/hooks/use-scroll-up";
import Link from "next/link";

import logoImg from "../../public/logo.png";

const links = [
  { name: "Pagrindinis", url: "/" },
  { name: "Žaidimai", url: "/zaidimai" },
  { name: "Kontaktai", url: "/kontaktai" },
];

function Nav() {
  const isUp = useScrollUp();

  return (
    <div
      className={cn(
        "sticky top-0 z-30 mb-8 -translate-y-[101%] bg-background transition-transform duration-500",
        isUp && "translate-y-0",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-screen-2xl items-center justify-between p-4 lg:px-8 xl:px-12",
        )}
      >
        <div className="w-full">
          <Image
            src={logoImg}
            alt='"Žaidimų pieva" logotipas'
            className="h-12 min-w-0 max-w-12 shrink"
          />
        </div>

        <ul className="hidden gap-20 md:flex">
          <NavLinks className="text-xl font-bold" />
        </ul>

        <div className="flex w-full items-center justify-end gap-6">
          <ShoppingCartIcon className="h-10 w-10 md:h-8 md:w-8" />
          <MobileDrawer />
        </div>
      </nav>
    </div>
  );
}

function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild>
        <MenuIcon className="h-10 w-10 md:hidden" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="!text-center">
          <div className="flex items-center justify-center gap-4">
            <Image
              src={logoImg}
              alt='"Žaidimų pieva" logotipas'
              className="h-10 w-10"
            />
            <p className="-mb-1 text-2xl font-bold">Žaidimų Pieva</p>
          </div>

          <DrawerDescription className="text-lg">
            <p>Geriausi lauko žaidimai Jūsų šventei!</p>
          </DrawerDescription>
        </DrawerHeader>

        <ul className="mx-auto my-auto flex flex-col gap-12 text-3xl font-semibold">
          <NavLinks onClick={() => setOpen(false)} />
        </ul>

        <DrawerFooter>
          <div className="flex flex-wrap justify-center gap-8">
            <BiLogoInstagram className="text-4xl" />
            <BiLogoFacebookCircle className="text-4xl" />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function NavLinks({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <>
      {links.map((link) => (
        <li key={link.url} onClick={onClick} className={className}>
          <Link className="hover:underline" href={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default Nav;
