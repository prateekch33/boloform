import React from "react";
import star from "../assets/images/star1.svg"
import "../assets/css/testimonials.css";

export default function Testimonials2(props) {
  return (
    <>
      <div className="testimonials">
        <div className="feedback">
          <div className="details">
            <div className="img">
              <img src={props.test} alt="testimonial writer" />
            </div>
            <div className="desc">
              <img src={star} alt="stars" />
              <p>{props.desc}</p>
              <h4>{props.name}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
