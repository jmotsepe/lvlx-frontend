/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-[url('/auth-bg.png')] bg-no-repeat bg-cover bg-black/80 bg-blend-darken text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto max-w-7xl px-4 py-20">
        <div>
          <Badge>
            <span className="capitalize text-black">Welcome to LVLX</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl capitalize lg:text-6xl font-black my-4 leading-10">
            We are passionate about <span className="text-primary">youth</span>{" "}
            employment.{" "}
          </h1>
          <br />
          <p>
            Our platform connects the South African youth who have completed a
            year of experiential learning with employment opportunities.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "px-24 bg-white hover:bg-gray-50 mt-10 py-5 text-black"
            )}
          >
            Talk to us
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
