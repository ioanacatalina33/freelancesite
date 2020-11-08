import SocialMedia from "../common/SocialMedia";
import React from "react";
import Menu from "./Menu";
import { Button } from "react-bootstrap";

export default function Header() {
   function learnMoreScroll() {
      let anchorTarget = document.getElementById("About");
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
      <div className="cover-slide">
         <img
            className="img-avatar avatar-profile-size"
            src={require("../../img/pic0.jpg").default}
         />
         <br />
         <br />
         <h1 id="Top">Ioana Catalina Echim</h1>
         <h4>Software developer</h4>
         <SocialMedia />
         <br />

         <Button
            type="submit"
            className="button-main-outline"
            bsPrefix="button-main"
            style={{ marginTop: "3rem", marginBottom: "4rem" }}
            onClick={learnMoreScroll}
         >
            Learn more
         </Button>

         <Menu />
         <div className="separator-transparent-below" />
      </div>
   );
}
