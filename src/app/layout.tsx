import "~/styles/globals.css";

import { Nunito } from "next/font/google";

import { cn } from "~/lib/utils";
import Image from "next/image";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import Link from "next/link";
import Nav from "~/components/nav";
import { getSiteInfo } from "~/server/queries";

import logoImg from "../../public/logo.png";
import { client } from "~/lib/contentful/utils";
import type { TypeNotificationSkeleton } from "~/lib/contentful/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Toaster } from "sonner";

const nunitoFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Žaidimų Pieva",
  description: "Geriausi lauko žaidimai Jūsų šventei!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteInfo = await getSiteInfo();

  const {
    fields: { message: notification },
  } = await client.getEntry<TypeNotificationSkeleton>("3EWhGHl0pheq8ExTxzc3iW");

  return (
    <html
      lang="en"
      className={cn(
        "bg-background font-sans text-foreground antialiased",
        nunitoFont.variable,
      )}
    >
      <body className="flex min-h-screen flex-col">
        {notification && (
          <div className="prose prose-a:font-bold prose-a:text-accent max-w-full bg-primary p-2 text-center text-primary-foreground">
            {documentToReactComponents(notification)}
          </div>
        )}

        <Nav />

        {children}

        <footer className="mt-auto flex flex-wrap items-center justify-between gap-4 p-2 px-2 md:px-8 md:py-4">
          <div className="flex items-center md:order-1">
            <Image
              src={logoImg}
              alt='"Žaidimų pieva" logotipas'
              className="h-10 w-10"
            />
            <p className="-mb-1 text-xl font-bold">Žaidimų Pieva</p>
          </div>

          <div className="flex justify-end gap-6 md:order-3">
            <a href={siteInfo.instagramLink}>
              <BiLogoInstagram className="text-3xl" />
            </a>
            <a href={siteInfo.facebookLink}>
              <BiLogoFacebookCircle className="text-3xl" />
            </a>
          </div>

          <ul className="mx-auto flex items-center justify-between gap-6 font-bold md:order-2 md:gap-20">
            <li>
              <Link href="/">Pagrindinis</Link>
            </li>
            <li>
              <Link href="/zaidimai">Žaidimai</Link>
            </li>
            <li>
              <Link href="/kontaktai">Kontaktai</Link>
            </li>
          </ul>
        </footer>

        <Toaster richColors />
      </body>
    </html>
  );
}
