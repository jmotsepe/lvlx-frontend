/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageTitle from "@/components/PageTitle";
import CallToAction from "@/components/CallToAction";

export default function Youth() {
  return (
    <>
      <PageTitle
        title="LVLX Youth"
        desc="Youth loaded by Nxt Lvl Sponsor and available to Nxt Lvl Employers,
          having completed an experiential programme."
      />
      <main className="bg-[#FEFBF6] mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-black p-2 mt-5 px-4 mb-8 underline underline-offset-8 decoration-primary">
          Employer Benefits
        </h1>
        <div className="grid lg:grid-cols-2 border-t-8 border-amber-400 pt-10">
          <div className="text-xl bg-black">
            <ul
              role="list"
              className="marker:text-amber-400 m-20
            list-disc text-white"
            >
              <h1 className="text-2xl font-bold text-amber-400">
                High visibility
              </h1>
              <li className="text-sm mt-5">
                Get maximum exposure to companies looking to hire youth
              </li>
              <h1 className="text-2xl font-bold text-amber-400 mt-10">
                Improved credibility
              </h1>
              <li className="text-sm mt-5">
                The credibility of the platform and its partners extends to its
                candidate
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/career1.png"
              className="object-contain w-full h-full"
              alt="career"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 m-8 border-t-8 border-amber-400 pt-10">
          <div className="order-last lg:order-first">
            <img
              src="/career3.png"
              className="object-contain w-full h-full"
              alt="career"
            />
          </div>
          <div className="text-xl bg-black">
            <ul
              role="list"
              className="marker:text-amber-400 m-20
            list-disc text-white"
            >
              <h1 className="font-bold text-2xl text-amber-400">
                Instant communication
              </h1>
              <li className="text-sm mt-5">
                Get messages from companies looking to hire youth in real-time
              </li>
              <h1 className="font-bold text-2xl text-amber-400 mt-10">
                Reduced possibility of loss of income
              </h1>
              <li className="text-sm mt-5">
                The platform delivers non-retained candidates an opportunity for
                a seamless transition into new employment without months of lost
                income.
              </li>
              <li className="text-sm mt-5">
                There is no fee applicable to the Youth
              </li>
            </ul>
          </div>
        </div>
      </main>

      <CallToAction />
    </>
  );
}
