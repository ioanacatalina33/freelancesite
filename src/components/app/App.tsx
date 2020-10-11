import React from "react";
import Main from "../Main";
import MyImage from "../../img/pic1.jpg";

export default function App() {
   return (
      <div>
         Hello World! Trying to see if this works. Awesome!
         <br />
         And we&apos;re adding an image:
         <img src={require("../../img/pic1.jpg").default} />
         <img src={MyImage} />
         <br />
         and some other container <br />
         <Main />
      </div>
   );
}
