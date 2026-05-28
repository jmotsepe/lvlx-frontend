/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const Benefits = () => {
  return (
    <div className="py-10 mx-auto max-w-7xl px-4">
      <h1 className="text-3xl font-black p-2 px-4 mb-8 underline underline-offset-8 decoration-primary">
        Employer Benefits
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-6">
        <Card className="drop-shadow-md">
          <div className="relative parent">
            <div className="absolute top-0 left-0 circle bg-[#030712] text-[#fcb415] rounded font-bold p-2 text-xl">
              1
            </div>
            <CardHeader>
              <CardTitle className="pl-4 ">No hiring fees</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Only a nominal fee to gain access to communication channels with
                candidates.
                <div className="font-bold text-sm">
                  ONLY R75 TO VIEW AND DOWNLOAD A CV
                </div>
              </p>
            </CardContent>
            <CardFooter className="border-t">
              <img
                src="/money.jpg"
                width="200px"
                className="mx-auto mt-2"
                alt="money"
              />
            </CardFooter>
          </div>
        </Card>
        <Card className="drop-shadow-md">
          <div className="relative parent">
            <div className="absolute top-0 left-0 circle bg-[#030712] text-[#fcb415] rounded font-bold p-2 text-xl">
              2
            </div>
            <CardHeader>
              <CardTitle className="pl-4">Work ready youth</CardTitle>
            </CardHeader>
            <CardContent className="mb-10">
              <p>
                All candidates on the platform have completed at least 1 year of
                work experience
              </p>
            </CardContent>
            <CardFooter className="border-t">
              <img
                src="/experience.jpg"
                width="150px"
                className="mx-auto mt-2"
                alt="experience"
              />
            </CardFooter>
          </div>
        </Card>
        <Card className="drop-shadow-md">
          <div className="relative parent">
            <div className="absolute top-0 left-0 circle bg-[#030712] text-[#fcb415] rounded font-bold p-2 text-xl">
              3
            </div>
            <CardHeader>
              <CardTitle className="pl-4">Trained youths</CardTitle>
            </CardHeader>
            <CardContent className="mb-10">
              <p>
                All candidates on the platform have been trained by some of
                South Africa’s most well-respected companies
              </p>
            </CardContent>
            <CardFooter className="border-t">
              <img
                src="/work-ready-youth.jpg"
                width="250px"
                className="mx-auto mt-2"
                alt="img"
              />
            </CardFooter>
          </div>
        </Card>
        <Card className="drop-shadow-md">
          <div className="relative parent">
            <div className="absolute top-0 left-0 circle bg-[#030712] text-[#fcb415] rounded font-bold p-2 text-xl">
              4
            </div>
            <CardHeader>
              <CardTitle className="pl-4">
                Immediate interview availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                View candidate interview availability in real-time and schedule
                interviews directly from within the platform
              </p>
            </CardContent>
            <CardFooter className="border-t">
              <img
                src="/interview.jpg"
                width="150px"
                className="mx-auto mt-2"
                alt="img"
              />
            </CardFooter>
          </div>
        </Card>

        <Card className="drop-shadow-md">
          <div className="relative parent">
            <div className="absolute top-0 left-0 circle bg-[#030712] text-[#fcb415] rounded font-bold p-2 text-xl">
              5
            </div>
            <CardHeader>
              <CardTitle className="pl-4">Change Catalyst Badge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Receive a Change Catalyst Badge from lvlXYouth to proudly
                display on the company website
              </p>
            </CardContent>
            <CardFooter className="border-t">
              <img
                src="/badge.png"
                width="120px"
                className="mx-auto mt-6"
                alt="badge"
              />
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Benefits;
