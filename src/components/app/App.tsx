import Header from "../header";
import React from "react";
import About from "../about";
import Resume from "../resume";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Contact from "../contact";
import Testimonials from "../testimonials";

export default function App() {
   return (
      <>
         <Header />
         <About />
         <Resume />
         <Skills />
         <Portfolio />
         <Testimonials />
         <Contact />
      </>
   );
}
