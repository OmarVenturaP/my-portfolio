import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function header() {
  return (
    <div className="header">
      <header className="masthead" id="page-top">
        <div className="container">
          <div className="masthead-subheading text-light mt-3">Software Developer</div>
          <h1 className="masthead-heading text-uppercase text-light mb-5">Omar Ventura</h1>
          <div className="mt-3">
            <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/omarventurap/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faLinkedin} /></a>
            <a className="btn btn-dark btn-social mx-2" href="https://github.com/OmarVenturaP" aria-label="GitHub" target="_blank" rel="noreferrer"><FontAwesomeIcon className="p-2" icon={faGithub} /></a>
          </div>
        </div>
      </header>
    </div>
  );
}
