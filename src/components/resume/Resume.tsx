import React from "react";
import FadeInSection from "../../utils/FadeInSection";
import "../../scss/resume.scss";
// import MyImage from "../../img/pic1.jpg";

export default function Resume() {
   return (
      <div className="background-color-neutral">
         {/* <div className="separator-transparent-above reverse" /> */}
         <h2 className="padding-wide-top" id="Resume">
            Education & Experience
         </h2>
         <div className="container-narrow padding-left-right padding-medium-top-bottom">
            <ul className="timeline">
               <FadeInSection direction="right">
                  <li>
                     <div className="direction-l">
                        <div className="flag-wrapper">
                           <span className="flag">
                              Politehnica University Timisoara
                           </span>
                           <span className="time-wrapper">
                              <span className="time">2009 - 2013</span>
                           </span>
                        </div>

                        <div className="desc">
                           Bachelor&apos;s Degree in Engineering at the Faculty
                           of Automation and Computers, section of Computers and
                           Information Technology, Politehnica University
                           Timisoara, Romania
                        </div>
                     </div>
                  </li>
               </FadeInSection>
               <FadeInSection direction="right">
                  <li>
                     <div className="direction-l">
                        <div className="flag-wrapper">
                           <span className="flag">
                              Information Technology Master
                           </span>
                           <span className="time-wrapper">
                              <span className="time">2013-2015</span>
                           </span>
                        </div>
                        <div className="desc">
                           Master Degree in Information Technology at
                           Politehnica University in Timisoara, Romania
                        </div>
                     </div>
                  </li>
               </FadeInSection>

               <FadeInSection direction="left">
                  <li>
                     <div className="direction-r">
                        <div className="flag-wrapper">
                           <span className="flag">
                              Android & Java Developer at Infobest
                           </span>
                           <span className="time-wrapper">
                              <span className="time">2014 - 2018</span>
                           </span>
                        </div>
                        <div className="desc">
                           Worked individually and as part of a team (Agile,
                           Scrum) in many Android and Java projects.
                           <br /> Worked in all phases of the mobile application
                           development lifecycle, from planning, requirement
                           gathering, designing to developing, testing,
                           launching and maintenance.
                        </div>
                     </div>
                  </li>
               </FadeInSection>

               <FadeInSection direction="left">
                  <li>
                     <div className="direction-r">
                        <div className="flag-wrapper">
                           <span className="flag">
                              Back-end Java Developer at Edreams
                           </span>
                           <span className="time-wrapper">
                              <span className="time">2018 - 2019</span>
                           </span>
                        </div>
                        <div className="desc">
                           Worked in a team on refactoring and developing a new
                           REST api server for the online booking of multiple
                           products through Edreams website. Technologies and
                           tools I&apos;ve used: Java, JBoss, Mercurial,
                           Jenkins, Bitbucket.
                        </div>
                     </div>
                  </li>
               </FadeInSection>

               <FadeInSection direction="left">
                  <li>
                     <div className="direction-r">
                        <div className="flag-wrapper">
                           <span className="flag">
                              Full Stack Web Developer freelancer
                           </span>
                           <span className="time-wrapper">
                              <span className="time">2019 - present</span>
                           </span>
                        </div>
                        <div className="desc">
                           Passionate about front end and web design, I&apos;ve
                           worked on a couple of projects using technologies and
                           tools like React, Javascript, NodeJs, MongoDB,
                           Github, Visual Studio Code IDE
                        </div>
                     </div>
                  </li>
               </FadeInSection>

               <FadeInSection direction="right">
                  <li>
                     <div className="direction-l">
                        <div className="flag-wrapper">
                           <span className="flag">
                              Photographer, photo editor, designer
                           </span>
                           <span className="time-wrapper">
                              <span className="time">2012 - present</span>
                           </span>
                        </div>
                        <div className="desc">
                           Knowledge in: photo shooting & photo editing,
                           designing posters, flyers, T-Shirt logos, video
                           editing. Gained knowledge in Digital Photography,
                           Lightroom, Adobe Photoshop, Sony Vegas.
                        </div>
                     </div>
                  </li>
               </FadeInSection>
            </ul>
         </div>
         <div className="separator-transparent-below" />
      </div>
   );
}
