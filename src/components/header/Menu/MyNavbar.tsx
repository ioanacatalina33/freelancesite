import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import useScoll from "../../../utils/useScroll";
import MenuItem from "./MenuItem";

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'Top' generically references the top of the page
 */
const menuItems = {
   Top: 0,
   About: null,
   Resume: null,
   Portfolio: null,
   Testimonials: null,
   Contact: null,
} as {
   [key: string]: number | null;
};

export default function MyNavbar({ className }: { className: string }) {
   /*
    * Store the active menuItem in state to force update
    * when changed
    */
   const [activeItem, setActiveItem] = useState<string | null>("Top");

   /*
    * The MutationObserver allows us to watch for a few different
    * events, including page resizing when new elements might be
    * added to the page (potentially changing the location of our
    * anchor points)
    * We also listen to the scroll event in order to update based
    * on our user's scroll depth
    */
   useEffect(() => {
      // const observer = new MutationObserver(getAnchorPoints);
      // observer.observe(document.getElementById("root")!, {
      //    childList: true,
      //    subtree: true,
      // });
      getAnchorPoints();
   }, []);

   /*
    * Programmatically determine where to set AnchorPoints for our Menu
    */
   const getAnchorPoints = () => {
      const curScroll = window.scrollY - 150;
      // const viewPortHeight = Math.max(
      //    document.documentElement.clientHeight,
      //    window.innerHeight || 0
      // );
      for (const key in menuItems) {
         menuItems[key] =
            document.getElementById(key)!.getBoundingClientRect().top +
            curScroll;
         if (key === "Contact" && menuItems[key] !== null) {
            menuItems[key] = menuItems[key]! - 250;
         }
      }
      //const bottom = document.body.offsetHeight;
      handleScroll();
   };

   /*
    * Determine which section the user is viewing, based on their scroll-depth
    * Locating the active section allows us to update our MenuItems to show which
    * item is currently active
    */

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   function handleScroll() {
      const curPos = window.scrollY;
      let curSection = null;

      /*
       * Iterate through our sections object to find which section matches with
       * the current scrollDepth of the user.
       * NOTE: This code assumes that the sections object is built with an 'ordered'
       * list of sections, with the lowest depth (top) section first and greatest
       * depth (bottom) section last
       * If your items are out-of-order, this code will not function correctly
       */

      for (const section in menuItems) {
         curSection = menuItems[section]! >= curPos ? curSection : section;
         if (curSection !== section) {
            break;
         }
      }
      if (curSection !== activeItem) {
         setActiveItem(curSection);
      }
   }

   return (
      <Navbar collapseOnSelect id="myNavbar" expand="lg" className={className}>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <MenuItem
                  itemName="About"
                  active={activeItem === "About"}
                  eventKey="1"
               />
               <MenuItem
                  itemName="Resume"
                  active={activeItem === "Resume"}
                  eventKey="2"
               />
               <MenuItem
                  itemName="Portfolio"
                  active={activeItem === "Portfolio"}
                  eventKey="3"
               />
               <MenuItem
                  itemName="Testimonials"
                  active={activeItem === "Testimonials"}
                  eventKey="4"
               />
               <MenuItem
                  itemName="Contact"
                  active={activeItem === "Contact"}
                  eventKey="5"
               />
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
