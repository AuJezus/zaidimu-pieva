"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "./ui/textarea";
import ImageBlob from "./image-blob";
import { cn } from "~/lib/utils";
import { type Asset } from "contentful";
import useWeb3forms from "@web3forms/react";
import { toast } from "sonner";
import { env } from "~/env";

const formSchema = z.object({
  name: z
    .string({ message: "Privalomas laukas" })
    .min(3, { message: "Vardo laukas turi būti ilgesnis, nei 3 raidės." })
    .max(50, {
      message: "Vardas laukas negali būti ilgesnis, nei 50 raidžių.",
    }),
  email: z
    .string({ message: "Privalomas laukas" })
    .email({ message: "Netinkamas El. Paštas" }),
  message: z
    .string({ message: "Privalomas laukas" })
    .min(10, { message: "Žinutės laukas turi būti ilgesnis, nei 10 raidžių." })
    .max(1000, {
      message: "Žinutės laukas negali būti ilgesnis, nei 1000 raidžių.",
    }),
});

function ContactForm({
  image,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  image?: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { submit } = useWeb3forms<z.infer<typeof formSchema>>({
    access_key: env.NEXT_PUBLIC_WEB3FORMS_KEY,
    settings: {
      from_name: "Žaidimų Pieva",
      subject: "Nauja žinutė iš žaidimupieva.lt",
    },
    onSuccess: (successMessage, data) => {
      toast.success("Sėkmingai gavome jūsų žinutę.");
      form.reset();
    },
    onError: (errorMessage, data) => {
      toast.error(`Nepavyko išsiųsti jūsų žinutės, bandykite vėliau.`);
    },
  });

  return (
    <div
      className={cn("flex flex-col items-center gap-8 lg:flex-row", className)}
      {...props}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="grid w-full max-w-lg gap-4 md:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Jūsų Vardas</FormLabel>
                <FormControl>
                  <Input placeholder="Vardenis Pavardenis" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">El. Paštas</FormLabel>
                <FormControl>
                  <Input placeholder="elektroninis@pastas.lt" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-lg">Žinutė</FormLabel>
                <FormControl>
                  <Textarea rows={6} placeholder="..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="sm:mx-auto md:col-span-2">
            Siųsti žinutę
          </Button>
        </form>
      </Form>
      {image && (
        <ImageBlob
          asset={image}
          className="mx-auto w-full min-w-0 max-w-96 shrink"
          borderRadius="61% 39% 42% 58% / 33% 47% 53% 67% "
        />
      )}
    </div>
  );
}

export default ContactForm;
