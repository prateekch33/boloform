import React from "react";
import "../assets/css/guarantee.css";
import stamp from "../assets/images/stamp.png";
import sign from "../assets/images/sign.png";

export default function Guarantee() {
  return (
    <>
      <div className="guarantee">
        <div className="stamp">
          <img src={stamp} alt="stamp" />
        </div>
        <div className="details">
          <span>MY 100% NO-RISK DOUBLE-GUARANTEE</span>
          <h4>
            If you don’t like BoloForms over the next 30 days, I will happily
            refund 100% of your purchase. No questions asked.
          </h4>
          <p>
            Here's why I'm offering this -<br />
            <br />
            I have seen the power of automating your business workflows. Take
            some time out of your busy schedule today and see what all things
            can be automated in your workflows.
            <br />
            <br />
            You will find that most of your time is going in doing things that
            could be done better by automating. You just have to give it a shot!
            <br />
            <br />
            Start with automating small workflow and then gradually you will
            love it!!
            <br />
            <br />
            Thank you, and I hope we'll get the opportunity to be a part of your
            growth journey soon!
          </p>
          <img src={sign} style={{width: "30%", margin: "0"}} alt="sign" />
          <p>Paresh Deshmukh</p>
          <p>Co-Founder BoloForms</p>
        </div>
      </div>
    </>
  );
}
