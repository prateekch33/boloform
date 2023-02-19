import React from "react";
import star from "../assets/images/star1.svg"
import "../assets/css/testimonials.css"

export default function Testimonials(props) {
  return (
    <>
      <div className="testimonials">
        <div className="feedback">
          <div className="details">
            <div className="img">
              <img src={props.test} alt="testimonial writer"/>
            </div>
            <div className="desc">
              <img src={star} alt="stars"/>
              <p>{props.desc}</p>
              <h4>{props.name}</h4>
            </div>
          </div>
        </div>
        <div className="testimonial-btns">
          <button className="test-btn">
            <i className="fa-solid fa-cloud-arrow-down"></i>Install for FREE
          </button>
          <button className="tst-btn">
            <i className="fa-solid fa-rocket"></i>Boloforms Premium
          </button>
        </div>
        <div className="checks">
          <p>
            <span>
              <i className="fa-solid fa-check"></i>
            </span>{" "}
            Trusted by 50000+ Businesses
          </p>
          <p>
            <span>
              <i className="fa-solid fa-check"></i>
            </span>{" "}
            30 Days Money Back Guarantee
          </p>
          <p>
            <span>
              <i className="fa-solid fa-check"></i>
            </span>{" "}
            1-1 Zoom & WhatsApp Onboarding
          </p>
        </div>
      </div>
    </>
  );
}
