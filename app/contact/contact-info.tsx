import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import React from "react";

const Contacts = () => {
  return (
    <div className="grid grid-rows-2">
      <h4 className="font-bold text-3xl mb-1">Contacts</h4>
      <div className="flex items-center space-x-3">
        <GrMail />
        <a href="mailto:info@lvlxyouth.org" className="text-black no-underline">
          info@lvlxyouth.org
        </a>
      </div>
      <a href="tel:+27118848010" className="flex items-center space-x-3">
        <FaPhoneAlt />
        <span>+27 11 884 8010</span>
      </a>

      <h4 className="font-bold text-3xl mt-8 mb-1">Based in</h4>
      <div className="flex items-center mb-1">
        <IoLocation className="w-6 h-16 mr-2" />
        <span>135 Patricia Road, Sandown, Gauteng, 2196</span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.812550970407!2d28.06690757405864!3d-26.105036959939994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9572d4ea21e965%3A0xdfd5eff315213d10!2s135%20Patricia%20Rd%2C%20Sandown%2C%20Sandton%2C%202196!5e0!3m2!1sen!2sza!4v1696919648684!5m2!1sen!2sza"
        height="150"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border drop-shadow-md w-full mb-2"
      ></iframe>
    </div>
  );
};

export default Contacts;
