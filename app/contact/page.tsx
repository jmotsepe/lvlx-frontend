import React from "react";
import ContactForm from "./contact-form";
import Contacts from "./contact-info";
import PageTitle from "@/components/PageTitle";

const Contact = () => {
  return (
    <>
      <PageTitle
        title="Contact us"
        desc="You can contact us any way that is convenient for you. We are
            available 24/7 via fax or email."
      />
      <div className="grid md:grid-cols-2 gap-10 p-4 mx-auto max-w-6xl mt-5">
        <Contacts />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
