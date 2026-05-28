import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="w-full mx-auto py-10 bg-gray-900">
      <div className="p-6">
        <div className="mx-auto w-full max-w-7xl px-5 rounded-xl py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-bold underline text-white text-sm underline-offset-8">
                Want to know more?
              </h2>
              <h1 className="text-white mt-4 font-black text-4xl lg:text-5xl">
                We are always{" "}
                <span className="text-primary">ready to listen</span> and help.
              </h1>
              <p className="mt-8 mb-3 text-white font-light">
                Don&apos;t hesitate! Take the first step towards discovering
                more about us and the ways in which we can support you.
              </p>
              <br />
              <br />
              <Link
                href="/contact"
                className="px-12 py-4 bg-black text-white font-bold"
              >
                Talk to us
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/star.png" className="rounded-2xl mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
