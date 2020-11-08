import React from "react";
import { testimonials } from "./quotes";
import TestimonialCard from "./TestimonialCard";
import { Carousel } from "react-bootstrap";
import { useWindowSize, isXLG } from "../../utils/windowsSizeCheck";
import FadeInSection from "../../utils/FadeInSection";
// import MyImage from "../../img/pic1.jpg";

export default function Testimonials() {
   let windowSize = useWindowSize();
   return (
      <div className="background-color">
         <h2 className="padding-medium-top" id="Testimonials">
            Testimonials
         </h2>

         <div className="padding-left-right padding-medium-top-bottom">
            <FadeInSection direction="bottom">
               <Carousel indicators={false}>
                  {testimonials.map((testimonial, i) => {
                     return isXLG(windowSize) && i % 2 == 0 ? (
                        <Carousel.Item
                           key={testimonial.name}
                           style={{ minHeight: "50rem" }}
                        >
                           <div className="flex-div f-wrap f-justify-content-center">
                              <TestimonialCard testimonial={testimonial} />
                              {i + 1 < testimonials.length && (
                                 <TestimonialCard
                                    testimonial={testimonials[i + 1]}
                                 />
                              )}
                           </div>
                        </Carousel.Item>
                     ) : (
                        !isXLG(windowSize) && (
                           <Carousel.Item
                              key={testimonial.name}
                              style={{ minHeight: "40rem" }}
                           >
                              <div className="flex-div f-wrap f-justify-content-center">
                                 <TestimonialCard testimonial={testimonial} />
                              </div>
                           </Carousel.Item>
                        )
                     );
                  })}
               </Carousel>
            </FadeInSection>
         </div>
      </div>
   );
}
