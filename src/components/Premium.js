import React from 'react'
import "../assets/css/animation.css"
import animation from "../assets/images/animation.jpeg"

export default function Premium() {
  return (
    <>
        <div className="premium">
          <div className="animation">
            <img src={animation} width="100%" alt="animation"/>
          </div>
          <div className="premium-text">
            <h3>An End-To-End Workflow Platform For All Your Business Needs</h3>
            <p>
              1000+ companies-from Startups to Fortune 500s use BoloForms
              Approvals to build and manage business processes across
              departments.
            </p>
            <button className="premium-btn">
              <i className="fa-solid fa-rocket"></i>BoloForm Premium
            </button>
          </div>
        </div>
    </>
  )
}
