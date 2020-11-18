import React from "react";
import FadeInSection from "../../utils/FadeInSection";
import { logos, learning } from "./logos";

export default function Skills() {
   return (
      <div className="background-color ">
         <h2 className="padding-medium-top">Technologies and tools</h2>
         <div className="container-narrow text-center padding-left-right padding-medium-top-bottom">
            {/* Technologies and tools I&apos;ve been using over the years: */}
            <FadeInSection direction="bottom">
               <b>What I&apos;ve been using over the years:</b>
               <br />
               <br />
               <div className="container-one-column flex-div flex-1-1-0 f-wrap f-justify-content-center">
                  {logos.map((logo) => (
                     <div
                        key={logo.name}
                        className="flex-column-item "
                        style={{ margin: "0.2rem" }}
                     >
                        <img
                           src={logo.src}
                           alt={logo.name}
                           className="skills-logos"
                        />
                        <br />
                        {logo.name}
                     </div>
                  ))}
               </div>
            </FadeInSection>
            <br />
            <br />
            {/* Technologies I&apos;m currently learning and working with: */}
            <FadeInSection direction="bottom">
               <b>What I&apos;m currently learning:</b>
               <br />
               <div className="container-one-column flex-div flex-1-1-0 f-wrap f-justify-content-center">
                  {learning.map((logo) => (
                     <div key={logo.name} className="flex-column-item ">
                        <img
                           src={logo.src}
                           alt={logo.name}
                           className="skills-logos"
                        />
                        <br />
                        {logo.name}
                     </div>
                  ))}
               </div>
            </FadeInSection>
         </div>
      </div>
   );
}
