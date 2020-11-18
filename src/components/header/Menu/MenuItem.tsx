import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import scrollTo from "../../../utils/scrollTo";

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
   const [anchorTarget, setAnchorTarget] = useState<null | string>(null);

   /*
    * When the component mounts and/or updates, set our AnchorTarget based
    * on the itemName
    */
   useEffect(() => {
      setAnchorTarget(itemName);
   }, [itemName]);

   const handleClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) => {
      event.preventDefault();
      if (anchorTarget !== null) scrollTo(anchorTarget);
   };

   return (
      <Nav.Link
         href={`#${itemName}`}
         onClick={handleClick}
         eventKey={eventKey}
         style={{ color: !active ? "#eaeaea" : "#59b3e7" }}
      >
         {itemName}
      </Nav.Link>
   );
};

export default MenuItem;
