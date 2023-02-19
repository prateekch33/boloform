import React from "react";
import work1 from "../assets/images/work1.svg";
import work2 from "../assets/images/work2.svg";
import work3 from "../assets/images/work3.svg";
import "../assets/css/working.css"

export default function Working() {
  return (
    <>
      <div className="working" id="use">
        <div className="heading">
          <h3>How does Bolo Form work?</h3>
          <p>Setup your first workflow in just 3 easy steps</p>
        </div>
        <div className="img-grid">
          <div className="img-card">
            <img src={work1} alt="work1"/>
            <h3>Step 1:</h3>
            <p>
              Choose a template or add questions to create your Google Form.
            </p>
          </div>
          <div className="img-card">
            <img src={work2} alt="work2"/>
            <h3>Step 2:</h3>
            <p>
              Enable Single/Multi Step approval and add necessary approvers!
            </p>
          </div>
          <div className="img-card">
            <img src={work3} alt="work3"/>
            <h3>Step 3:</h3>
            <p>Now you can enable the workflow and share the Google Form.</p>
          </div>
        </div>
      </div>
    </>
  );
}
