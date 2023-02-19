import React from "react";
import customer from "../assets/images/customer-trust.svg";
import "../assets/css/customer.css";

export default function CustomerTrust() {
  return (
    <>
      <div className="customer-trust">
        <div className="heading">
          <h3>
            Customers Who Are Trusting Us! <span>❤️</span>
          </h3>
          <p>Customers’ Testimonials</p>
        </div>
        <div className="image">
          <img src={customer} alt="customer" />
        </div>
      </div>
    </>
  );
}
