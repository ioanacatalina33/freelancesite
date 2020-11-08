import React from "react";
import { isSM, useWindowSize } from "../../utils/windowsSizeCheck";
import FadeInSection from "../../utils/FadeInSection";
import { websites } from "./myapps";

export default function Portfolio() {
   const windowSize = useWindowSize();

   return (
      <div className="background-color-neutral">
         <div className="separator-transparent-above reverse" />
         <h2 className="padding-medium-top" id="Portfolio">
            Portfolio
         </h2>

         <div className="container-medium padding-medium-top-bottom text-center">
            <FadeInSection direction="bottom">
               <b>My latest websites in React and NodeJs:</b>
               <br />
               <br />

               <div className="portfolio-container flex-div flex-1-1-0 f-wrap f-justify-content-center">
                  {websites.map((website) => (
                     <div
                        className={!isSM(windowSize) ? "" : "flex-column-item"}
                        style={{ margin: "0.2rem" }}
                        key={website.name}
                     >
                        <a target="_blank" rel="noreferrer" href={website.link}>
                           <img
                              src={website.src}
                              alt="Java"
                              className="portfolio-app-picture"
                           />
                        </a>
                        <br />

                        <a target="_blank" rel="noreferrer" href={website.link}>
                           {website.name}{" "}
                        </a>
                     </div>
                  ))}
               </div>
            </FadeInSection>
         </div>

         <div className="separator-transparent-below" />
      </div>
   );
}
