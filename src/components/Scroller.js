import React from "react";
import user1 from "../assets/images/user1.svg"
import user2 from "../assets/images/user2.svg"
import user3 from "../assets/images/user3.svg"
import user4 from "../assets/images/user4.svg"
import user5 from "../assets/images/user5.svg"
import "../assets/css/scroller.css"

export default function Scroller() {
  return (
    <>
      <div className="scroller" id="customer">
        <div className="heading">
          <h3>Bolo Form is used by</h3>
        </div>
        <div className="scroller-array">
          <div className="scroller-card">
            <img src={user1} alt="user1"/>
          </div>
          <div className="scroller-card">
            <img src={user2} alt="user2"/>
          </div>
          <div className="scroller-card">
            <img src={user3} alt="user3"/>
          </div>
          <div className="scroller-card">
            <img src={user4} alt="user4"/>
          </div>
          <div className="scroller-card">
            <img src={user5} alt="user5"/>
          </div>
        </div>
      </div>
    </>
  );
}
