import React from "react";
import feat1 from "../assets/images/feat1.svg"
import feat2 from "../assets/images/feat2.svg"
import feat3 from "../assets/images/feat3.svg"
import feat4 from "../assets/images/feat4.svg"
import feat5 from "../assets/images/feat5.svg"
import feat6 from "../assets/images/feat6.svg"
import feat7 from "../assets/images/feat7.svg"
import feat8 from "../assets/images/feat8.svg"
import feat9 from "../assets/images/feat9.svg"
import "../assets/css/features.css"

export default function Features() {
  return (
    <>
      <div className="features" id="features">
        <div className="heading">
          <h2>Features</h2>
          <p>Everything that your organisation will love, & more.</p>
        </div>
        <div className="multi-sec">
          <div className="sec">
            <img src={feat1} alt="features"/>
            <h3>Get started in less than 5 minutes.</h3>
            <p>
              Just use an existing Google Form, add approvers, and we'll notify
              them via email when submissions are made.
            </p>
          </div>
          <div className="sec">
            <img src={feat2} alt="features"/>
            <h3>Multi-level workflows</h3>
            <p>
              To ensure that your executives do not approve a document until it
              has been reviewed and accepted by other employees, you can set up
              multi-level approval processes.
            </p>
          </div>
          <div className="sec">
            <img src={feat3} alt="features"/>
            <h3>Dynamic Reciepients</h3>
            <p>
              Approvers can be selected based on the answers to a form response
              or entered manually by the requestor.
            </p>
          </div>
          <div className="sec">
            <img src={feat4} alt="features"/>
            <h3>Role Based Workflows</h3>
            <p>
              Assign the following roles to your recipients: Approver, Receive a
              Copy, and Send Final Email Only.
            </p>
          </div>
          <div className="sec">
            <img src={feat5} alt="features"/>
            <h3>Conditional Logic</h3>
            <p>
              To prevent unnecessary work for approvers, set logic with your
              approvals to ensure approvers only receive the requests that are
              relevant to them.
            </p>
          </div>
          <div className="sec">
            <img src={feat6} alt="features"/>
            <h3>One-click Approvals</h3>
            <p>
              Notification emails are sent to users and can be approved with a
              single click.
            </p>
          </div>
          <div className="sec">
            <img src={feat7} alt="features"/>
            <h3>Responsive design</h3>
            <p>
              It is designed to be mobile-first, and seamlessly works on desktop
              and tablet as well.
            </p>
          </div>
          <div className="sec">
            <img src={feat8} alt="features"/>
            <h3>Enterprise grade security</h3>
            <p>
              Majority of data stored in your spreadsheet. This ensures you have
              the complete control of your data with end to end encryption.
            </p>
          </div>
          <div className="sec">
            <img src={feat9} alt="features"/>
            <h3>Custom Dashboard</h3>
            <p>
              Track approvals of various forms from a single place! See the
              approval process for each request in real-time
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
