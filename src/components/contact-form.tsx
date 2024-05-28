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

import contactImage from "../../public/section-images/hero.jpg";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string(),
});

function ContactForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div
      className={cn("flex flex-col items-center gap-8 lg:flex-row", className)}
      {...props}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
      {/* <ImageBlob
        className="mx-auto w-full min-w-0 max-w-96 shrink"
        borderRadius="61% 39% 42% 58% / 33% 47% 53% 67% "
        src={contactImage}
        alt="Cool iamge"
      /> */}
    </div>
  );
}

export default ContactForm;
