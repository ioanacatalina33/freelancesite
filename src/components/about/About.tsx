import React from "react";
import FadeInSection from "../../utils/FadeInSection";
import { useWindowSize, isSM, isLG } from "../../utils/windowsSizeCheck";

export default function About() {
   const windowSize = useWindowSize();

   function contactScroll() {
      let anchorTarget = document.getElementById("Contact");
      if (anchorTarget !== null) {
         var headerOffset = 80;
         var elementPosition =
            anchorTarget.getBoundingClientRect().top + window.pageYOffset;
         var offsetPosition = elementPosition - headerOffset;

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
         });
      }
   }

   return (
      <div className="background-color">
         <h2 className="padding-medium-top" id="About">
            About me
         </h2>
         <div
            className="container-narrow padding-left-right padding-small-bottom padding-medium-top"
            style={{ position: "relative" }}
         >
            <FadeInSection direction="left">
               <div className="flex-div f-align-items-center f-justify-content-center f-wrap">
                  <div className="flex-column-sm-row">
                     <img
                        src={require("../../img/pic4.jpg").default}
                        style={{
                           maxWidth: "25rem",
                           width: "100%",
                           height: "auto",
                           marginRight: isSM(windowSize) ? "1rem" : "0rem",
                        }}
                     />
                  </div>
                  <div
                     className={
                        "flex-column-sm-row box-dialog " +
                        (isLG(windowSize) ? "arrow-left" : "arrow-top")
                     }
                  >
                     Hi, I&apos;m Ioana! I&apos;ve started my IT career 7 years
                     ago. Besides working as a Java and Android developer, I
                     discovered a big interest in Front-End Development and Web
                     Design. My creative and artistic side, passion, and
                     curiosity have also helped me in my engineering work.
                     Currently, I am seeking a long term contract to work on
                     exciting projects and improve my React/JavaScript skills.
                     If you wish to contact me, feel free to{" "}
                     <span
                        className="span-link"
                        onClick={() => contactScroll()}
                     >
                        send me a message
                     </span>
                     .
                  </div>
               </div>
            </FadeInSection>
         </div>
         <div className="separator-transparent-below" />
      </div>
   );
}
