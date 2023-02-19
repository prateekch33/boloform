import React from "react";
import "../assets/css/support.css";
import support1 from "../assets/images/support1.png";
import support2 from "../assets/images/support2.png";
import support3 from "../assets/images/support3.png";
import support4 from "../assets/images/support4.png";
import star3 from "../assets/images/start2.png";

export default function Support() {
  return (
    <>
      <div className="support" id="support">
        <div className="heading">
          <img src={star3} alt="star" style={{width:"100%"}}/>
          <h1>
            Award-winning support<span>.</span>
          </h1>
          <p>
            Best-in-className support. We’re always here to help – here’s how to
            connect.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={support1} alt="support" />
            <h3>? Whatsapp chat</h3>
            <p>Ask a question right now</p>
            <button>Start a Chat</button>
          </div>
          <div className="card">
            <img src={support2} alt="support" />
            <h3>? Email</h3>
            <p>Get in touch by email.</p>
            <button>Send an Email</button>
          </div>
          <div className="card">
            <img src={support3} alt="support" />
            <h3>? Help center</h3>
            <p>In Depth Guides.</p>
            <button>Read articles</button>
          </div>
          <div className="card">
            <img src={support4} alt="support" />
            <h3>? Google Meet</h3>
            <p>Guided support and Q&A.</p>
            <button>Book a time</button>
          </div>
        </div>
      </div>
    </>
  );
}
