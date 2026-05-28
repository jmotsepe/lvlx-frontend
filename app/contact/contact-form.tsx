"use client";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/sendMail";

const formSchema = z.object({
  fullname: z.string().min(3, {
    message: "Please enter your fullname",
  }),
  email: z
    .string()
    .min(4, {
      message: "Please enter your email address",
    })
    .email({ message: "Please enter a valid email address" }),
  message: z.string().min(5),
});

const ContactForm = () => {
  //
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      await sendEmail(values);
      setError("");
      setMessage("Message sent successfully");
    } catch (error) {
      console.log("error", error);
      setError("Message failed to send");
      setMessage("");
    } finally {
      form.reset();
      setLoading(false);
    }
  }

  return (
    <div className="">
      {message && (
        <div className="mb-4 py-2 px-4 bg-emerald-600 text-white font-bold">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-4 py-2 px-4 bg-red-600 text-white font-bold">
          {error}
        </div>
      )}
      <div>
        <h4 className="mb-4 text-3xl font-bold">Send us an email</h4>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full name."
                      {...field}
                      disabled={loading}
                      className="border-b-2 bg-[#FFFCF5] border-l-0 border-t-0 border-r-0"
                    />
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
                  <FormControl>
                    <Input
                      placeholder="Email Address."
                      {...field}
                      disabled={loading}
                      className="border-b-2 bg-[#FFFCF5] border-l-0 border-t-0 border-r-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Message."
                      {...field}
                      disabled={loading}
                      className="border-b-2 bg-[#FFFCF5] border-l-0 border-t-0 border-r-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
