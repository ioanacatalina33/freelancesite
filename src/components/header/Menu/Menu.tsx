import React, { useEffect, useState } from "react";
import useScoll from "../../../utils/useScroll";
import MyNavbar from "./MyNavbar";
import { ID_NAVBAR } from "./../../../utils/constants";

export default function Menu() {
   const [sticky, setSticky] = useState(false);
   let scrollY = useScoll();

   const didScroll = () => {
      let element = document.getElementById(ID_NAVBAR);
      if (element && element.getBoundingClientRect().bottom <= 0 && !sticky) {
         setSticky(true);
      } else if (element && element.getBoundingClientRect().top > 0) {
         setSticky(false);
      }
   };

   useEffect(() => {
      didScroll();
   }, [scrollY]);

   return (
      <>
         <MyNavbar className="navbar" />
         {sticky && (
            <MyNavbar className={sticky ? "navbar navbar-sticky" : "navbar"} />
         )}
      </>
   );
}
