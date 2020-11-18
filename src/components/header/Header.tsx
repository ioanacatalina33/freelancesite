import SocialMedia from "../common/SocialMedia";
import React from "react";
import Menu from "./Menu";
import { Button } from "react-bootstrap";
import scrollTo from "./../../utils/scrollTo";
import { ID_ABOUT, ID_TOP } from "./../../utils/constants";

export default function Header() {
   function learnMoreScroll() {
      scrollTo(ID_ABOUT);
   }

   return (
      <div className="cover-slide">
         <img
            className="img-avatar avatar-profile-size"
            src={require("../../img/pic0.jpg").default}
         />
         <br />
         <br />
         <h1 id={ID_TOP}>Ioana Catalina Echim</h1>
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
