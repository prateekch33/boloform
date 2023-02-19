import React from "react";
import leftLine from "../assets/images/left-line.jpeg";
import leftLineMob from "../assets/images/left-line-mob.jpg";
import rightLine from "../assets/images/right-line.jpeg";
import rightLineMob from "../assets/images/right-line-mob.jpg";
import logo from "../assets/images/logo.svg";
import "../assets/css/workflows.css"

export default function Workflows() {
  return (
    <>
      <div className="workflows">
        <div className="heading">
          <h3>Fully Automated Workflows</h3>
          <p>
            No more painful manual approval management and wasting countless
            hours.
          </p>
          <div className="workflow-animation">
            <div className="left">
              <div className="left-anim">
                <div className="row">Leave Application</div>
                <div className="row">Purchase Order</div>
                <div className="row">Fulfilment</div>
              </div>
              <div className="left-line">
                <img src={leftLine} alt="line"/>
              </div>
              <div className="left-line-mob">
                <img src={leftLineMob} alt="line"/>
              </div>
            </div>
            <div className="logo">
              <img src={logo} width="100%" alt="logo"/>
            </div>
            <div className="right">
              <div className="right-line">
                <img src={rightLine} alt="line"/>
              </div>
              <div className="right-line-mob">
                <img src={rightLineMob} alt="line"/>
              </div>
              <div className="right-anim">
                <div className="row">Approve</div>
                <div className="row">Reject</div>
                <div className="row">Send Pdf</div>
              </div>
            </div>
          </div>
          <p>
            BoloForms workflows acts as a glue holding together all your
            approval processes.
          </p>
        </div>
      </div>
    </>
  );
}
