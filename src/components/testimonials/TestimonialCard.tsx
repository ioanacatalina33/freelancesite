import React from "react";
import quotesUpImg from "../../img/quotes_up.png";
import quotesDownImg from "../../img/quotes_down.png";
import { Testimonial } from "./quotes";

export default function TestimonialCard(props: { testimonial: Testimonial }) {
   const { testimonial } = props;
   return (
      <div
         className="card testimonial-card flex-1-0-45 f-justify-content-center f-align-items-center padding-left-right"
         key={testimonial.name}
      >
         <div className="card-body" style={{ color: "#555555" }}>
            <img
               src={quotesUpImg}
               alt=" "
               style={{
                  maxWidth: "2.5rem",
                  margin: "1rem 1rem 2rem 1rem",
               }}
            />
            <i>{testimonial.text}</i>
            <div className="text-right">
               <img
                  src={quotesDownImg}
                  alt=" "
                  style={{ maxWidth: "2.5rem", margin: "1rem" }}
               />
            </div>
         </div>
         <div
            className="card-footer flex-div text-left f-align-items-center"
            style={{
               background: "white",
               width: "100%",
               border: 0,
            }}
         >
            <img
               src={testimonial.src}
               alt={testimonial.name}
               className="avatar-small-size"
               style={{
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  float: "left",
               }}
            />{" "}
            <div>
               <b>{testimonial.name}</b>
               <br /> {testimonial.func}{" "}
            </div>
         </div>
      </div>
   );
}
