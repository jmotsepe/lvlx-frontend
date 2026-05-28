import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import PageTitle from "@/components/PageTitle";
import CallToAction from "@/components/CallToAction";

const Sponsor = () => {
  return (
    <>
      <PageTitle
        title="LVLX Sponsor"
        desc="Organisations who load their learners / interns/ experiential learning candidates onto the platform"
      />
      <Benefits />
      <CallToAction />
    </>
  );
};

export default Sponsor;
