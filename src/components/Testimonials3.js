import React from "react";
import "../assets/css/testimonials2.css";
import star2 from "../assets/images/star2.svg";

export default function Testimonials3(props) {
  return (
    <>
      <div className="testimonials2">
        <p>{props.desc}</p>
        <img src={star2} alt="star"/>
        <div className="author">
          <img src={props.test} alt="testimonial author"/>
          <div className="names">
            <h4>{props.name}</h4>
            <p>{props.desig}</p>
          </div>
        </div>
      </div>
    </>
  );
}
