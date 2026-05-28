import PageTitle from "@/components/PageTitle";
import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import InfoBox from "./InfoBox";
import CallToAction from "@/components/CallToAction";

const Bursaries = () => {
  return (
    <>
      <PageTitle
        title="Bursaries"
        desc="Support a bursary and eliminate financial barriers for students pursuing a tertiary qualification."
      />
      <Hero />
      <Benefits />
      {/* <InfoBox /> */}
      <CallToAction />
    </>
  );
};

export default Bursaries;
