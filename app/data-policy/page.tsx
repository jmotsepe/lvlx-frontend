import PageTitle from "@/components/PageTitle";
import React from "react";
import Form from "./Form";

const DataPolicy = () => {
  return (
    <>
      <PageTitle
        title="Data Removal"
        desc="Send a request for us to delete your personal data from our servers."
      />
      <Form />
    </>
  );
};

export default DataPolicy;
