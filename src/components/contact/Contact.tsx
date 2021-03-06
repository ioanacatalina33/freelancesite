import SocialMedia from "../common/SocialMedia";
import React from "react";
import ContactForm from "./ContactForm";
import { ID_CONTACT } from "./../../utils/constants";

export default function Contact() {
   return (
      <div className="footer">
         <div className="separator-transparent-above reverse" />
         <h3 className="padding-medium-top" id={ID_CONTACT}>
            Get in touch
         </h3>
         <div className="container-narrow  padding-left-right padding-medium-top padding-small-bottom">
            <ContactForm />
            <br />
            <br />
            <SocialMedia />
            <br />
            Copyright &#169; Ioana Catalina E.
         </div>
      </div>
   );
}
