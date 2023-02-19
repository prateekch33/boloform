import React from "react";
import "../assets/css/hero.css";

export default function Hero() {
  var videoUrl = "https://www.youtube.com/embed/riiUkCRpIio";
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h2>Transform Google Forms Into Interactive Workflows</h2>
          <p>
            BoloForms is a Google Forms add on that allows you to add
            conditional logic to your forms. With BoloForms, you can create
            interactive workflows, approval flows & automate processes.
          </p>
          <button className="hero-btn">
            <i className="fa-solid fa-rocket"></i>Install for free
          </button>
        </div>
        <div className="hero-video">
          <iframe
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
