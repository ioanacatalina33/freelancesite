import lauraSebu from "../../img/profile_laura.jpg";
import benjaminH from "../../img/profile_benjaminH.jpg";
import alessandro from "../../img/profile_alessandro.jpg";
import matias from "../../img/pic1.jpg";

export interface Testimonial {
   src: string;
   name: string;
   func: string;
   text: string;
}

export const testimonials = [
   {
      src: lauraSebu,
      name: "Laura Sebu",
      func: "Software Project Manager, Infobest Romania",
      text:
         "Ioana Catalina and me worked together on a major important project for our customer, Continental Automotive - Tools Department. As a supervisor and colleague, I can say that she is hard working, responsible, talented, passionate and creative. Her artistic skills are fully visible in her software engineering work. Catalina has the ability to learn and comprehend new technologies in short time and adapt to any challenge of the project. She has excellent software design and development technical skills in several areas, she is detail oriented, focused on quality results, customer focused, always looking for feedback. ",
   },
   {
      src: benjaminH,
      name: "Benjamin Hannsmann",
      func: "IT Head of MotoGarage and Hannsmann Immobilien, Germany",
      text:
         "Passionate, ambitious, focused, competent software developer who always finds a suitable solution. I would work with her again anytime.",
   },
   {
      src: alessandro,
      name: "Alessandro Caselli",
      func: "Java Developer, eDreams Barcelona",
      text:
         "Adventurous, forward-thinking, and energetic Interfaces enthusiast. She brings a fresh and capable contribution to any project, working with her was a pleasure. Her addition to the team proved to be a great choice, and her drive ultimately helped us delivering our new functionalities on time.",
   },

   // {
   //    src: matias,
   //    name: "Matias",
   //    func: "Lead Ingeneer at eDreams",
   //    text:
   //       "textLorem ipsum dolor sit amet, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. extLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
   // },
];
