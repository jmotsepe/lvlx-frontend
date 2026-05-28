/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Benefits = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="text-3xl font-black p-2 mt-5 px-4 mb-8 underline underline-offset-8 decoration-primary">
        Sponsor Benefits
      </h1>
      <div className="grid lg:grid-cols-2 bg-[#FEFBF6] mb-5">
        <div className="my-auto place-items-center">
          <Accordion
            type="single"
            defaultValue="item-1"
            defaultChecked={true}
            collapsible
            className="p-7"
          >
            <AccordionItem value="item-1 ">
              <AccordionTrigger>
                <div className="flex items-center flex-wrap gap-5">
                  <img
                    src="/absorption points.png"
                    className="object-cover w-8 h-8"
                    alt="points"
                  />
                  <span>B-BBEE Absorption Points</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                5 points for absorption or securing employment for learners
                totaling 5% or more of total employee headcount
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center flex-wrap gap-5">
                  <img
                    src="/economic development points.png"
                    className="object-cover w-8 h-8"
                    alt="sponsor"
                  />
                  <span>B-BBEE Socio-Economic Development Points</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                5 points for spending 1% of NPAT on socio-economic development
                contributions
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center flex-wrap gap-5">
                  <img
                    src="/corporate tax.png"
                    className="object-cover w-8 h-8"
                    alt="tax"
                  />
                  <span>Corporate Tax Deduction</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                On amounts spent with Public Benefit Organisations (PBO’s) not
                exceeding 5% of taxable income
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center flex-wrap gap-5">
                  <img
                    src="/catalys badge.png"
                    className="object-cover w-8 h-8"
                    alt="tax"
                  />
                  <span>Change Catalyst Badge</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Receive a Change Catalyst Badge from lvlXYouth to proudly
                display on the company website
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <img
            src="/sponsors.png"
            className="object-cover w-full h-full"
            alt="sponsor"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
