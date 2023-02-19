import React, { useEffect } from "react";
import "../assets/css/footer.css";

export default function Footer() {
  useEffect(() => {
    var bars = document.querySelector(".fa-bars");
    var hidden = document.querySelector(".hidden-nav");
    var cross = document.querySelector(".fa-xmark");
    cross.style.display = "none";

    bars.addEventListener("click", () => {
      bars.style.display = "none";
      cross.style.display = "block";
      hidden.style.display = "block";
    });

    cross.addEventListener("click", () => {
      bars.style.display = "block";
      cross.style.display = "none";
      hidden.style.display = "none";
    });
  });
  return (
    <footer>
      <div className="top-row">
        <div className="column">
          <ul className="column-list">
            <li>
              <a href="#">📨 Support Email</a>
            </li>
            <li>
              <a href="#">📚 Help Center</a>
            </li>
            <li>
              <a href="#">📅 Video Call</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul className="list">
            <b>Pages</b>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul className="list">
            <b>Products</b>
            <li>
              <a href="#">Forms Approval</a>
            </li>
            <li>
              <a href="#">Signature</a>
            </li>
            <li>
              <a href="#">Sheetgod</a>
            </li>
            <li>
              <a href="#">Google Form UI Enhancer</a>
            </li>
            <li>
              <a href="#">BoloForms Document Generator</a>
            </li>
            <li>
              <a href="#">Timer+Proctor</a>
            </li>
            <li>
              <a href="#">Google Meet Attendance Tracker</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul className="list">
            <b>Legal</b>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
            <li>
              <a href="#"> Securtiy & Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-row">Made with 🔥+ ❤️ in India</div>
      <div className="social">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
    </footer>
  );
}
