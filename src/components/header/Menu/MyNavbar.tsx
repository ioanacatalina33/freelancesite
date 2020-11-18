import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import useScoll from "../../../utils/useScroll";
import MenuItem from "./MenuItem";
import {
   ID_ABOUT,
   ID_CONTACT,
   ID_PORTFOLIO,
   ID_RESUME,
   ID_TESTIMONIALS,
} from "../../../utils/constants";
import { ID_NAVBAR } from "./../../../utils/constants";

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'Top' generically references the top of the page
 */
let menuItems = {
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
   const [activeItem, setActiveItem] = useState<string | null>("");
   const scrollY = useScoll();

   useEffect(() => {
      getAnchorPoints();
   }, []);

   useEffect(() => {
      handleScroll();
   }, [scrollY]);

   /*
    * Programmatically determine where to set AnchorPoints for our Menu
    */
   const getAnchorPoints = () => {
      const curScroll = window.scrollY - 150;
      for (const key in menuItems) {
         let element = document.getElementById(key);
         if (element !== null) {
            menuItems[key] = element.getBoundingClientRect().top + curScroll;
            if (key === ID_CONTACT && menuItems[key] !== null) {
               menuItems[key] = menuItems[key]! - 250;
            }
         } else {
            menuItems[key] = -1;
         }
      }
      handleScroll();
   };

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

      for (const key in menuItems) {
         let keyPosition = menuItems[key];
         if (keyPosition !== null && keyPosition !== -1) {
            curSection = keyPosition >= curPos ? curSection : key;
            if (curSection !== key) {
               break;
            }
         }
      }
      if (curSection !== activeItem && curSection !== null) {
         setActiveItem(curSection);
      }
   }

   return (
      <Navbar collapseOnSelect id={ID_NAVBAR} expand="lg" className={className}>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
               <MenuItem
                  itemName={ID_ABOUT}
                  active={activeItem === ID_ABOUT}
                  eventKey="1"
               />
               <MenuItem
                  itemName={ID_RESUME}
                  active={activeItem === ID_RESUME}
                  eventKey="2"
               />
               <MenuItem
                  itemName={ID_PORTFOLIO}
                  active={activeItem === ID_PORTFOLIO}
                  eventKey="3"
               />
               <MenuItem
                  itemName={ID_TESTIMONIALS}
                  active={activeItem === ID_TESTIMONIALS}
                  eventKey="4"
               />
               <MenuItem
                  itemName={ID_CONTACT}
                  active={activeItem === ID_CONTACT}
                  eventKey="5"
               />
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
