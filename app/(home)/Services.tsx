/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      <Card className="px-4 py-6 shadow-md shadow-primary">
        <div className="flex gap-4">
          <img
            className="h-16 object-cover w-16 rounded-full border-2 border-primary"
            alt="image"
            src="/sponsor.png"
          />
          <div>
            <h1 className="text-xl font-bold mb-3">Nxt Lvl Sponsor</h1>
            <p className="text-sm">
              Load your best talent obtain your B-BBEE absorption points!
            </p>
            <Link
              href="/sponsor"
              className={buttonVariants({
                className: "font-bold my-4",
              })}
            >
              Learn more
            </Link>
          </div>
        </div>
      </Card>
      <Card className="px-4 py-6 shadow-md shadow-primary">
        <div className="flex gap-4">
          <img
            className="h-16 object-cover w-16 rounded-full border-2 border-primary"
            alt="image"
            src="/employer.png"
          />
          <div>
            <h1 className="text-xl font-bold mb-3">Nxt Lvl Employer</h1>
            <p className="text-sm">
              Make a difference and hire South Africa&apos;s youth to take your
              organization to the Nxt Lvl
            </p>
            <Link
              href="/employer"
              className={buttonVariants({
                className: "font-bold my-4",
              })}
            >
              Learn more
            </Link>
          </div>
        </div>
      </Card>
      <Card className="px-4 py-6 shadow-md shadow-primary">
        <div className="flex gap-4">
          <img
            className="h-16 object-cover w-16 rounded-full border-2 border-primary"
            alt="image"
            src="/youth.png"
          />
          <div>
            <h1 className="text-xl font-bold mb-3">Nxt Lvl Youth</h1>
            <p className="text-sm">
              Youth loaded by Nxt Lvl Sponsor and available to Nxt Lvl
              Employers.
            </p>
            <Link
              href="/youth"
              className={buttonVariants({
                className: "font-bold my-4",
              })}
            >
              Learn more
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
