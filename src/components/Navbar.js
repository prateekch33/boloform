import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="left-nav">
          <div className="nav-list">
            <div className="nav-items" id="dropdown">
              Products
              <div className="nav-dropdown">
                <div className="drop-item">
                  <b>Form Approvals</b>
                  <p>
                    Create interactive workflows, approval flows & automate
                    processes using Google Forms.
                  </p>
                </div>
                <div className="drop-item">
                  <b>SheetGod</b>
                  <p>AI-powered Excel magic made easy!</p>
                </div>
                <div className="drop-item">
                  <b>Signature</b>
                  <p>Add Signature href your Google Forms</p>
                </div>
              </div>
            </div>
            <div className="nav-items">Pricing</div>
            <div className="nav-items">Guides</div>
            <div className="nav-items">Templates</div>
          </div>
        </div>
        <div className="right-nav">
          <button className="install-btn">Install Now</button>
          <button className="premium-btn">BoloForm Premium</button>
        </div>
      </nav>
      <nav className="mob-nav">
        <div className="nav-show">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="ham">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="hidden-nav">
          <div className="left-nav">
            <div className="nav-list">
              <div className="nav-items" id="dropdown">
                Products
                <div className="nav-dropdown">
                  <div className="drop-item">
                    <b>Form Approvals</b>
                    <p>
                      Create interactive workflows, approval flows & automate
                      processes using Google Forms.
                    </p>
                  </div>
                  <div className="drop-item">
                    <b>SheetGod</b>
                    <p>AI-powered Excel magic made easy!</p>
                  </div>
                  <div className="drop-item">
                    <b>Signature</b>
                    <p>Add Signature href your Google Forms</p>
                  </div>
                </div>
              </div>
              <div className="nav-items">Pricing</div>
              <div className="nav-items">Guides</div>
              <div className="nav-items">Templates</div>
            </div>
          </div>
          <div className="right-nav">
            <button className="install-btn">Install Now</button>
            <button className="premium-btn">BoloForm Premium</button>
          </div>
        </div>
      </nav>
    </>
  );
}
