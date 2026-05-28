"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { sendDataDeletionRequest } from "@/lib/requestData";

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    accountEmail: "",
    removalReason: "",
  });

  const [loading, setLoading] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    setLoading(true);

    try {
      sendDataDeletionRequest(formData);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="grid grid-cols-2 gap-5">
        <Input
          placeholder="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Account email"
          className="col-span-2"
          name="accountEmail"
          value={formData.accountEmail}
          onChange={handleInputChange}
        />
        <Textarea
          placeholder="Reason for data removal"
          className="col-span-2"
          name="removalReason"
          value={formData.removalReason}
          onChange={handleInputChange}
        />
        <Button disabled={loading} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
