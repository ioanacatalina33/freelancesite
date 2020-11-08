import React, { useEffect, useState } from "react";
import useScoll from "../../../utils/useScroll";
import MyNavbar from "./MyNavbar";

export default function Menu() {
   const [sticky, setSticky] = useState(false);
   let scrollY = useScoll();

   const didScroll = () => {
      if (
         document.getElementById("myNavbar")!.getBoundingClientRect().bottom <=
            0 &&
         !sticky
      ) {
         setSticky(true);
      } else if (
         document.getElementById("myNavbar")!.getBoundingClientRect().top > 0
      ) {
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
