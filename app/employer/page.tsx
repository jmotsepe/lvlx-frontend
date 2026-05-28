import React from "react";
import { Badge } from "@/components/ui/badge";
import Benefits from "./benefits";
import PageTitle from "@/components/PageTitle";
import CallToAction from "@/components/CallToAction";

const Employer = () => {
  return (
    <>
      <PageTitle
        title="LVLX Employer"
        desc="Organisations looking to hire qualified youth with work experience from well-respected organisations"
      />
      <Benefits />
      <CallToAction />
    </>
  );
};

export default Employer;
