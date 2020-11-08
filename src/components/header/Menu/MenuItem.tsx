import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";

/*
 * A single menu item
 * I deconstruct props to provide more readable code, allowing
 * any future coders to see exactly what props are expected
 */
const MenuItem = ({
   itemName,
   active,
   eventKey,
}: {
   itemName: string;
   active: boolean;
   eventKey: string;
}) => {
   /*
    * Store our anchorTarget in state
    * We do not set it here, preferring to wait for after the component
    * is mounted to avoid any errors
    */
   const [anchorTarget, setAnchorTarget] = useState<null | HTMLElement>(null);

   /*
    * When the component mounts and/or updates, set our AnchorTarget based
    * on the itemName
    */
   useEffect(() => {
      setAnchorTarget(document.getElementById(itemName));
   }, [itemName]);

   /*
    * Where all the magic happens -- scrollIntoView on click
    */
   const handleClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) => {
      event.preventDefault();
      if (anchorTarget !== null) {
         var headerOffset = 80;
         var elementPosition =
            anchorTarget.getBoundingClientRect().top + window.pageYOffset;
         var offsetPosition = elementPosition - headerOffset;

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
         });
         // anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   };

   /*
    * Return the MenuItem as JSX
    * Remember to set your ariaLabel for accessability!
    */
   return (
      <Nav.Link
         href={`#${itemName}`}
         onClick={handleClick}
         eventKey={eventKey}
         // className={active ? "link-on" : "link-off"}
         style={{ color: !active ? "#eaeaea" : "#59b3e7" }}
      >
         {itemName}
      </Nav.Link>
   );
};

export default MenuItem;
