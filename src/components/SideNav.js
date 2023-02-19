import React from "react";
import "../assets/css/sideNav.css";

export default function SideNav() {
  return (
    <>
      <nav className="navbar2">
        <div className="nav-list">
          <div className="nav-items">
            <i className="fa-solid fa-circle"></i>
            <a href="#customer">
              <b>Our Customers</b>
            </a>
          </div>
          <div className="nav-items">
            <i className="fa-solid fa-circle"></i>
            <a href="#use">
              <b>How to Use</b>
            </a>
          </div>
          <div className="nav-items">
            <i className="fa-solid fa-circle"></i>
            <a href="#features">
              <b>Features</b>
            </a>
          </div>
          <div className="nav-items">
            <i className="fa-solid fa-circle"></i>
            <a href="#support">
              <b>Support</b>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
